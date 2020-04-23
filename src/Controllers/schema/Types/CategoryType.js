const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const CategoryType = new GraphQLObjectType({
    name: 'categoryType',
    fields: () => ({
        categoryId: { type: GraphQLInt },
        categoryName: { type: GraphQLString },
        categoryDesc: { type: GraphQLString },
        categoryUri: { type: GraphQLString }
    })
});

module.exports = CategoryType;