import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen({ host: '127.0.0.1', port: 4000 }, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}/graphql`);
});
