import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import BlogPost from '../components/BlogPost';
import { MOCKDATA } from '../models/mock';

const Home = () => {
  const featured = MOCKDATA[1];
  return (
    <div>
      <FeaturedPost
        post={{
          ...featured,
          CreatedTime: new Date(featured.CreatedTime),
          UpdatedTime: new Date(featured.UpdatedTime)
        }}
      />
      {MOCKDATA.slice(0, 5).map(post => (
        <BlogPost
          key={post.PostId}
          post={{
            ...post,
            CreatedTime: new Date(post.CreatedTime),
            UpdatedTime: new Date(post.UpdatedTime)
          }}
        />
      ))}
    </div>
  );
};

export default Home;
