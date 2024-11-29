import './App.css';
import Experience from './components/Experience/Experience';
import Headers from './components/Headers/Headers';
import HireMe from './components/HireMe/HireMe';
import Nav from './components/Nav/Nav'
import NewComponent from './components/NewComponent/NewComponent';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Mail from './components/Mail/Mail'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Headers id="home" ></Headers>
      <NewComponent id="services"></NewComponent>
      <Experience id="experiences"></Experience>
      <HireMe id="hireMe"></HireMe>
      <Portfolio id="portfolio"></Portfolio>
      <Testimonials id="testimonials"></Testimonials>
      <Mail id="contact"></Mail>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
