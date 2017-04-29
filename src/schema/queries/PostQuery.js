import { GraphQLList, GraphQLString } from 'graphql';

import PostType from '../types/post_type';
import PostService from '../../services/PostService';

export const posts = {
  type: new GraphQLList(PostType),
  args: {
    title: { type: GraphQLString },
  },
  resolve(_, args) {
    const query = queryObj => {
      const items = {};
      if (queryObj) {
        Object.keys(queryObj).forEach(key => {
          items[key] = {
            contains: queryObj[key],
          };
        });
      }
      return items;
    };
    return PostService.scan(query(args)).exec();
  },
};

export const post = {
  type: PostType,
  args: {
    _id: { type: GraphQLString },
  },
  resolve(_, args) {
    return PostService.get({ _id: args._id });
  },
};
