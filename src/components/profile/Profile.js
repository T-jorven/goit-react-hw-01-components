import PropTypes from 'prop-types';
import user  from '../../json/user.json'
import styles from './Profile.module.css';


const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <div className={ styles.Profile }>
      <div class={ styles.Description }>
    <img
            src={ user.avatar }
            alt="User avatar"
            className={ styles.Avatar }
    />
          <p className={ styles.Name }>{user.username}</p>
          <p classNane={ styles.Tag }>@{user.tag}</p>
          <p className={ styles.Location }>{ user.location }</p>
  </div>
  <ul className={ styles.Stats }>
    <li>
      <span className={ styles.Lable }>Followers</span>
      <span className={ styles.Quantity }> { user.stats.followers }</span>
    </li>
    <li>
      <span className={ styles.Lable }>Views</span>
      <span className={ styles.Quantity }> { user.stats.views }</span>
    </li>
    <li>
      <span className={ styles.Lable }>Likes</span>
      <span className={ styles.Quantity }> { user.stats.likes }</span>
    </li>
  </ul>
</div>
    );
}










Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;