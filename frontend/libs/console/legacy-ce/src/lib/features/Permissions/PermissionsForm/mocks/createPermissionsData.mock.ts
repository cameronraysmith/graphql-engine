import { CreateInsertArgs } from '../api/utils';

export const selectArgs: CreateInsertArgs = {
  driver: 'sqlagent',
  dataSourceName: 'Chinook',
  table: ['Album'],
  queryType: 'select',
  role: 'user',
  formData: {
    queryType: 'select',
    filterType: 'custom',
    filter: { _not: { AlbumId: { _eq: 'X-Hasura-User-Id' } } },
    columns: { AlbumId: true, Title: true, ArtistId: true },
    computed_fields: {},
    comment: '',
    presets: [],
    rowCount: '0',
    aggregationEnabled: false,
    clonePermissions: [{ tableName: '', queryType: '', roleName: '' }],
    query_root_fields: null,
    subscription_root_fields: null,
    supportedOperators: [
      { name: 'equals', value: '_eq' },
      { name: 'not equals', value: '_neq' },
      { name: '>', value: '_gt' },
      { name: '<', value: '_lt' },
      { name: '>=', value: '_gte' },
      { name: '<=', value: '_lte' },
    ],
  },
  accessType: 'partialAccess',
  existingPermissions: [
    { role: 'asdf', queryType: 'select', table: ['Album'] },
    { role: 'new', queryType: 'select', table: ['Album'] },
    { role: 'sdfsf', queryType: 'select', table: ['Album'] },
    { role: 'testrole', queryType: 'select', table: ['Album'] },
    { role: 'user', queryType: 'select', table: ['Album'] },
    { role: 'user', queryType: 'delete', table: ['Album'] },
    { role: 'asdf', queryType: 'select', table: ['Artist'] },
    { role: 'testrole', queryType: 'select', table: ['Artist'] },
    { role: 'user', queryType: 'select', table: ['Artist'] },
  ],
  tables: [['Album'], ['Artist']],
};

export const deleteArgs: CreateInsertArgs = {
  driver: 'sqlagent',
  dataSourceName: 'Chinook',
  table: ['Album'],
  queryType: 'delete',
  role: 'user',
  formData: {
    queryType: 'delete',
    filterType: 'custom',
    filter: { Title: { _eq: 'Test' } },
    supportedOperators: [
      { name: 'equals', value: '_eq' },
      { name: 'not equals', value: '_neq' },
      { name: '>', value: '_gt' },
      { name: '<', value: '_lt' },
      { name: '>=', value: '_gte' },
      { name: '<=', value: '_lte' },
    ],
    clonePermissions: [{ tableName: '', queryType: '', roleName: '' }],
    comment: '',
  },
  accessType: 'partialAccess',
  existingPermissions: [
    { role: 'asdf', queryType: 'select', table: ['Album'] },
    { role: 'new', queryType: 'select', table: ['Album'] },
    { role: 'sdfsf', queryType: 'select', table: ['Album'] },
    { role: 'testrole', queryType: 'select', table: ['Album'] },
    { role: 'user', queryType: 'select', table: ['Album'] },
    { role: 'user', queryType: 'delete', table: ['Album'] },
    { role: 'asdf', queryType: 'select', table: ['Artist'] },
    { role: 'testrole', queryType: 'select', table: ['Artist'] },
    { role: 'user', queryType: 'select', table: ['Artist'] },
  ],
  tables: [['Album'], ['Artist']],
};

export const insertArgs: CreateInsertArgs = {
  driver: 'sqlagent',
  dataSourceName: 'Chinook',
  table: ['Album'],
  queryType: 'insert',
  role: 'user',
  formData: {
    queryType: 'insert',
    checkType: 'custom',
    filterType: 'none',
    check: {
      _and: [
        {},
        { AlbumId: { _eq: '1337' } },
        { _not: { ArtistId: { _eq: '1338' } } },
      ],
    },
    columns: { AlbumId: false, Title: false, ArtistId: false },
    computed_fields: {},
    comment: '',
    presets: [{ columnName: 'default', presetType: 'static', columnValue: '' }],
    backendOnly: false,
    supportedOperators: [
      { name: 'equals', value: '_eq' },
      { name: 'not equals', value: '_neq' },
      { name: '>', value: '_gt' },
      { name: '<', value: '_lt' },
      { name: '>=', value: '_gte' },
      { name: '<=', value: '_lte' },
    ],
    clonePermissions: [{ tableName: '', queryType: '', roleName: '' }],
  },
  accessType: 'noAccess',
  existingPermissions: [
    { role: 'asdf', queryType: 'select', table: ['Album'] },
    { role: 'new', queryType: 'select', table: ['Album'] },
    { role: 'sdfsf', queryType: 'select', table: ['Album'] },
    { role: 'testrole', queryType: 'select', table: ['Album'] },
    { role: 'user', queryType: 'select', table: ['Album'] },
    { role: 'user', queryType: 'delete', table: ['Album'] },
    { role: 'asdf', queryType: 'select', table: ['Artist'] },
    { role: 'testrole', queryType: 'select', table: ['Artist'] },
    { role: 'user', queryType: 'select', table: ['Artist'] },
  ],
  tables: [['Album'], ['Artist']],
};
