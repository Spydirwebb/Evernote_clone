import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Form from './components/home/Form';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Form />
    </Router>
  );
}

export default App;
