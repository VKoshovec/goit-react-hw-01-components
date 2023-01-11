import Paper from './components/Paper/Paper';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import data from '../src/data.json';
import user from '../src/user.json';
import friends from './friends.json';


function App() {
  return (
    <Paper>
      <Profile { ...user } ></Profile>
      <Statistics title="Upload stats" stats={data} grouped/>
    </Paper>
  );
}

export default App;