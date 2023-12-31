import { request, gql } from 'graphql-request';

const endpoint = 'http://0.0.0.0:4000/graphql';

const mutation = gql`
  
`;

const variables = {
  id: '1',
  name: 'Sample Data',
  variant: 'project',
  kind: 1
};

request(endpoint, mutation, variables)
  .then((data) => console.log('Data ingested:', data))
  .catch((error) => console.error('Error ingesting data:', error));
