import { GraphQLObjectType } from 'graphql';

import { createPost, updatePost, deletePost } from './PostMutations';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createPost,
    updatePost,
    deletePost,
  }),
});
