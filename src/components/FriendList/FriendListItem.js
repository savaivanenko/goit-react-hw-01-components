import PropTypes from 'prop-types';
import styles from './friendList.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <ul className="friend-list">
      <li className={styles.friendListItem}>
        <span className={isOnline ? styles.isOnline : styles.isOffline}>
          {isOnline}
        </span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
}
export default FriendListItem;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
