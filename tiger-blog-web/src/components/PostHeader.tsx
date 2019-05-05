import React from 'react';
import { PostModel } from '../models/post';
import { Avatar } from '@material-ui/core';
import moment from 'moment';
import styled from 'styled-components';

interface IProps {
  post: PostModel;
}

const PostHeader: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <Wrapper>
      <Title>{post.Title}</Title>
      <UserInfo>
        <StyledAvatar>T</StyledAvatar>
        <div className="wording">
          <h4>{post.Owner}</h4>
          <p>{moment(post.CreatedTime).format('MMM D YYYY')}</p>
        </div>
      </UserInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  word-spacing: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  text-transform: capitalize;
`;

const StyledAvatar = styled<any>(Avatar)`
  && {
    background-color: ${props => props.theme.palette.secondary.dark};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  .wording {
    margin-left: 1.5rem;

    & > p {
      font-size: 1.2rem;
    }
  }
`;

export default PostHeader;
