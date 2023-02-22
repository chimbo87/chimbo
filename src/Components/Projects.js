import React from 'react'
import Paving from './Paving';
import Development from './Development';
import Roofing from './Roofing';
import { Route,Routes } from 'react-router-dom';
import './Project.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
    <div>
        <div className='container-fluid'>
          <div className='container' id='projectNav'>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Open this select menu</option>
                <option value="1"><Link className="nav-link"  to={"/development"} id="txt">development</Link></option>
                <option value="2"><Link className="nav-link"  to={"/roofing"} id="txt">roofing</Link></option>
                <option value="3"><Link className="nav-link"  to={"/paving"} id="txt">paving</Link></option>
                <option value="4">Flooring</option>
                <option value="5">Durawalls</option>
                
          </select>
          </div>
        </div>
        <Routes>
                <Route path='/' element={<Paving/>}/>
                <Route path='/development' element={<Development/>}/>
                <Route path='/roofing' element={<Roofing/>}/>
          </Routes>
    </div>
    </>
  )
}

export default Projects