const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false,
  secureOptions: require('constants').SSL_OP_NO_TLSv1 | require('constants').SSL_OP_NO_TLSv1_1,
});

const graphqlEndpoint = 'http://0.0.0.0:4000/graphql';

const introspectionQuery = `
query IntrospectionQuery {
    __schema {
      types {
        kind
        name
        description
        fields {
          name
          description
        }
      }
    }
  }
`;

export const getGraphQLSchema = async () => {
  try {
    const response = await axios.post(
      graphqlEndpoint,
      { query: introspectionQuery },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        httpsAgent: agent, // use the custom httpsAgent
      }
    );

    const schema = response.data.data.__schema;
    console.log('GraphQL Schema:', JSON.stringify(schema, null, 2));
  } catch (error) {
    console.error('Error fetching GraphQL schema:', error);
  }
};

export default getGraphQLSchema();
