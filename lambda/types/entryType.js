const { graphql, GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'EntryType',
  description: 'The format of an entry in the entries list',
  fields: () => {
    return {
      name: {
        type: GraphQLString
      },
      id: {
        type: GraphQLString
      }
    };
  }
});
