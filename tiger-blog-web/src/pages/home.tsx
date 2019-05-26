import React from 'react';
import BlogPost from '../components/BlogPost';
import DataLoad from '../components/DataLoad';
import FeaturedPost from '../components/FeaturedPost';
import { PostService } from '../services';
import styled from 'styled-components';

const Home = () => {
  return (
    <DataLoad
      request={PostService.getSummary}
      spinnerSize={60}
      render={posts =>
        posts && posts.length ? (
          <React.Fragment>
            <FeaturedPost post={posts[0]} />
            {posts.slice(1).map(post => (
              <BlogPost key={post.PostId} post={post} />
            ))}
          </React.Fragment>
        ) : (
          <NoData>No Data To Display</NoData>
        )
      }
    />
  );
};

const NoData = styled.div`
  font-size: 3.5rem;
  padding-top: 25%;
  text-align: center;
`;

export default Home;
