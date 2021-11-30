import React from 'react';
import ReactDOM from 'react-dom';

import user from './json/user.json';
import data from './json/data.json';
import friendList from './json/friends.json';
import transactionInfo from './json/transactions.json';

import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/StatisticsList.jsx';
import Friends from './components/Friends/Friends.jsx';
import TransactionHistory from './components/Transactions/Transactions.jsx';

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
