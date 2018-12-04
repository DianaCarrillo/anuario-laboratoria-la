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

export default ({ campuses, generation }) => {
  if (!campuses.length || !generation) {
    return <div>Selecciona un Hashtag</div>;
  }

  const filteredPosts = data.posts.filter(post => campuses.reduce(
    (prev, campus) => {
      const tag = `#laboratoria_${campus}_gen_${generation}`;
      return prev || (!!post.entities && post.entities.hashtags.indexOf(tag) > -1);
    },
    false,
  ));

  return (
    <div style = {styles.containerPost}>
      {filteredPosts.map(post => (
        <Post
          key={`${post.src}-${post.author}-${post.date}`}
          post={post}
        />
      ))}
    </div>
  );
};
