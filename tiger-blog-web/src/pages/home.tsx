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
      <BlogPost test={122} />
      {[1, 2, 3, 4].map(n => (
        <BlogPost key={n} test={n} />
      ))}
    </div>
  );
};

export default Home;
