import Header from "./components/header/Header.jsx";
import Navbar from './components/navbar/Navbar';
import Portofolio from "./components/portofolio/Portofolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from './components/contact/Contact.jsx';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
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