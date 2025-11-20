// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/apps',
  operationId: 'listApps',
};

export const tool: Tool = {
  name: 'list_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of apps with filtering and search capabilities\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app_list_response',\n  $defs: {\n    app_list_response: {\n      type: 'object',\n      properties: {\n        apps: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              categoryName: {\n                type: 'string'\n              },\n              country: {\n                type: 'string',\n                enum: [                  'AF',\n                  'AL',\n                  'DZ',\n                  'AS',\n                  'AD',\n                  'AO',\n                  'AI',\n                  'AQ',\n                  'AG',\n                  'AR',\n                  'AM',\n                  'AW',\n                  'AP',\n                  'AU',\n                  'AT',\n                  'AZ',\n                  'BS',\n                  'BH',\n                  'BD',\n                  'BB',\n                  'BY',\n                  'BE',\n                  'BZ',\n                  'BJ',\n                  'BM',\n                  'BT',\n                  'BO',\n                  'BQ',\n                  'BA',\n                  'BW',\n                  'BV',\n                  'BR',\n                  'IO',\n                  'BN',\n                  'BG',\n                  'BF',\n                  'BI',\n                  'KH',\n                  'CM',\n                  'CA',\n                  'CV',\n                  'KY',\n                  'CF',\n                  'TD',\n                  'CL',\n                  'CN',\n                  'CX',\n                  'CC',\n                  'CO',\n                  'KM',\n                  'CG',\n                  'CD',\n                  'CK',\n                  'CR',\n                  'HR',\n                  'CU',\n                  'CW',\n                  'CY',\n                  'CZ',\n                  'CI',\n                  'DK',\n                  'DJ',\n                  'DM',\n                  'DO',\n                  'EC',\n                  'EG',\n                  'SV',\n                  'GQ',\n                  'ER',\n                  'EE',\n                  'ET',\n                  'FK',\n                  'FO',\n                  'FJ',\n                  'FI',\n                  'FR',\n                  'GF',\n                  'PF',\n                  'TF',\n                  'GA',\n                  'GM',\n                  'GE',\n                  'DE',\n                  'GH',\n                  'GI',\n                  'GR',\n                  'GL',\n                  'GD',\n                  'GP',\n                  'GU',\n                  'GT',\n                  'GG',\n                  'GN',\n                  'GW',\n                  'GY',\n                  'HT',\n                  'HM',\n                  'VA',\n                  'HN',\n                  'HK',\n                  'HU',\n                  'IS',\n                  'IN',\n                  'ID',\n                  'IR',\n                  'IQ',\n                  'IE',\n                  'IM',\n                  'IL',\n                  'IT',\n                  'JM',\n                  'JP',\n                  'JE',\n                  'JO',\n                  'KZ',\n                  'KE',\n                  'KI',\n                  'KR',\n                  'KW',\n                  'KG',\n                  'LA',\n                  'LV',\n                  'LB',\n                  'LS',\n                  'LR',\n                  'LY',\n                  'LI',\n                  'LT',\n                  'LU',\n                  'MO',\n                  'MG',\n                  'MW',\n                  'MY',\n                  'MV',\n                  'ML',\n                  'MT',\n                  'MH',\n                  'MQ',\n                  'MR',\n                  'MU',\n                  'YT',\n                  'MX',\n                  'FM',\n                  'MD',\n                  'MC',\n                  'MN',\n                  'ME',\n                  'MS',\n                  'MA',\n                  'MZ',\n                  'MM',\n                  'NA',\n                  'NR',\n                  'NP',\n                  'NL',\n                  'AN',\n                  'NC',\n                  'NZ',\n                  'NI',\n                  'NE',\n                  'NG',\n                  'NU',\n                  'NF',\n                  'KP',\n                  'MK',\n                  'MP',\n                  'NO',\n                  'OM',\n                  'PK',\n                  'PW',\n                  'PS',\n                  'PA',\n                  'PG',\n                  'PY',\n                  'PE',\n                  'PH',\n                  'PN',\n                  'PL',\n                  'PT',\n                  'PR',\n                  'QA',\n                  'RE',\n                  'RO',\n                  'RU',\n                  'RW',\n                  'BL',\n                  'SH',\n                  'KN',\n                  'LC',\n                  'MF',\n                  'PM',\n                  'VC',\n                  'WS',\n                  'SM',\n                  'ST',\n                  'SA',\n                  'SN',\n                  'RS',\n                  'CS',\n                  'SC',\n                  'SL',\n                  'SG',\n                  'SX',\n                  'SK',\n                  'SI',\n                  'SB',\n                  'SO',\n                  'ZA',\n                  'GS',\n                  'SS',\n                  'ES',\n                  'LK',\n                  'SD',\n                  'SR',\n                  'SJ',\n                  'SZ',\n                  'SE',\n                  'CH',\n                  'SY',\n                  'TW',\n                  'TJ',\n                  'TZ',\n                  'TH',\n                  'TL',\n                  'TG',\n                  'TK',\n                  'TO',\n                  'TT',\n                  'TN',\n                  'TR',\n                  'TM',\n                  'TC',\n                  'TV',\n                  'UG',\n                  'UA',\n                  'AE',\n                  'GB',\n                  'US',\n                  'UM',\n                  'UY',\n                  'UZ',\n                  'VU',\n                  'VE',\n                  'VN',\n                  'VG',\n                  'VI',\n                  'WF',\n                  'EH',\n                  'YE',\n                  'ZM',\n                  'ZW',\n                  'AX'\n                ]\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date'\n              },\n              description: {\n                type: 'string'\n              },\n              developerName: {\n                type: 'string'\n              },\n              displayName: {\n                type: 'string'\n              },\n              externalIds: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              iconURL: {\n                type: 'string'\n              },\n              packageName: {\n                type: 'string'\n              },\n              queuedAt: {\n                type: 'string',\n                format: 'date'\n              },\n              ratingCount: {\n                type: 'integer'\n              },\n              ratingScore: {\n                type: 'string'\n              },\n              sizeBytes: {\n                type: 'integer'\n              },\n              source: {\n                type: 'string',\n                enum: [                  'uploaded',\n                  'store'\n                ]\n              },\n              targetSdk: {\n                type: 'integer'\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date'\n              },\n              userId: {\n                type: 'string'\n              },\n              versionCode: {\n                type: 'integer'\n              },\n              versionName: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'categoryName',\n              'country',\n              'createdAt',\n              'description',\n              'developerName',\n              'displayName',\n              'externalIds',\n              'iconURL',\n              'packageName',\n              'queuedAt',\n              'ratingCount',\n              'ratingScore',\n              'sizeBytes',\n              'source',\n              'targetSdk',\n              'updatedAt',\n              'userId',\n              'versionCode',\n              'versionName'\n            ]\n          }\n        },\n        availableCount: {\n          type: 'number'\n        },\n        queuedCount: {\n          type: 'number'\n        },\n        storeCount: {\n          type: 'number'\n        },\n        totalCount: {\n          type: 'number'\n        },\n        uploadCount: {\n          type: 'number'\n        }\n      },\n      required: [        'apps',\n        'availableCount',\n        'queuedCount',\n        'storeCount',\n        'totalCount',\n        'uploadCount'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
      },
      pageSize: {
        type: 'integer',
      },
      query: {
        type: 'string',
      },
      sortBy: {
        type: 'string',
        enum: ['createdAt', 'name'],
      },
      source: {
        type: 'string',
        enum: ['all', 'uploaded', 'store'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.apps.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
