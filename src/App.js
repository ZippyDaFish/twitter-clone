import './styles/App.css';

import Menu from './components/Menu.js';
import Feed from './components/Feed.js';
import Extras from './components/Extras.js';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Menu/>
        <Feed/>
        <Extras/>
      </div>
    </div>
  );
}

export default App;
