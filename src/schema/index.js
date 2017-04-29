import { GraphQLSchema } from 'graphql';

import RootQuery from './queries';
import Mutations from './mutations';

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
