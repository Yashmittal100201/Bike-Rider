import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import Projects from './Pages/Projects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='*' element={<Page404/>}/>
              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
