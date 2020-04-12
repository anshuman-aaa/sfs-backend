const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
// const mongoose = require("mongoose");
const Category = require("../modals/Category");
const CategoryType = require("./Types/CategoryType");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCategory: {
      type: CategoryType,
      args: {
        categoryId: { type: GraphQLInt },
        categoryName: { type: GraphQLString },
        categoryDesc: { type: GraphQLString }
      },
      resolve(parentValue, { categoryId, categoryName, categoryDesc }) {
        const newCat = new Category({ categoryId, categoryName, categoryDesc });
        newCat.save();
        return newCat;
      }
    }
  }
});

module.exports = Mutation;
