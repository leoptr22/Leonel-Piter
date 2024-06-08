import './App.css';
import BackgroundVideo from './components/FondoAnimado/FondoAnimado';
import Contacto from './components/FoterContacto/Contacto';
import Navbar from './components/Navbar/Navbar';
import ProfileCard from './components/ProfileCards/ProfileCards';
import PropuestaCard from './components/Propuestas/Propuesta';
import SobreMi from './components/SobreMi/SobreMi';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <>
      <Navbar />
      <BackgroundVideo />
      <ProfileCard/>
      <SobreMi/>
      <PropuestaCard/>
      <Contacto />
      <Footer/>
    </>

    
          

  );
}

export default App;
