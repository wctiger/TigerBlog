import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PostModel } from '../models/post';

interface IProps {
  post?: PostModel;
  onContentChange?: (post: PostModel) => void;
}

const PostEditor: React.FunctionComponent<IProps> = props => {
  const [editorState, setEditorState] = useState({
    editor: null,
    disabled: false
  });
  return (
    <EditorWrapper>
      <CKEditor
        editor={ClassicEditor}
        data={
          (props.post && props.post.Content) ||
          '<p>Start Creating New Post!</p>'
        }
        onInit={editor => {
          setEditorState({ ...editorState, editor: editor });
        }}
        onChange={(event, editor) => {
          const content = editor.getData();
          props.onContentChange({ ...props.post, Content: content });
        }}
        disabled={editorState.disabled}
      />
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div`
  .ck-content {
    min-height: 400px;
  }
`;

export default PostEditor;
