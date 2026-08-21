import { chmodSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { parseReleasedPaths, publishPackages, type CommandRunner } from '../../scripts/publish-packages';

describe('parseReleasedPaths', () => {
  test('returns the release paths', () => {
    expect(
      parseReleasedPaths(
        JSON.stringify({
          paths_released: JSON.stringify(['.', 'packages/mcp-server']),
        }),
      ),
    ).toEqual(['.', 'packages/mcp-server']);
  });

  test.each([
    {},
    { paths_released: [] },
    { paths_released: JSON.stringify([]) },
    { paths_released: JSON.stringify(['']) },
  ])('rejects malformed release output %#', (outputs) => {
    expect(() => parseReleasedPaths(JSON.stringify(outputs))).toThrow();
  });
});

describe('bin/publish-npm', () => {
  const publishScript = path.resolve(__dirname, '../../bin/publish-npm');

  function runPublish(exactVersionOutput: string) {
    const root = mkdtempSync(path.join(tmpdir(), 'mobilerun-publish-test-'));
    const fakeBin = path.join(root, 'bin');
    const packageDir = path.join(root, 'package');
    const distDir = path.join(packageDir, 'dist');
    const publishLog = path.join(root, 'publish.log');
    mkdirSync(fakeBin);
    mkdirSync(distDir, { recursive: true });
    writeFileSync(
      path.join(distDir, 'package.json'),
      JSON.stringify({
        name: '@mobilerun/test-package',
        version: '5.2.1',
      }),
    );
    writeFileSync(
      path.join(fakeBin, 'pnpm'),
      `#!/usr/bin/env bash
if [[ "$1" == "publish" ]]; then echo published >> "$PUBLISH_LOG"; fi
exit 0
`,
    );
    writeFileSync(
      path.join(fakeBin, 'npm'),
      `#!/usr/bin/env bash
if [[ "$*" == *"@5.2.1 version"* ]]; then
  printf '%s\\n' "$EXACT_VERSION_OUTPUT"
else
  printf '%s\\n' '"5.2.0"'
fi
`,
    );
    chmodSync(path.join(fakeBin, 'pnpm'), 0o755);
    chmodSync(path.join(fakeBin, 'npm'), 0o755);

    const result = spawnSync('bash', [publishScript], {
      cwd: packageDir,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${fakeBin}:${process.env['PATH']}`,
        NPM_TOKEN: 'test-token',
        PUBLISH_LOG: publishLog,
        EXACT_VERSION_OUTPUT: exactVersionOutput,
      },
    });

    return {
      ...result,
      publishLog: readFileSync(publishLog, { encoding: 'utf8', flag: 'a+' }),
    };
  }

  test('skips an exact version that is already published', () => {
    const result = runPublish('"5.2.1"');

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('already published; skipping');
    expect(result.publishLog).toBe('');
  });

  test('publishes when the exact version is absent', () => {
    const result = runPublish('{"error":{"code":"E404"}}');

    expect(result.status).toBe(0);
    expect(result.publishLog).toContain('published');
  });
});

describe('publishPackages', () => {
  test('continues with independent packages and reports failures at the end', () => {
    const commands: Array<{ command: string; cwd: string }> = [];
    const run: CommandRunner = (command, options) => {
      const cwd = String(options.cwd);
      commands.push({ command, cwd });
      if (command.startsWith('bash ') && cwd.endsWith('/first')) {
        throw new Error('registry rejected first');
      }
    };

    expect(() => publishPackages(['first', 'second'], '/repo', run)).toThrow(
      'Failed to publish package(s): first',
    );
    expect(commands.some(({ command, cwd }) => command.startsWith('bash ') && cwd === '/repo/second')).toBe(
      true,
    );
  });

  test('rejects paths outside the repository', () => {
    const run = jest.fn();

    expect(() => publishPackages(['../outside'], '/repo', run)).toThrow(
      'Released package path escapes the repository',
    );
    expect(run).toHaveBeenCalledTimes(1);
  });
});
