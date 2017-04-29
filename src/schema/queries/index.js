import { GraphQLObjectType } from 'graphql';

import { posts, post } from './PostQueries';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    post,
    posts,
  }),
});
