const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const Category = require("../modals/Category");
const Blog = require("../modals/Blog");
const CategoryType = require("./Types/CategoryType");
const BlogType = require("./Types/BlogType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    findCategory: {
      type: CategoryType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentvalue,{ id }) {
        return Category.findById(id);
      }
    },
    category: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Category.find({});
      }
    },
    findBlog: {
      type: BlogType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentvalue,{ id }) {
        return Blog.findById(id);
      }
    },
    blog: {
      type: new GraphQLList(BlogType),
      resolve() {
        return Blog.find({});
      }
    }
  })
});

module.exports = RootQuery;
