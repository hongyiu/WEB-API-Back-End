module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  id: '/dog',
  title: 'Dogs',
  description: 'Dog in website',
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      description: 'Dog Name',
      type: 'string',
      maxLength: 32
    },
    description: {
      description: 'description of the dog',
      type: 'string'
    },
    breed: {
      description: 'breed of the dog',
      type: 'string',
      maxLength: 16
    },
    birthday: {
      description: 'birth date',
      type: 'string'
    },
    imageURL: {
      description: 'image URL',
      type: 'url',
      maxLength: 128
    },
    published: {
      description: 'Published',
      type: 'boolean'
    },
    authorID: {
      description: 'author ID',
      type: 'integer',
      minimum: 0,
      maximum: 9999
    }
  },
  required: ['name', 'breed']
}
