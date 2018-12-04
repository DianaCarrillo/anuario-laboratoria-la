import React from 'react';
import twitter from '../img/twitter.svg';
import './Post.css'
const styles = {
  border: {
    border: '2px solid #FFFFFF',
    color: '#000000',
  },
  photo: {
    width: '100%',
    height: '100%'
  }
}


const Post = ({ post }) => {
  console.log(post)
  return (
    <div className="card mt-3 card-container" style={styles.border}>
      {post.photo && (
        <img className="card-img-top" src={post.photo} alt="Foto" style ={styles.photo} />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.author}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
        <p className="card-text">{post.text}</p>
        <img src={twitter} height="20" alt="Twitter logo" />
      </div>
    </div>
  )
}

export default Post
