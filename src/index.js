/* eslint-disable no-console */
/* eslint-disable import/imports-first */

require('dotenv').config();

import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import './services/Dynamo';
import middlewares from './config/middlewares';
import constants from './config/constants';
import schema from './schema';

const app = express();

middlewares(app);

app.use(
  '/graphql',
  graphqlExpress({
    schema,
  }),
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.get('/welcome', (req, res) => res.send('Hello'));

app.listen(constants.PORT, err => {
  if (err) throw err;
  console.log(
    `
    App listen on PORT: ${constants.PORT}
  `,
  );
});
