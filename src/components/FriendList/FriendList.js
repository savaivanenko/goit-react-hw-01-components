import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';
import styles from './friendList.module.css';

function FriendList({ options }) {
  return (
    <ul className={styles.friendList}>
      {options.map(({ isOnline, avatar, name, id }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}
export default FriendList;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
