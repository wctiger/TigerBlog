import React from 'react';
import PostEditor from '../components/PostEditor';
import AppLink from '../styles/components/Link';

class NewPost extends React.Component {
  state = {
    editor: {} as any,
    readOnly: false
  };

  render() {
    return (
      <div>
        <h2>Using CKEditor 5 build in React</h2>
        <PostEditor />
        {/* <CKEditor
              editor={ClassicEditor}
              data={'<p>Start Creating New Posts!</p>'}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                this.setState({ editor });
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
              }}
              onBlur={editor => {
                // console.log('Blur.', editor);
              }}
              onFocus={editor => {
                // console.log('Focus.', editor);
              }}
              disabled={this.state.readOnly}
            />
            <Button
              onClick={() => {
                const content = this.state.editor.getData();
                context.setTestPostContent(content);
              }}
            >
              SAVE
            </Button> */}
      </div>
    );
  }
}

export default NewPost;
