import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';
import More from './pages/More';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />}/>
          <Route path='/Experience' element={<Experience />} />
          <Route path='/More' element={<More />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
