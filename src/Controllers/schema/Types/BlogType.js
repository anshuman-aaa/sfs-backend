const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const { GraphQLJSON } = require('graphql-type-json');
const BlogType = new GraphQLObjectType({
    name: 'blogType',
    fields: () => ({
        categoryId : {type: GraphQLInt},
        blogTitle : {type: GraphQLString},
        blogDesc : {type: GraphQLJSON},
        blogLogo : {type: GraphQLString}
    })
});

module.exports = BlogType;