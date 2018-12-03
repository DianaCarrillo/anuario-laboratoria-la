import React from 'react';
import Post from './Post';
import data from '../fetch-post-result.json';

export default () => (
  <div>
    {data.posts.map(post => (
      <Post
        key={`${post.src}-${post.author}-${post.date}`}
        post={post}
      />
    ))}
  </div>
);
