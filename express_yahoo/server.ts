import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import { getGraphQLSchema } from './fetch';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const startServer = async () => {
  const PORT = process.env.PORT || 4000;

  // Start the server
  const server = app.listen({ host: '0.0.0.0', port: 4000 }, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}/graphql`);
  });

  try {
    // Run getGraphQLSchema asynchronously
    await getGraphQLSchema();

    server.close(() => {
      console.log('Server has been stopped');
      process.exit();
    });
  } catch (error) {
    console.error('Error running getGraphQLSchema:', error);


    server.close(() => {
      console.log('Server has been stopped due to an error');
      process.exit(1);
    });
  }
};

// Start the server and run getGraphQLSchema
startServer();

process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server...');
  process.exit();
});
