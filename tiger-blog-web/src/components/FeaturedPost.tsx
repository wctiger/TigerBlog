import React from 'react';
import styled from 'styled-components';
import { Post } from '../models/post';
import Link from '../styles/components/Link';

interface IProps {
  post?: Post;
}

const FeaturedPost: React.FunctionComponent<IProps> = props => {
  return (
    <Container>
      <Foreground>
        <h2>{props.post.Title}</h2>
        <Link to={'/'}>Read More &rarr;</Link>
        <p>{props.post.Summary}</p>
      </Foreground>
      <Background />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  margin-bottom: 4rem;
  background-image: linear-gradient(
      rgba(250, 250, 250, 0.4),
      rgba(250, 250, 250, 0.1)
    ),
    url('https://picsum.photos/1000/400');
  background-size: cover;
  background-position: center;
  height: 30rem;
  border-radius: 5px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const Foreground = styled.div`
  position: absolute;
  top: 45%;
  left: 5rem;
  z-index: 10;
  cursor: pointer;

  & > h2 {
    font-size: 2rem;
    word-spacing: 0.5rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    background-color: ${props => props.theme.palette.primary.light};
    padding: 0.5rem 1.5rem;
  }

  & > p {
    display: inline-block;
    margin-right: 2rem;
    background-color: rgba(250, 250, 250, 0.2);
    padding: 0.5rem 1.5rem;
  }

  &:hover + ${Background} {
    filter: blur(0.15rem);
  }

  &:hover > ${Link} {
    background: ${props => props.theme.palette.secondary.main};
  }
`;

export default FeaturedPost;
