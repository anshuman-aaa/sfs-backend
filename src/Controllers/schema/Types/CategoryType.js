const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;
// const Category = mongoose.model('category');

const CategoryType = new GraphQLObjectType({
    name: 'categoryType',
    fields: () => ({
        categoryId : {type: GraphQLInt},
        categoryName : {type: GraphQLString},
        categoryDesc : {type: GraphQLString}
    })
});

module.exports = CategoryType;