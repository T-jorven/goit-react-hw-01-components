import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.Profile}>
      <div className={s.Description}>
        <img src={avatar} alt="User avatar" className={s.Avatar} />
        <p className={s.Name}>{username}</p>
        <p className={s.Tag}>@{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>
      <ul className={s.Stats}>
        <li>
          <span className={s.Lable}>Followers</span>
          <span className={s.Quantity}> {stats.followers}</span>
        </li>
        <li>
          <span className={s.Lable}>Views</span>
          <span className={s.Quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={s.Lable}>Likes</span>
          <span className={s.Quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
