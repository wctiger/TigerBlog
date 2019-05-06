import React from 'react';
import { PostModel } from '../models/post';
import styled from 'styled-components';

interface IProps {
  post: PostModel;
}

const PostContent: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <ContentWrapper
      dangerouslySetInnerHTML={{
        __html: post.Content || '<h2>post has no content.</h2>'
      }}
    />
  );
};

const ContentWrapper = styled.div`
  padding: 1rem;
  font-size: 1.6rem;

  h2 {
    margin: 1.25rem 0;
    line-height: 1.6;
  }

  a {
    font-weight: 300;
    display: inline-block;
    padding: 0rem 0.3rem;
    transition: all 0.3s ease-out;

    &:hover {
      background: ${props => props.theme.palette.secondary.main};
    }

    &:link,
    &:visited {
      text-decoration: none;
      color: ${props => props.theme.palette.primary.main};
      font-size: 1.4rem;
    }
  }

  li {
    margin-left: 2rem;
  }
`;

export default PostContent;
