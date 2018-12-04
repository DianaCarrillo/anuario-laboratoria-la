import React from 'react';
import TopBar from './TopBar';
import HashtagPicker from './HashtagPicker';
import Posts from './Posts';


export default (props) => {
  console.log(props.state);
  return (
  
  <div>
    <TopBar user = {props.state}/>
    <div className="container">
      <HashtagPicker />
      <Posts />
    </div>
  </div>
  )
};
