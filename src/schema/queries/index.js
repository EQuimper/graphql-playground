import { GraphQLObjectType } from 'graphql';

import { posts, post } from './PostQuery';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    post,
    posts,
  }),
});
