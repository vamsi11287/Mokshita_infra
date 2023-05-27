import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<h1 style ={{textAlign:"center"}}>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
