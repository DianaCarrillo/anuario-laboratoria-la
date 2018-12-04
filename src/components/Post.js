import React from 'react';

const styles = {
  border: {
    border: '1px solid #333333'
  },
  pill: {
    backgroundColor: '#FF009E',
    color: '#FFFFFF'
  }
}


const Post = ({post}) =>{
  console.log(post)
  return(
    <div className="card mt-3" style={styles.border}>
          <img className="card-img-top" src={post.photo} alt="Foto" />
          <div className="card-body">
            <h5 className="card-title">{post.author}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
            <p className="card-text">{post.text}</p>
            <a href="j" className="badge badge-pill" style={styles.pill}>{post.src}</a>
          </div>
    </div>
  )
}
 
export default Post
