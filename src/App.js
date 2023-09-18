import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import More from './pages/More';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/More' element={<More />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
