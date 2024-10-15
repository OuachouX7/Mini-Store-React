import LeftSide from './components/leftSide'
import HeroSection from './components/heroSection'
import './app.css'


function App() {
  return (
    <div className="the-app">
      <LeftSide className='leftSided'/>
      <HeroSection className='Hero'/>
    </div>
  );
}

export default App;
