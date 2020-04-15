const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const Category = require("../modals/Category");
const Blog = require("../modals/Blog");
const CategoryType = require("./Types/CategoryType");
const BlogType = require("./Types/BlogType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    category: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Category.find({});
      }
    },
    blog: {
      type: BlogType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentvalue,{ id }) {
        return Blog.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
