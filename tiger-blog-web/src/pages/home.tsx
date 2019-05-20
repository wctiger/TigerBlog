import React from 'react';
import BlogPost from '../components/BlogPost';
import DataLoad from '../components/DataLoad';
import FeaturedPost from '../components/FeaturedPost';
import { PostService } from '../services';

const Home = () => {
  return (
    <DataLoad
      request={PostService.getSummary}
      spinnerSize={60}
      render={posts => (
        <React.Fragment>
          <FeaturedPost post={posts[0]} />
          {posts.slice(1).map(post => (
            <BlogPost key={post.PostId} post={post} />
          ))}
        </React.Fragment>
      )}
    />
  );
};

export default Home;
