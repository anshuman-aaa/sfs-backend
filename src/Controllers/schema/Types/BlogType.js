const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const { GraphQLJSON } = require('graphql-type-json');
const BlogType = new GraphQLObjectType({
    name: 'blogType',
    fields: () => ({
        _id: {type: GraphQLID},
        categoryId: { type: GraphQLInt },
        blogTitle: { type: GraphQLString },
        blogDesc: { type: GraphQLJSON },
        blogLogo: { type: GraphQLString }
    })
});

module.exports = BlogType;