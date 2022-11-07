import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//common componenets
import Header from './views/components/header';
import Footer from './views/components/footer';
//content compoenents
import Home from './views/content/home';
import About from './views/content/about';
import Services from './views/content/services';
import Projects from './views/content/projects';
import Contact from './views/content/contact';

// styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>


          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
