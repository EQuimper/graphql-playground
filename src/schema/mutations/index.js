import { GraphQLObjectType } from 'graphql';

import { createPost, updatePost } from './PostMutations';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createPost,
    updatePost,
  }),
});
