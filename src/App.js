import './App.css';
import Carousel from './components/Carousel';
import TheApp from './components/TheApp'
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Clartiy from './components/Clarity';

function App() {
  return (
    <div>
      <Carousel/>
      <TheApp/>
      <Clartiy/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
