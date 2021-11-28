import React from 'react';
import ReactDOM from 'react-dom';
import cssstyles from './index.css'
import Profile from './components/profile/Profile.js'
import Statistics from './components/statistics/StatisticsList.js'
import data from './json/data.json'
import friendList from './json/friends.json'
import Friends from './components/friends/Friends.js'



ReactDOM.render(
  <React.StrictMode>
    <Profile />
     
    <Statistics title="Upload stats" stats={data}/>
   <Friends friends={friendList}></Friends>
  </React.StrictMode>,
  document.getElementById('root'),
);

