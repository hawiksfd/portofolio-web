import React, {useState} from "react";
import Header from "./components/header/Header.jsx";
import Navbar from './components/navbar/Navbar';
import Portofolio from "./components/portofolio/Portofolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from './components/contact/Contact.jsx';
import Menu from './components/menu/Menu';
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Header />
        <Portofolio />
        <Works />
        <Testimonials />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
