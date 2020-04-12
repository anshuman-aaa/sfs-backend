const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql;
const Category = require('../modals/Category')
const CategoryType = require("./Types/CategoryType");

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        category: {
            type: new GraphQLList(CategoryType),
            resolve() {
                return Category.find({});
            }
        }
    })
});

module.exports = RootQuery;
