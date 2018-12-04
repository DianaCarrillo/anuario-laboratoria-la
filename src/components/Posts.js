import React from 'react';
import Post from './Post';
import data from '../fetch-post-result.json';

const styles = {
  containerPost: {
    // textAlign: 'center'  
    display: 'flex',
    justifyContent: 'center',
    height: '100',
    alignContent: 'center',
    
    flexDirection: 'column',

  }
}

export default () => (
  <div style = {styles.containerPost}>
    {data.posts.map(post => (
      <Post
        key={`${post.src}-${post.author}-${post.date}`}
        post={post}
      />
    ))}
  </div>
);
