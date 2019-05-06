import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingOverlay from '../styles/components/LoadingOverlay';
import { PostModel } from '../models/post';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import moment from 'moment';
import { MOCKPOST } from '../models/mock';
import { AppContext } from '../App';

interface IState {
  isLoading: boolean;
  post: PostModel;
}

class Post extends React.Component<any, IState> {
  state = {
    isLoading: true,
    post: null
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        post: {
          PostId: 100,
          Title: 'Test Post - How did I make up this site 😎',
          Owner: 'vvctiger',
          Summary: '🍕🍔😂😂',
          IsArchived: false,
          Content: '',
          CreatedTime: moment('2019-01-01').toDate(),
          UpdatedTime: moment('2019-01-01').toDate()
        }
      });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <LoadingOverlay size={60} />
        ) : (
          <AppContext.Consumer>
            {context => (
              <div>
                <PostHeader post={this.state.post} />
                <PostContent
                  post={{
                    ...this.state.post,
                    Content: context.testPostContent
                  }}
                />
              </div>
            )}
          </AppContext.Consumer>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Post);
