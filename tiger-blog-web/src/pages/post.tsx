import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DataLoad from '../components/DataLoad';
import PostContent from '../components/PostContent';
import PostHeader from '../components/PostHeader';
import { PostService } from '../services';

interface IProps extends RouteComponentProps<any> {}

const Post: React.FunctionComponent<IProps> = props => {
  return (
    <DataLoad
      request={() => PostService.get({ id: props.match.params.id })}
      spinnerSize={60}
      render={post => (
        <div>
          <PostHeader post={post} />
          <PostContent
            post={{ ...post, Content: decodeURIComponent(post.Content) }}
          />
        </div>
      )}
    />
  );
};

export default withRouter(Post);
