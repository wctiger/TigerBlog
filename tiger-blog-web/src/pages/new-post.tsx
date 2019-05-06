import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import { Button } from '@material-ui/core';
import React from 'react';
import { AppContext } from '../App';
import AppLink from '../styles/components/Link';

class NewPost extends React.Component {
  state = {
    editor: {} as any,
    readOnly: false
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <h2>Using CKEditor 5 build in React</h2>
            <Button
              onClick={() => this.setState({ readOnly: !this.state.readOnly })}
            >
              READONLY?
            </Button>
            <CKEditor
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
            </Button>
            <AppLink to={'/posts/100'}>Test to post</AppLink>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default NewPost;
