import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
    </Router>
  );
}

export default App;
