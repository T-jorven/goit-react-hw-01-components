import React from 'react';
import ReactDOM from 'react-dom';
import user from './json/user.json';
import Profile from './components/profile/Profile.js';
import Statistics from './components/statistics/StatisticsList.js';
import data from './json/data.json';
import friendList from './json/friends.json';
import Friends from './components/friends/Friends.js';
import transactionInfo from './json/transactions.json';
import TransactionHistory from './components/transactions/Transactions.js';

ReactDOM.render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Friends friends={friendList}></Friends>
    <TransactionHistory data={transactionInfo}></TransactionHistory>
  </React.StrictMode>,
  document.getElementById('root'),
);
