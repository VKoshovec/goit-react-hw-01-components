import Paper from './components/Paper/Paper';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import data from '../src/data.json';
import user from '../src/user.json';
import friends from './friends.json';


function App() {
  return (
    <Paper>
      <Profile { ...user } />
      <Statistics title="Upload stats" stats={data} grouped/>
      <FriendList friends={ friends }/>
    </Paper>
  );
}

export default App;