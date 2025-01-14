import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Provider } from 'react-redux';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
export default App;