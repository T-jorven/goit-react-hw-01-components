import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({  username, tag, location, avatar, stats }) => {

    return (
      <div className={ styles.Profile }>
      <div className={ styles.Description }>
    <img
            src={ avatar }
            alt="User avatar"
            className={ styles.Avatar }
    />
          <p className={ styles.Name }>{username}</p>
          <p className={ styles.Tag }>@{tag}</p>
          <p className={ styles.Location }>{ location }</p>
  </div>
  <ul className={ styles.Stats }>
    <li>
      <span className={ styles.Lable }>Followers</span>
      <span className={ styles.Quantity }> { stats.followers }</span>
    </li>
    <li>
      <span className={ styles.Lable }>Views</span>
      <span className={ styles.Quantity }> { stats.views }</span>
    </li>
    <li>
      <span className={ styles.Lable }>Likes</span>
      <span className={ styles.Quantity }> { stats.likes }</span>
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