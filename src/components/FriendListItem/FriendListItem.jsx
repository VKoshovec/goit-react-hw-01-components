import PropTypes from 'prop-types';

function FriendListItem ({ avatar, name, isOnline}) {
 return (
     <li class="item">
       <span class="status"></span>
       <img class="avatar" src="" alt="User avatar" width="48" />
       <p class="name"></p>
     </li>
    );
};

FriendListItem.PropTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;