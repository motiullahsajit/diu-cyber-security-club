import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
