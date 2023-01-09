import './App.css';
import { Profile } from './components/Profile/Profile';
import user from '../src/user.json'


function App() {
  return (
    <Profile { ...user } ></Profile>
  );
}

export default App;
