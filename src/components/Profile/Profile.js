import PropTypes from 'prop-types';
const Profile = ({ 
  username,
  tag,
  location,
  avatar,
  stats: { 
    followers,
    views,
    likes }}) => { return (
    <div>
    </div>
 ) };

  Profile.PropTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: { 
      followers,
      views,
      likes
  };