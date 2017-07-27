const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const { entryType } = require('./types');
const uuid  = require('uuid');
const db    = require('./dynamodb');

const entriesType = new GraphQLList(entryType);

const entriesQuery = {
  name: 'EntriesQuery',
  description: 'Retrieve entries',
  type: entriesType,
  resolve: (_, parentArgs, args) => {
    return db.getEntries();
  }
};

const entryQuery = {
  name: 'EntryQuery',
  description: 'Retrieve an entry',
  type: entryType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: (_, parentArgs, args) => {
    return db.getEntry(parentArgs.id);
  }
};

const addEntryMutation = {
  name: 'AddEntryMutation',
  description: 'Add an entry to the entry list',
  type: entryType,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (_, parentArgs, args) => {
    return db.addEntry(uuid.v4(), parentArgs.name);
  }
};

const dropEntryMutation = {
  name: 'DropEntryMutation',
  description: 'Delete an entry from the entry list',
  type: entryType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: (_, parentArgs, args) => {
    return db.dropEntry(parentArgs.id);
  }
};

const healthQuery = {
  name: 'health',
  description: 'health',
  type: GraphQLString,
  resolve: (_, parentArgs, args) => {
    return 'health ok';
  }
};

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      health: healthQuery,
      entries: entriesQuery,
      entry: entryQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addEntry: addEntryMutation,
      dropEntry: dropEntryMutation
    }
  })
});
