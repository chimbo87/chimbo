
import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Projects from './Components/Projects';
import Reviews from './Components/Reviews';

function App() {
 
  return (
    <div>
        <Navbar></Navbar>
           
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
                <Route path='/projects' element={<Projects/>}/>
              </Routes>
            
      
       </div>
    
  );
}

export default App;
