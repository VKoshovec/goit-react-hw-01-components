import PropTypes from 'prop-types';

function FriendList ({ friends }) {
 return (
        <ul class="friend-list">

        </ul>
        );
};

FriendList.prototype = {
    friends: PropTypes.array(),
}

export default FriendList;