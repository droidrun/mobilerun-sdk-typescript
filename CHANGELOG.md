# Changelog

## 2.1.0 (2026-02-19)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/droidrun/mobilerun-sdk-typescript/compare/v2.0.0...v2.1.0)

### Features

* **api:** add models endpoint ([038f69a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/038f69a460c7b27a70e5a0e760595564f786196a))
* **api:** api update ([ead6382](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ead638272aecd0d231782aa7535bca6025974b3a))
* **api:** api update ([5409a2a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5409a2a8ddf197d5adc48ad855792cfa718df010))
* **api:** api update ([f37136d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/f37136dbc9f1ad15a6451986b8d42077f14f9c54))
* **api:** api update ([342001a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/342001a1c69508c857f3b2bf4b7c5dd8c887b441))
* **api:** api update ([99e8cf7](https://github.com/droidrun/mobilerun-sdk-typescript/commit/99e8cf78eddb8650e97c08c9be9439ae3e453c85))
* **api:** api update ([d44fda4](https://github.com/droidrun/mobilerun-sdk-typescript/commit/d44fda4361f9e874424e9576b66563d51f756849))
* **api:** api update ([731d81b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/731d81b5958ac84e4d09392ec1913c5e4b9b82e4))
* **api:** api update ([44ad979](https://github.com/droidrun/mobilerun-sdk-typescript/commit/44ad979de1bfc1e3403155cb9952090bfa195781))
* **api:** api update ([265f384](https://github.com/droidrun/mobilerun-sdk-typescript/commit/265f3847b44f1a6f07a2980a0f51be7501170a80))
* **api:** api update ([8836128](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8836128d6ebd3a84d882ec38d806862195a4e326))
* **api:** api update ([fadfea3](https://github.com/droidrun/mobilerun-sdk-typescript/commit/fadfea3d241b522efdaa1299a879794ae850950f))
* **api:** expose device count endpoint ([9fe678e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/9fe678ebcd23e26fb33e64470a5c81b52f0e5bf3))
* **api:** manual updates ([5d5298d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5d5298d7ef8e1ddb0502ec736e877d605702f643))
* **api:** manual updates ([779508d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/779508d64faa795f619d36b43b7d57f176503a39))
* **mcp:** add initial server instructions ([efbcc68](https://github.com/droidrun/mobilerun-sdk-typescript/commit/efbcc6885d5fe56d92de64657df505c576a26a15))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([c0840d2](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c0840d2d582ce61efb8e6fe3c7991e0133b4a36b))
* **client:** avoid removing abort listener too early ([cee2854](https://github.com/droidrun/mobilerun-sdk-typescript/commit/cee28547dd26b370e13c87dd64da65743083a1da))
* **docs:** fix mcp installation instructions for remote servers ([d13778e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/d13778e404572a754e1221d44129ee49a670756a))
* **mcp:** allow falling back for required env variables ([6dacb3f](https://github.com/droidrun/mobilerun-sdk-typescript/commit/6dacb3f7b059df10f2fcfcd7c735f1fbfeecfa7d))


### Chores

* **ci:** upgrade `actions/github-script` ([0b47b36](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0b47b366408e522ab5f02f5c4d2890a9eab7726c))
* **client:** do not parse responses with empty content-length ([aa66bf3](https://github.com/droidrun/mobilerun-sdk-typescript/commit/aa66bf321faa017cbb0adf7d655787effa4d8212))
* **client:** restructure abort controller binding ([6cca76e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/6cca76e83bf7c77bd0ffb5461007db11f365c842))
* fix typo in descriptions ([353d436](https://github.com/droidrun/mobilerun-sdk-typescript/commit/353d4367fc9623cfcbcac9a17dee28bf7cdeee9f))
* **internal/client:** fix form-urlencoded requests ([3a1ad33](https://github.com/droidrun/mobilerun-sdk-typescript/commit/3a1ad335d4d06315ec18dbd8bad5e15df78552cb))
* **internal:** add health check to MCP server when running in HTTP mode ([5348ad9](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5348ad9a0d0e8a432c7b30eb3055bf7b2618cbad))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([26c1bc5](https://github.com/droidrun/mobilerun-sdk-typescript/commit/26c1bc57f11989f0bb9dedd7dca5cd665d702857))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([2bd9e70](https://github.com/droidrun/mobilerun-sdk-typescript/commit/2bd9e7089c5ae7418f20d782bfa9c1f3e91cb1d4))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([68abad9](https://github.com/droidrun/mobilerun-sdk-typescript/commit/68abad94145d455a1126f66ea3864a5e9c0e2504))
* **internal:** avoid type checking errors with ts-reset ([ee377fd](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ee377fd3718ae949a5e38d764d7782f5445e9671))
* **internal:** cache fetch instruction calls in MCP server ([07085d0](https://github.com/droidrun/mobilerun-sdk-typescript/commit/07085d003359701209b6bee5ef29d8382b2d2d60))
* **internal:** codegen related update ([5b2ce4b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5b2ce4b1b8b6d4712fee3db4b0e8fbc7ebad526b))
* **internal:** codegen related update ([2569d97](https://github.com/droidrun/mobilerun-sdk-typescript/commit/2569d977b26cd298b21fdb62d03f85a5d8ff438e))
* **internal:** codegen related update ([8902feb](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8902feb75e94fbd5784707ee142bcbc6457d46ed))
* **internal:** codegen related update ([8199708](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8199708078fb855128ed28a1cb8ff1575f01294b))
* **internal:** codegen related update ([62e97f6](https://github.com/droidrun/mobilerun-sdk-typescript/commit/62e97f6a31ec1b892339a179e4905511748b8fb1))
* **internal:** improve layout of generated MCP server files ([c02631b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c02631b9be20fea5a446f0ad1c872fe5ab64a378))
* **internal:** improve reliability of MCP servers when using local code mode execution ([8e4dc2f](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8e4dc2f54f70503c8825920b8afcf7ea0d18222b))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([0e38b25](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0e38b25d65cf5479883228d85fd80aaeb2d97a8f))
* **internal:** support oauth authorization code flow for MCP servers ([e99360d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/e99360d8d47ac56872fcab9788b621f57ebd5781))
* **internal:** update `actions/checkout` version ([5ba72bb](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5ba72bbc70ff5409365552dbbfc18f196d51fbd0))
* **internal:** update lock file ([29c950b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/29c950be2840cf2bb0b66d8b50d69cacb365b284))
* **internal:** upgrade babel, qs, js-yaml ([586449d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/586449dc84a44436a326e417ab68a14024c9cc87))
* **internal:** upgrade brace-expansion and @babel/helpers ([30ce259](https://github.com/droidrun/mobilerun-sdk-typescript/commit/30ce259c13b79d20e1d9a4f1ea2e049ee2d694fe))
* **internal:** upgrade pnpm ([64af508](https://github.com/droidrun/mobilerun-sdk-typescript/commit/64af508de4aee8e49fc1935362591d27231fb44d))
* **mcp:** add intent param to execute tool ([39c6613](https://github.com/droidrun/mobilerun-sdk-typescript/commit/39c66134b4e263bdecb9fbfbc7c54f23afd3f9c6))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([3c091cf](https://github.com/droidrun/mobilerun-sdk-typescript/commit/3c091cf74a790e212db0aa3dc56354a1b0989706))
* **mcp:** pass intent param to execute handler ([0aeff52](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0aeff522f783533d1f3f7fbf20f48e04b7df1b48))
* **mcp:** up tsconfig lib version to es2022 ([c8643f0](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c8643f027c70336eb816bee549267e84b524737b))
* **mcp:** upgrade dependencies ([ef646fb](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ef646fb16f04285d46a3481b7f29863907fc488a))

## 2.0.0 (2026-01-12)

Full Changelog: [v1.0.0...v2.0.0](https://github.com/droidrun/mobilerun-sdk-typescript/compare/v1.0.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** add devices.actions.global ([3035e7f](https://github.com/droidrun/mobilerun-sdk-typescript/commit/3035e7f940b331d68223b7a33ad11d10fd0c6003))
* **api:** add devices.tasks.list ([cf55256](https://github.com/droidrun/mobilerun-sdk-typescript/commit/cf5525602f68469edc6ac36df2498eb3b21ae442))
* **api:** add hooks retrieve endpoint ([0398b81](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0398b8132d12cd497a02709ecb9528f716f0bb6f))
* **api:** api update ([622dadf](https://github.com/droidrun/mobilerun-sdk-typescript/commit/622dadf4951fa6bcd016543174534465599ca8ba))
* **api:** api update ([474ac86](https://github.com/droidrun/mobilerun-sdk-typescript/commit/474ac8669d680c3173bc55b783e4415c7b897053))
* **api:** api update ([1c3b984](https://github.com/droidrun/mobilerun-sdk-typescript/commit/1c3b984e33218dacaa9dd78ce9a9289509b288d7))
* **api:** api update ([5331340](https://github.com/droidrun/mobilerun-sdk-typescript/commit/53313409f627579a8434da469669889e229ac4f7))
* **api:** api update ([204b6dc](https://github.com/droidrun/mobilerun-sdk-typescript/commit/204b6dc48528acb1808e56d371e46bbf3d44b45f))
* **api:** api update ([875fca3](https://github.com/droidrun/mobilerun-sdk-typescript/commit/875fca34d6fa76c8b0ecbc6775e975d10c81d5d1))
* **api:** api update ([b361794](https://github.com/droidrun/mobilerun-sdk-typescript/commit/b361794d4a859734efff24e9b90ec9ee1d3057c3))
* **api:** api update ([5f8a9bd](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5f8a9bd34e4e48ba42b92551fae9e04180fbf88a))
* **api:** api update ([d3437a7](https://github.com/droidrun/mobilerun-sdk-typescript/commit/d3437a7c313bede8c6a79576d73791e8ade7bd69))
* **api:** api update ([467128e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/467128ed47e7110e38b9798bffb06aa315dff441))
* **api:** api update ([6fc9b96](https://github.com/droidrun/mobilerun-sdk-typescript/commit/6fc9b964924ec2f8002a27b1713eb8685cb495df))
* **api:** api update ([5794561](https://github.com/droidrun/mobilerun-sdk-typescript/commit/5794561a8c70cc4892b1f8303656d6a742789322))
* **api:** api update ([bf36bbd](https://github.com/droidrun/mobilerun-sdk-typescript/commit/bf36bbd62643f99f92bb71f2836b8bdf326a980f))
* **api:** api update ([0c2aff9](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0c2aff978984b8f77e1ae2369328526a102450d0))
* **api:** api update ([613f1cd](https://github.com/droidrun/mobilerun-sdk-typescript/commit/613f1cd01b97f50fc3e21c7615905639741d9ec4))
* **api:** api update ([1004afa](https://github.com/droidrun/mobilerun-sdk-typescript/commit/1004afaaa87df7108c2c90a8ea906a339d202879))
* **api:** api update ([013f533](https://github.com/droidrun/mobilerun-sdk-typescript/commit/013f53389594eeda8abe90a4bb2058d8cb6880c8))
* **api:** api update ([29c3a94](https://github.com/droidrun/mobilerun-sdk-typescript/commit/29c3a94733f16b54de18145bc0aaef6aec88a77d))
* **api:** api update ([39013e1](https://github.com/droidrun/mobilerun-sdk-typescript/commit/39013e13c5030656d5eda44a985b7811db406312))
* **api:** api update ([18a613a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/18a613a1c13fdee6736c0aaa18633dd1301e1bd2))
* **api:** api update ([9543a30](https://github.com/droidrun/mobilerun-sdk-typescript/commit/9543a30f6cd728830dc5b0b33557a6112e6551ed))
* **api:** api update ([8490b23](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8490b2383356dc927458d19c95b298dc021a5163))
* **api:** api update ([6740d4b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/6740d4b152a2979530c7ebf7e301fcff4853eeec))
* **api:** api update ([0ba0f45](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0ba0f45faed0658b90c12b790558dd0391105466))
* **api:** api update ([ea02114](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ea02114ab87ea9fdcdc77d9a281daaaa1e73586b))
* **api:** api update ([e94bb3b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/e94bb3be010321272003d618f053aa05f016ca3e))
* **api:** api update ([d9d915b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/d9d915bb21e10a33df124753cc1b5b4472ce8522))
* **api:** api update ([b7950ff](https://github.com/droidrun/mobilerun-sdk-typescript/commit/b7950ff0a7e6202bbae9973e7c012badd08b5644))
* **api:** api update ([c3b4929](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c3b492937a8d70e0d327ce85e879761ce9355fe5))
* **api:** api update ([08072e5](https://github.com/droidrun/mobilerun-sdk-typescript/commit/08072e5e50a272162ed8cf3f99cb1c7e8d05554f))
* **api:** api update ([7af3fec](https://github.com/droidrun/mobilerun-sdk-typescript/commit/7af3fecc259f28124c0cdea3c5b4f3cb7ad2ab74))
* **api:** api update ([1581b8a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/1581b8a40138f69f01bcfddaf65b140d16590dc1))
* **api:** api update ([8d5270c](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8d5270c28a2c95b85c9312417b2098329cf90648))
* **api:** api update ([7ea9fb8](https://github.com/droidrun/mobilerun-sdk-typescript/commit/7ea9fb8e67aca4b310e088228228293d26096013))
* **api:** devices methods ([f19fca9](https://github.com/droidrun/mobilerun-sdk-typescript/commit/f19fca9bc38679cdb4f5ddc908cb38094627aa42))
* **mcp:** add typescript check to code execution tool ([355158b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/355158b34329d00a3443622cf1935779bdd3b52b))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([7de8435](https://github.com/droidrun/mobilerun-sdk-typescript/commit/7de8435e92e930b6ea212480cf0bd48952b71b61))
* **mcp:** correct code tool api output types ([64ca460](https://github.com/droidrun/mobilerun-sdk-typescript/commit/64ca4606cb12b88fce483183874251e77fa0074b))
* **mcp:** fix options parsing ([ab1843d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ab1843d584f3bb81c699fd52991d2febf44c273f))
* **mcp:** pass base url to code tool ([53997c5](https://github.com/droidrun/mobilerun-sdk-typescript/commit/53997c5f24a9b2d3c65f3969747a1f2f55bde73f))
* **mcp:** update code tool prompt ([eaeb3a9](https://github.com/droidrun/mobilerun-sdk-typescript/commit/eaeb3a9d2cad65ea54c853bd76318f1367ce87b9))
* **models:** add element node stainless config ([e99b19f](https://github.com/droidrun/mobilerun-sdk-typescript/commit/e99b19f45d77598fb722add80bea2930a1456202))


### Chores

* break long lines in snippets into multiline ([ad0b059](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ad0b059ffc31777357eef61456b910a177b6bf40))
* **internal:** codegen related update ([997201e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/997201ec50a58258fd4cf05b1e1370afd357640c))
* **internal:** codegen related update ([b5ac8a2](https://github.com/droidrun/mobilerun-sdk-typescript/commit/b5ac8a2eacd4429b54a729790a166a3e8b9be8fa))
* **internal:** escape package name in pnpm workspace file ([273a577](https://github.com/droidrun/mobilerun-sdk-typescript/commit/273a57728cc8914abc95b8cd80c7b6482a7d2f15))
* **internal:** fix dockerfile ([4f89806](https://github.com/droidrun/mobilerun-sdk-typescript/commit/4f89806573438c9aeb2c557beeb1de11944cb163))
* **mcp:** remove deprecated tool schemes ([e5c7979](https://github.com/droidrun/mobilerun-sdk-typescript/commit/e5c7979e98d255b31929ada9d6bf4739eca7f566))
* use latest @modelcontextprotocol/sdk ([73f83dd](https://github.com/droidrun/mobilerun-sdk-typescript/commit/73f83dd1200ea1adc53ff33fb74867c833320724))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([3e64a3c](https://github.com/droidrun/mobilerun-sdk-typescript/commit/3e64a3c8f3751c1c10e7a41045594789868ed986))

## 1.0.0 (2025-12-03)

Full Changelog: [v0.4.0...v1.0.0](https://github.com/droidrun/mobilerun-sdk-typescript/compare/v0.4.0...v1.0.0)

### Features

* **api:** named python and mcp to mobilerun ([307fdf6](https://github.com/droidrun/mobilerun-sdk-typescript/commit/307fdf611e850cc2f67bf8a4202133db4b9ac89e))

## 0.4.0 (2025-12-03)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/droidrun/mobilerun-sdk-typescript/compare/v0.3.0...v0.4.0)

### Features

* **api:** add TaskTrajectoryDecoderStream utility to transform raw into typed event stream ([0b60022](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0b60022ab47eefec9d2e0f09e76d868e38b9cfc0))
* **api:** added endpoints for hooks and ui_states retrieval ([00e8f99](https://github.com/droidrun/mobilerun-sdk-typescript/commit/00e8f999d53c49f0a49c94f73efa359d330a7e1d))
* **api:** api update ([1479529](https://github.com/droidrun/mobilerun-sdk-typescript/commit/147952903a4da9f3fc00d7a5d141200cec6f7e21))
* **api:** api update ([eb3933e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/eb3933ef5f7837d5dcd7873302810115bd11d805))
* **api:** api update ([a09bde5](https://github.com/droidrun/mobilerun-sdk-typescript/commit/a09bde53f099610aaa3dc186ed802e997e5f0ce9))
* **api:** api update ([ea9aa09](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ea9aa095a4014069b9e239cde3ceb27e6d93055b))
* **api:** api update ([d968b37](https://github.com/droidrun/mobilerun-sdk-typescript/commit/d968b370544f65425ebf70243c59b5e22e615e98))
* **api:** api update ([265ea45](https://github.com/droidrun/mobilerun-sdk-typescript/commit/265ea45e95640549bb542e990b08f2e23826bf2e))
* **api:** api update ([1dd8345](https://github.com/droidrun/mobilerun-sdk-typescript/commit/1dd83450ee527d36079e97d375c8b250d293162c))
* **api:** api update ([0a46ec3](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0a46ec316e78c56ae62552732654f9caa3672304))
* **api:** api update ([3458435](https://github.com/droidrun/mobilerun-sdk-typescript/commit/3458435e330267154b4bb606396d272dd139819a))
* **api:** api update ([833a98b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/833a98bb5e2cdb3f253a72f6f260c40b318d8c7f))
* **api:** api update ([7e8fd97](https://github.com/droidrun/mobilerun-sdk-typescript/commit/7e8fd979b6b3713d86ebc397582aa65956ff37a6))
* **api:** api update ([106828f](https://github.com/droidrun/mobilerun-sdk-typescript/commit/106828ff361add04c928c4d81e15297358abbd66))
* **api:** api update ([69fdd65](https://github.com/droidrun/mobilerun-sdk-typescript/commit/69fdd656c32191ddb02ad39bf545a77151609910))
* **api:** api update ([6783378](https://github.com/droidrun/mobilerun-sdk-typescript/commit/678337875512ccdb8148f6ac266b4e5277096632))
* **api:** api update ([7086699](https://github.com/droidrun/mobilerun-sdk-typescript/commit/7086699e1f4d3f6cf20ccb4412aa397ffa7e5e0f))
* **api:** api update ([318f62d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/318f62d5b2ccb0cc222897054123ad0b18e6f734))
* **api:** api update ([4a52b2d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/4a52b2d6f06965c480d770b223e3700518c42865))
* **api:** api update ([c23f66b](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c23f66b83c046bd1022c47641ad4c5c32d8fecef))
* **api:** api update ([3edbb3e](https://github.com/droidrun/mobilerun-sdk-typescript/commit/3edbb3e304fba92bf3196d459f87bb7f81a55bba))
* **api:** api update ([719fe40](https://github.com/droidrun/mobilerun-sdk-typescript/commit/719fe40acacb1ad95fd3815f9ac74cb2ce1919e2))
* **api:** api update ([8d0abea](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8d0abea89c518046c4c1b848c8dc42fc61d3b07f))
* **api:** api update ([4ea70ad](https://github.com/droidrun/mobilerun-sdk-typescript/commit/4ea70ad1597d91659722c5be218c404a61b4f98e))
* **api:** api update ([fb22914](https://github.com/droidrun/mobilerun-sdk-typescript/commit/fb22914d40d075a958235066ea125fa4cec531ab))
* **api:** api update ([6b5764c](https://github.com/droidrun/mobilerun-sdk-typescript/commit/6b5764c00f71e638ee2d8095c1b11d8c9d22f5cc))
* **api:** api update ([2e1baf5](https://github.com/droidrun/mobilerun-sdk-typescript/commit/2e1baf56250c404ecc24ce4fb981bcb8c4f3e527))
* **api:** api update ([b6d00ab](https://github.com/droidrun/mobilerun-sdk-typescript/commit/b6d00ab153aa4bfc512d4b32c07aeff35df3509d))
* **api:** api update ([8d0758c](https://github.com/droidrun/mobilerun-sdk-typescript/commit/8d0758cecf50a6855a55f26de98c69f2d637b737))
* **api:** api update ([f438f4a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/f438f4a74abf0dd084ef01a4106d662df25f89f3))
* **api:** api update ([46a46b6](https://github.com/droidrun/mobilerun-sdk-typescript/commit/46a46b6df4e0d2066157fa003da3c63f669a3b11))
* **api:** api update ([e77ccaa](https://github.com/droidrun/mobilerun-sdk-typescript/commit/e77ccaacac8ec5b8293045517619bc8d129c0a0e))
* **api:** api update ([c10dbab](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c10dbab3f8803a9e14cd6941c50fccf9551b00b7))
* **api:** api update ([44dd4db](https://github.com/droidrun/mobilerun-sdk-typescript/commit/44dd4db2aec11df1df896c2f088b27f29e854519))
* **api:** api update ([05ffd13](https://github.com/droidrun/mobilerun-sdk-typescript/commit/05ffd13b41a8021517be492fc049e0bfff273bb5))
* **api:** cleanup ([c8c530c](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c8c530c0c342addce386125e5f49ebdfe27a008b))
* **api:** make key optional ([f71bf05](https://github.com/droidrun/mobilerun-sdk-typescript/commit/f71bf0515a751c657b9422cbf73d30ed984ab074))
* **api:** manual spec updates ([c71eecf](https://github.com/droidrun/mobilerun-sdk-typescript/commit/c71eecf1792815e8c84ce61b88a9fd0ce84ec693))
* **api:** manual updates ([98cfad2](https://github.com/droidrun/mobilerun-sdk-typescript/commit/98cfad2a8ec30c583a6cb449dbd4f1d3e91971d5))
* **api:** manual updates ([e6e8b97](https://github.com/droidrun/mobilerun-sdk-typescript/commit/e6e8b976e388a006ff16a6098b494a6bada9bc27))
* **api:** manual updates ([f387587](https://github.com/droidrun/mobilerun-sdk-typescript/commit/f387587d77301594fe10380061211b44642369ed))
* **api:** manual updates ([0b7d023](https://github.com/droidrun/mobilerun-sdk-typescript/commit/0b7d023a632cca4ac7ecf77bcf0be326ca37fe82))
* **api:** manual updates ([4e0ed1c](https://github.com/droidrun/mobilerun-sdk-typescript/commit/4e0ed1c3d172d0453c23579034cb0b5dd98912b4))
* **api:** remove testing environments ([16c7aec](https://github.com/droidrun/mobilerun-sdk-typescript/commit/16c7aec769310aec94f017cb1d429ba0c7e58cfe))
* **api:** rename repo name ([680b6c6](https://github.com/droidrun/mobilerun-sdk-typescript/commit/680b6c6e3a71b76b6556f1410ef1bc1038fb9df2))
* **api:** trigger docker ([bb0713f](https://github.com/droidrun/mobilerun-sdk-typescript/commit/bb0713fa2096ff6574fd6436861392cb53e06e6a))
* **api:** update docs url ([cc9f53d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/cc9f53d4df9dcf111a80d26deeb51d2cad52c4bf))
* **api:** update organisation name to mobilerun ([f7771aa](https://github.com/droidrun/mobilerun-sdk-typescript/commit/f7771aae0ff726f4e8fd1838433b68c7de3ad94a))
* **api:** update task schema ([ddadbbf](https://github.com/droidrun/mobilerun-sdk-typescript/commit/ddadbbfeffbe8f5f05773d8cee5ccfeb4e21f375))
* **api:** update to mobilerun ([9c519c3](https://github.com/droidrun/mobilerun-sdk-typescript/commit/9c519c31a9d1223b6e2ca7750f2d5d0421231934))
* **mcp:** add detail field to docs search tool ([a905449](https://github.com/droidrun/mobilerun-sdk-typescript/commit/a905449b77d3d47673a0bf76180f1816a6d5a7cd))
* **mcp:** return logs on code tool errors ([5402809](https://github.com/droidrun/mobilerun-sdk-typescript/commit/54028092ee5abc105b1d536b06f5b6f4b8f6926c))


### Bug Fixes

* **mcp:** return tool execution error on api error ([41e98aa](https://github.com/droidrun/mobilerun-sdk-typescript/commit/41e98aa19c16fd18e13aa43ba095ffba096c31ff))
* **mcp:** return tool execution error on jq failure ([afe36c4](https://github.com/droidrun/mobilerun-sdk-typescript/commit/afe36c4b435f77869f2fac577aec8308233781ec))


### Chores

* **client:** fix logger property type ([b1f597d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/b1f597d7473ccd876ecaa2ef53f38405764e127b))
* **config:** set package manager to pnpm & allow sdk usage in browser ([91f3a3d](https://github.com/droidrun/mobilerun-sdk-typescript/commit/91f3a3dea054f8138037a1de8e21b00efd2c7a22))
* configure new SDK language ([edb7a5a](https://github.com/droidrun/mobilerun-sdk-typescript/commit/edb7a5a314042792a632887e97bcc727e539ca0b))
* **internal:** codegen related update ([fe91176](https://github.com/droidrun/mobilerun-sdk-typescript/commit/fe9117611ab520c77e1cf467d01c15834e311eb4))
* **internal:** codegen related update ([4f00bb8](https://github.com/droidrun/mobilerun-sdk-typescript/commit/4f00bb8cbf4ab3a9b5961311d626bfda6fee38b9))
* **internal:** upgrade eslint ([45d2eaa](https://github.com/droidrun/mobilerun-sdk-typescript/commit/45d2eaaf2ce3ff451ae94dda613318c5a2bf29dc))
* **mcp:** upgrade jq-web ([a678950](https://github.com/droidrun/mobilerun-sdk-typescript/commit/a6789507f71f488eb2d743a768296fccd269ceae))
* update SDK settings ([05697f8](https://github.com/droidrun/mobilerun-sdk-typescript/commit/05697f8a9bf0a24cc3fd3d81536e517ef6cbea09))

## 0.3.0 (2025-10-17)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/droidrun/cloud-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** update model & endpoint config ([b8ba47d](https://github.com/droidrun/cloud-sdk-typescript/commit/b8ba47d953bc2a730613b0e8eb2c100c21789be0))
* **api:** update to latest api spec ([471313d](https://github.com/droidrun/cloud-sdk-typescript/commit/471313dc19bcdbb0002fb9bd586fb8c6412a544c))

## 0.2.0 (2025-10-11)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/droidrun/cloud-sdk-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** add get trajectory method to tasks resource ([14079ef](https://github.com/droidrun/cloud-sdk-typescript/commit/14079efb9221bcd71821c21589d15eb17a76d3d0))

## 0.1.0 (2025-10-11)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/droidrun/cloud-sdk-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([d6df667](https://github.com/droidrun/cloud-sdk-typescript/commit/d6df6679bcca2ac8ccbf3fb83280ef1ad01c5b43))
* **api:** manual updates ([4adb96a](https://github.com/droidrun/cloud-sdk-typescript/commit/4adb96acfb49a1add08e0efb39fe038ac55652ca))


### Chores

* update SDK settings ([0b74e0a](https://github.com/droidrun/cloud-sdk-typescript/commit/0b74e0a25188a41367d3d788f319ddd08551c9d1))
