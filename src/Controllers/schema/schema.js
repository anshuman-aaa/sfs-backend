const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./RootQuery');
const mutations = require('./Mutations');

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: mutations
});
