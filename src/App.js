import './App.css';
import Carousel from './components/Carousel';
import TheApp from './components/TheApp'
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Clarity from './components/Clarity';

function App() {
  return (
    <>
       <Carousel/>
      <TheApp/>
      <Clarity/>
      <Features/>
      <Pricing/> 
      <Footer/>
    </>
  );
}

export default App;
