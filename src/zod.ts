// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as z from 'zod/v4';
import type { OutputSchema } from './sdk/runtime';
export function output<S extends z.core.$ZodType>(schema: S): OutputSchema<z.output<S>> {
  return {
    jsonSchema: { ...z.toJSONSchema(schema, { io: 'input' }) },
    parse: (value) => z.parse(schema, value),
  };
}
