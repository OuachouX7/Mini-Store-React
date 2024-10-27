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

  const Products = [{
    id : 1,
    name : 'Pantalon en Jean Léger',
    price : 359,
    // src : img,
    alt: 'img1'
  },

 {
    id : 3,
    name : 'Pantalon en Jean',
    price : 399,
    // src : img1,
    alt: 'img2'
  },{
    id : 5,
    name : 'Chemise Blue',
    price : 359,
    // src : img5,
    alt: 'img1'
  },

 {
    id : 7,
    name : 'Chemise Noir',
    price : 399,
    // src : img6,
    alt: 'img2'
  },{
    id : 9,
    name : 'Shoes Jordan',
    price : 359,
    // src : img7,
    alt: 'img1'
  },

 {
    id : 11,
    name : 'Shoes Nike',
    price : 399,
    // src : img8,
    alt: 'img2'
  },{
    id : 13,
    name : 'Red Polo',
    price : 359,
    // src : img11,
    alt: 'img1'
  },

 {
    id : 15,
    name : 'Black Polo',
    price : 399,
    // src : img12,
    alt: 'img2'
  },{
    id : 17,
    name : 'Essentiel Parfum',
    price : 359,
    // src : img13,
    alt: 'img1'
  },

 {
    id : 19,
    name : 'Dusita Parfum',
    price : 399,
    // src : img14,
    alt: 'img2'
  }]

  const res = Products.filter(function (Product){
     return Product.id === id;
  })



  return (
    <div className="the-app">
      <LeftSide />
      <HeroSection onSendData = {handleData}/>
      <Panier item = {[...res]}/>
    </div>
  );
}

export default App;
