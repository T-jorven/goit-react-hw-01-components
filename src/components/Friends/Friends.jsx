import PropTypes from 'prop-types';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(friend => (
        <li className={s.Item} key={friend.id}>
          <span
            className={`${s.Status} ${friend.isOnline ? s.Online : s.Offline}`}
          ></span>
          <img
            className={s.Avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.Name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ).isRequired,
};

export default Friends;
