export const schemaConfig = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    value: { type: 'integer' },
    labelText: { type: 'string' },
    id: { type: 'integer' },
    placeholder: { type: 'string' },
  },
  required: ['id', 'labelText', 'type'],
  additionalProperties: false,
};
