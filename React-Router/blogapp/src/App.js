import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Components/HomePage';
import MainBlog from './Components/MainBlog';
import FavoriteFood from './Components/FavoriteFood';
import FavoriteMovie from './Components/FavoriteMovie';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <Link to='/'>Home Page</Link> &nbsp;
          <Link to='/mainblog'>Main Blog</Link> &nbsp;
          <Link to='/favoritefood'>Favorite Food</Link> &nbsp;
          <Link to='/favoritemovie'>Favorite Movie</Link> &nbsp;
          <Link to='/aboutpage'>About Page</Link>
        </nav>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/mainblog' element={<MainBlog/>}></Route>
            <Route path='/favoritefood' element={<FavoriteFood/>}></Route>
            <Route path='/favoritemovie' element={<FavoriteMovie/>}></Route>
            <Route path='/aboutpage' element={<AboutPage/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
