import Carousel from './components/Carousel/Carousel';
import TheApp from './components/TheApp'
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Clarity from './components/Clarity';

import './App.css';
// import PopModal from './components/PopModal';

function App() {
  return (
    <>
      <Carousel/>
      <TheApp/>
      <Clarity/>  
      <Features/>
      <Pricing/> 
      <Footer/>
      {/* <PopModal/> */}
    </>
  );
}

export default App;