import Paper from './components/Paper/Paper';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import data from '../src/data/data.json';
import user from '../src/data/user.json';
import friends from '../src/data/friends.json';
import transactions from '../src/data/transactions.json'


function App() {
  return (
    <Paper>
      <Profile { ...user } />
      <Statistics title="Upload stats" stats={data} grouped/>
      <FriendList friends={ friends }/>
      <TransactionHistory items={ transactions }/>
    </Paper>
  );
}

export default App;