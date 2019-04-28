import React from 'react';

interface IProps {
  test: number;
}

const BlogPost: React.FunctionComponent<IProps> = props => {
  return (
    <div style={{ background: 'orange', width: '100%' }}>{props.test}</div>
  );
};

export default BlogPost;
