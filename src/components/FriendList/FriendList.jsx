import PropTypes from 'prop-types';
import css from './friendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList ({ friends }) {
 return (
        <ul className={ css.friendList }>
            {friends.map( friend => 
              <FriendListItem key={ friend.id } {...friend}/>
            )}
        </ul>
        );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired})
    ),
}

export default FriendList;