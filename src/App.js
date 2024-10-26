import LeftSide from './components/leftSide'
import HeroSection from './components/heroSection'
import Panier from './components/panier'
import './App.css'
import { useState } from 'react'


function App() {
  const [id,setid] = useState();
  
  const handleData = (data) => {
    setid(data);
  }

  const item1 = {
    id : 1,
    name : 'Pantalon en Jean Léger',
    price : 359,
    src : '/images/image.jpg',
    alt: 'img1'
  }

  const item2 = {
    id : 2,
    name : 'Pantalon en Jean',
    price : 399,
    src : '/images/imagee.jpg',
    alt: 'img2'
  }
  
  if (item1.id === id) {
    var res = item1;
  } else {
    var res = item2;
  }


  return (
    <div className="the-app">
      <LeftSide />
      <HeroSection onSendData = {handleData}/>
      <Panier item = {res}/>
    </div>
  );
}

export default App;
