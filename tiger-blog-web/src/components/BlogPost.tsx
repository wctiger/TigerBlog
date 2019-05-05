import React from 'react';
import styled from 'styled-components';
import { PostModel } from '../models/post';
import Link from '../styles/components/Link';
import moment from 'moment';
import { Tooltip } from '@material-ui/core';

interface IProps {
  post: PostModel;
}

const BlogPost: React.FunctionComponent<IProps> = ({ post }: IProps) => {
  return (
    <PostCard>
      <Thumbnail />
      <Content>
        <div className="title">
          <h3>{post.Title}</h3>
          <p>
            <Tooltip
              title={moment(post.CreatedTime).format('YYYY-MM-DD hh:mm a')}
              placement="right"
            >
              <span>{moment(post.CreatedTime).fromNow()}</span>
            </Tooltip>
          </p>
        </div>
        <div className="text">
          <p>{post.Summary}</p>
        </div>
        <div className="link">
          <Link to={'/posts/' + post.PostId}>Continue Reading...</Link>
        </div>
      </Content>
    </PostCard>
  );
};

const PostCard = styled.div`
  background: ${props => props.theme.palette.background.paper};
  margin: 1.5rem 0;
  display: flex;
  border: 1px solid
    ${props => (props.theme.palette.type === 'light' ? '#e0e0e0' : '#424242')};
  border-radius: 5px;
  box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const Thumbnail = styled.div`
  background-image: url('https://picsum.photos/300/300');
  background-size: cover;
  background-position: center;
  height: 20rem;
  flex: 0 0 25%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 1.5rem;

  .title {
    margin-bottom: 2rem;
    h3 {
      font-size: 1.8rem;
    }
  }

  .text {
    margin-bottom: auto;
  }

  .link {
    font-size: 1.2rem;
    text-align: right;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export default BlogPost;
