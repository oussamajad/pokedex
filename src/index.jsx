import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../src/custom.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Welcome from './pages/Welcome';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Pokedex from './pages/Pokedex';

ReactDOM.render(
  <React.StrictMode>    
    
    <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="dashboard"  element={<Dashboard/>}>
              <Route path="welcome" element={<Welcome/>}/>
  
            </Route>
            <Route path="/survey/:qstnbr" element={<Survey/>}/>
                <Route path="/results" element={<Results/>}/>
            <Route path="*" element={<NotFound/>} />
            <Route path="freelances" element={<Freelances/>}/>
            <Route path="pokedex" element={<Pokedex/>}/>
          </Routes>
        </div>
    </Router>
    <Footer/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

