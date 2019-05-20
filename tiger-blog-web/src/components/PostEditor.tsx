import React, { useState } from 'react';
import { PostModel } from '../models/post';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import { Button } from '@material-ui/core';
import { PostService, Post } from '../services';

interface IProps {
  post: PostModel;
}

const PostEditor = props => {
  const [editorState, setEditorState] = useState({
    editor: null,
    disabled: false
  });
  return (
    <React.Fragment>
      <CKEditor
        editor={ClassicEditor}
        data={props.post || '<p>Start Creating New Posts!</p>'}
        onInit={editor => {
          setEditorState({ ...editorState, editor: editor });
        }}
        disabled={editorState.disabled}
      />
      <Button
        onClick={() => {
          const content = editorState.editor.getData();
          handleSave({ content });
        }}
      >
        SAVE
      </Button>
    </React.Fragment>
  );
};

const handleSave = data => {
  const post = new Post({
    Owner: 6,
    Title: 'REAL TEST POST!!😎',
    Summary: 'Let us see what we can get from here. 🤣😘🤷‍♀️',
    Content: data.content
  });
  PostService.insert({ post }).then(
    success => console.log(success),
    rejected => console.warn(rejected)
  );
};

export default PostEditor;
