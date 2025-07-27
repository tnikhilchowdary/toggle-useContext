import { useContext } from 'react';
import './App.css';
import ThemeProvider, { ThemeContext } from './ThemeProvider';
import "./App.css";

function App() {
  const {dark, toggleTheme} = useContext(ThemeContext);
  return (
    <div className="App">
     <h1>Hi, How are you?</h1>
     <button onClick={toggleTheme}>Switch to</button>
    </div>
  );
}

export default App;
