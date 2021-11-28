import PropTypes from 'prop-types';
import styles from './Friends.module.css'


const Friends = ({ friends }) => {
    console.log(friends);
    
    return (
        <ul className = {styles.FriendList}>
            {friends.map(friend => (
                <li className={ styles.Item } key={ friend.id }>
                <span className={ styles.Status } style={{backgroundColor: friend.isOnline ? 'green' : 'red'}}></span>
                <img className={ styles.Avatar} src={ friend.avatar } alt="User avatar" width="48" />
                    <p className={ styles.Name }>{ friend.name }</p>
            </li>

           ))}

        </ul>
    )
}


Friends.propTypes = {
      id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends