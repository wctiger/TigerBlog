import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { PostModel } from '../models/post';

interface IProps {
  post: PostModel;
  onHeaderChange: (post: PostModel) => void;
}

const PostHeaderEditor: React.FunctionComponent<IProps> = props => {
  const { post, onHeaderChange } = props;
  return (
    <Container>
      <div>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          placeholder="Enter Post Title"
          onChange={e => onHeaderChange({ ...post, Title: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Summary"
          multiline
          rows={4}
          fullWidth
          placeholder="Enter Post Summary"
          variant="outlined"
          onChange={e => onHeaderChange({ ...post, Summary: e.target.value })}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 0;

  & > div {
    margin-bottom: 1.5rem;
  }
`;

export default PostHeaderEditor;
