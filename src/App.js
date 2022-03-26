import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Qa from './components/QA/Qa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qa></Qa>
    </div>
  );
}

export default App;

