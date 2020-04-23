const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const { GraphQLJSON } = require('graphql-type-json');
const Category = require("../modals/Category");
const Blog = require("../modals/Blog");
const CategoryType = require("./Types/CategoryType");
const BlogType = require("./Types/BlogType");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCategory: {
      type: CategoryType,
      args: {
        categoryId: { type: GraphQLInt },
        categoryName: { type: GraphQLString },
        categoryDesc: { type: GraphQLString },
        categoryUri: { type: GraphQLString }
      },
      resolve(parentValue,{ categoryId, categoryName, categoryDesc, categoryUri }) {
        return new Category({
          categoryId,
          categoryName,
          categoryDesc,
          categoryUri
        }).save();
      }
    },
    addBlog: {
      type: BlogType,
      args: {
        categoryId: { type: GraphQLInt },
        blogTitle: { type: GraphQLString },
        blogLogo: { type: GraphQLString },
        blogDesc: { type: GraphQLJSON }
      },
      resolve(parentvalue, { categoryId, blogTitle, blogLogo, blogDesc }) {
        return new Blog({ categoryId, blogTitle, blogLogo, blogDesc }).save();
      }
    }
  }
});

module.exports = Mutation;
