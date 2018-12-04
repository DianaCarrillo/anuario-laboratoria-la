import React from 'react';
import TopBar from './TopBar';
import HashtagPicker from './HashtagPicker';
import Posts from './Posts';


export default () => (
  <div>
    <TopBar />
    <div className="container">
      <HashtagPicker />
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <Posts />
        </div>
      </div>
    </div>
  </div>
);
