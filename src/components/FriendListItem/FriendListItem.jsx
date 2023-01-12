import PropTypes from 'prop-types';
import css from './friendListItem.module.css'

function FriendListItem ({ avatar, name, isOnline, id }) {
 return (
     <li key={ id } className={ css.item }>
       <span className={ isOnline? css.statusOnline : css.statusOffline }></span>
       <img className={ css.avatar } src= { avatar } alt="User avatar" width="48" />
       <p className={ css.name }>{ name }</p>
     </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

export default FriendListItem;