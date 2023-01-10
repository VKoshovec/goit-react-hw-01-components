import { Paper } from './components/Paper/Paper';
import { Profile } from './components/Profile/Profile';
import user from '../src/user.json';

import { Statistics } from './components/Statistics/Statistics';
import data from '../src/data.json';


function App() {
  return (
    <Paper>
      <Profile { ...user } ></Profile>
      <Statistics title="Upload stats" stats={data}/>
    </Paper>
  );
}

export default App;