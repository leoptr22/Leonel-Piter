import './App.css';
import Contacto from './components/FoterContacto/Contacto';
import Navbar from './components/Navbar/Navbar';
import ModernProfileCard from './components/ProfileCards/ModernProfileCard';
import PropuestaCard from './components/Propuestas/Propuesta';
import SobreMi from './components/SobreMi/SobreMi';
import Footer from './components/Footer/Footer';
import GradientBackground from './components/FondoAnimado/GradientBackground';


import CircularText from './components/ListaAnimada/CircularText';


function App() {
  return (

    <>
      <GradientBackground/>
     
      <Navbar />
      
      <ModernProfileCard/>
      <SobreMi/>
       
      <PropuestaCard/>
      <Contacto />
      <Footer/>
    </>

    
          

  );
}

export default App;
