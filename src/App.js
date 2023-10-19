import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Joins/Join';
import Plan from './Components/Plans/Plan';
import Program from './Components/Programs/Program';
import Reasons from './Components/Reasons/Reasons';
import Testimonial from './Components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plan/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
