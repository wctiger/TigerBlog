import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import PostEditor from '../components/PostEditor';
import PostHeaderEditor from '../components/PostHeaderEditor';
import { PostModel } from '../models/post';
import { Post, PostService } from '../services';
import LoadingOverlay from '../styles/components/LoadingOverlay';
import { withRouter } from 'react-router';

const NewPost = props => {
  const context = useContext(AppContext);
  const [post, setPost] = useState({} as PostModel);
  const [isSaving, setIsSaving] = useState(false);

  const onSaveButtonClick = async () => {
    if (!context.authenticatedUser || !context.authenticatedUser.UserId) {
      context.setGlobalMessage({
        type: 'error',
        message: 'User Is Not Authorized.'
      });
      return;
    }
    setIsSaving(true);
    handleSave(
      context.authenticatedUser.UserId,
      post,
      () => {
        context.setGlobalMessage({
          type: 'success',
          message: 'Create Succeeded! Redirecting..'
        });
        setTimeout(() => {
          props.history.push('/');
        }, 1500);
      },
      reason => {
        context.setGlobalMessage(reason.message || reason);
      },
      () => {
        setIsSaving(false);
      }
    );
  };

  return (
    <>
      <h2>{post.Title || 'Create New Post'}</h2>
      <PostHeaderEditor post={post} onHeaderChange={setPost} />
      <PostEditor post={post} onContentChange={setPost} />
      <ButtonRow>
        <Button
          variant="contained"
          onClick={onSaveButtonClick}
          color="primary"
          style={{ marginRight: 'auto' }}
        >
          Save New Post
        </Button>
        <Button
          variant="contained"
          onClick={() => props.history.push('/')}
          color="secondary"
        >
          Cancel
        </Button>
      </ButtonRow>
      {isSaving && <LoadingOverlay />}
    </>
  );
};

const handleSave = async (
  userId: any,
  data: PostModel,
  successCb: any,
  failedCb: any,
  finallyCb: any
) => {
  const post = new Post({
    Owner: userId,
    Title: data.Title,
    Summary: data.Summary,
    Content: data.Content
  });
  try {
    await PostService.insert({ post });
    successCb();
  } catch (error) {
    console.warn(error);
    failedCb(error);
  } finally {
    finallyCb();
  }
};

const ButtonRow = styled.div`
  margin-top: 2rem;
  display: flex;
`;

export default withRouter(NewPost);
