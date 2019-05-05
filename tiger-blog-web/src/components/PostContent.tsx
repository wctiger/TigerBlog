import React from 'react';
import { PostModel } from '../models/post';

interface IProps {
  post: PostModel;
}

const PostContent: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <div>
      <p>{post.Content || 'post has no content.'}</p>
    </div>
  );
};

export default PostContent;
