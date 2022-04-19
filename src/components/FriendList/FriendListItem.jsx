import { FriendList, IsOnline, FriendItem } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    // console.log(isOnline);
    <FriendList>
      <FriendItem>
        <IsOnline isOnline={isOnline} a={5} b={10}></IsOnline>

        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </FriendItem>
    </FriendList>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
