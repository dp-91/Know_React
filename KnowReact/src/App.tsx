import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import LazyLoadingImg from './Concepts/Lazy/LazyLoadImg/LazyLoadImg';

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Lazy">Learn about Lazy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
