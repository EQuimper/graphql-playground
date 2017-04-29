import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import uuid from 'uuid/v4';

import PostType from '../types/PostTypes';
import PostService from '../../services/PostService';

export const createPost = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(_, args) {
    const post = new PostService({ ...args, _id: uuid() });
    return post.save();
  },
};

export const updatePost = {
  type: PostType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
  },
  resolve(_, { _id, ...rest }) {
    return PostService.update({ _id }, rest);
  },
};

export const deletePost = {
  type: PostType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { _id }) {
    return PostService.delete({ _id });
  },
};
