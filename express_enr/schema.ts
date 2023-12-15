import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat,
  } from 'graphql';
  
const dataType = new GraphQLObjectType({
name: 'DataType',
fields: {
    authors: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
    date_download: { type: new GraphQLNonNull(GraphQLString) },
    date_modify: { type: new GraphQLNonNull(GraphQLString) },
    date_publish: { type: new GraphQLNonNull(GraphQLString) },
    filename: { type: new GraphQLNonNull(GraphQLString) },
    image_url: { type: new GraphQLNonNull(GraphQLString) },
    language: { type: new GraphQLNonNull(GraphQLString) },
    localpath: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    title_page: { type: new GraphQLNonNull(GraphQLString) },
    title_rss: { type: new GraphQLNonNull(GraphQLString) },
    source_domain: { type: new GraphQLNonNull(GraphQLString) },
    maintext: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
},
});

const newsCategoryType = new GraphQLObjectType({
name: 'NewsCategory',
fields: {
    sequence: { type: new GraphQLNonNull(GraphQLString) },
    labels: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
    scores: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
},
});

const dataTypeRoot = new GraphQLObjectType({
name: 'Data',
fields: {
    data: { type: dataType },
    event_fingerprint: { type: new GraphQLNonNull(GraphQLString) },
    news_category: { type: newsCategoryType },
    sentiment: { type: new GraphQLNonNull(GraphQLFloat) },
    locations: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
    companies: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
    dollars: { type: new GraphQLNonNull(new GraphQLList(GraphQLFloat)) },
},
});

// Query to return the full schema
const RootQuery = new GraphQLObjectType({
name: 'RootQuery',
fields: {
    data: {
    type: dataTypeRoot,
    resolve: () => {
        return {
        data: {
            authors: ['String'],
            date_download: 'String',
            date_modify: 'String',
            date_publish: 'String',
            filename: 'String',
            image_url: 'String',
            language: 'String',
            localpath: 'String',
            title: 'String',
            title_page: 'String',
            title_rss: 'String',
            source_domain: 'String',
            maintext: 'String',
            url: 'String',
        },
        event_fingerprint: 'String',
        news_category: {
            sequence: 'String',
            labels: ['String'],
            scores: ['String'],
        },
        sentiment: 1.5,
        locations: ['String'],
        companies: ['String'],
        dollars: [1.0],
        };
    },
    },
},
});

const schema = new GraphQLSchema({
query: RootQuery,
});

export default schema;