import "./styles/heroSection.scss";
import img from "./images/image.jpg";
import img1 from "./images/imagee.jpg";
import img3 from "./images/imageee.jpg";
import img4 from "./images/imageeee.jpg";
import img5 from "./images/chemise1.jpg";
import img6 from "./images/chemise3.jpg";
import img7 from "./images/shoes1.jpg";
import img8 from "./images/shoes2.jpg";
import img9 from "./images/shoes3.jpg";
import img10 from "./images/shoes4.jpg";
import img11 from "./images/polo1.jpg";
import img12 from "./images/polo2.jpg";
import img13 from "./images/parfum3.jpg";
import img14 from "./images/parfum2.jpg";
import { useState } from "react";

const HeroSection = ({ onSendData }) => {
  const Pantalons = () => {
    const myPantalons = [
      {
        id: 1,
        name: "Pantalon en Jean Léger",
        price: 359,
        src: img,
        alt: "img1",
      },

      {
        id: 2,
        name: "Pantalon en Jean",
        price: 399,
        src: img1,
        alt: "img2",
      },

      {
        id: 3,
        name: "Pantalon en Jean Léger",
        price: 359,
        src: img3,
        alt: "img3",
      },
      {
        id: 4,
        name: "Pantalon en Jean Léger",
        price: 359,
        src: img4,
        alt: "img4",
      },
    ];
    return (
      <>
        <h2 id="titul">Liste des Pantalons</h2>
        <div className="liste-pantalons-container">
          <div className="liste-pantalons">
            <div className="liste">
              <div className="first-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPantalons[0].src}
                      alt={myPantalons[0].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPantalons[0].name}</h3>
                    <p>{myPantalons[0].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>XS</p>
                    </div>
                    <div className="tl">
                      <p>S</p>
                    </div>
                    <div className="tl M-selected">
                      <p>M</p>
                    </div>
                    <div className="tl">
                      <p>L</p>
                    </div>
                    <div className="tl">
                      <p>XL</p>
                    </div>
                    <div className="tl">
                      <p>XXL</p>
                    </div>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(1)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="second-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPantalons[1].src}
                      alt={myPantalons[1].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPantalons[1].name}</h3>
                    <p>{myPantalons[1].price}.00 DH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="liste">
              <div className="third-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPantalons[2].src}
                      alt={myPantalons[2].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPantalons[2].name}</h3>
                    <p>{myPantalons[2].price}.00 DH</p>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(3)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="last-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPantalons[3].src}
                      alt={myPantalons[3].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPantalons[3].name}</h3>
                    <p>{myPantalons[3].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>38</p>
                    </div>
                    <div className="tl">
                      <p>40</p>
                    </div>
                    <div className="tl M-selected">
                      <p>42</p>
                    </div>
                    <div className="tl">
                      <p>44</p>
                    </div>
                    <div className="tl">
                      <p>46</p>
                    </div>
                    <div className="tl">
                      <p>48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Chemises = () => {
    const myChemise = [
      {
        id: 5,
        name: "Chemise Blue",
        price: 359,
        src: img5,
        alt: "img1",
      },

      {
        id: 6,
        name: "Chemise Noir",
        price: 399,
        src: img6,
        alt: "img2",
      },

      {
        id: 7,
        name: "Chemise Blue",
        price: 359,
        src: img5,
        alt: "img3",
      },
      {
        id: 8,
        name: "Chemise Noir",
        price: 399,
        src: img6,
        alt: "img4",
      },
    ];
    return (
      <>
        <h2 id="titul">Liste des Pantalons</h2>
        <div className="liste-pantalons-container">
          <div className="liste-pantalons">
            <div className="liste">
              <div className="first-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myChemise[0].src}
                      alt={myChemise[0].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myChemise[0].name}</h3>
                    <p>{myChemise[0].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>XS</p>
                    </div>
                    <div className="tl">
                      <p>S</p>
                    </div>
                    <div className="tl M-selected">
                      <p>M</p>
                    </div>
                    <div className="tl">
                      <p>L</p>
                    </div>
                    <div className="tl">
                      <p>XL</p>
                    </div>
                    <div className="tl">
                      <p>XXL</p>
                    </div>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(5)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="second-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myChemise[1].src}
                      alt={myChemise[1].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myChemise[1].name}</h3>
                    <p>{myChemise[1].price}.00 DH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="liste">
              <div className="third-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myChemise[2].src}
                      alt={myChemise[2].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myChemise[2].name}</h3>
                    <p>{myChemise[2].price}.00 DH</p>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(7)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="last-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myChemise[3].src}
                      alt={myChemise[3].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myChemise[3].name}</h3>
                    <p>{myChemise[3].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>38</p>
                    </div>
                    <div className="tl">
                      <p>40</p>
                    </div>
                    <div className="tl M-selected">
                      <p>42</p>
                    </div>
                    <div className="tl">
                      <p>44</p>
                    </div>
                    <div className="tl">
                      <p>46</p>
                    </div>
                    <div className="tl">
                      <p>48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Shoes = () => {
    const myShoes = [
      {
        id: 9,
        name: "Shoes Jordan",
        price: 359,
        src: img7,
        alt: "img1",
      },

      {
        id: 10,
        name: "Shoes Nike",
        price: 399,
        src: img8,
        alt: "img2",
      },

      {
        id: 11,
        name: "Shoes Adidas",
        price: 359,
        src: img9,
        alt: "img3",
      },
      {
        id: 12,
        name: "Shoes Puma",
        price: 399,
        src: img10,
        alt: "img4",
      },
    ];
    return (
      <>
        <h2 id="titul">Liste des Pantalons</h2>
        <div className="liste-pantalons-container">
          <div className="liste-pantalons">
            <div className="liste">
              <div className="first-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myShoes[0].src}
                      alt={myShoes[0].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myShoes[0].name}</h3>
                    <p>{myShoes[0].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>XS</p>
                    </div>
                    <div className="tl">
                      <p>S</p>
                    </div>
                    <div className="tl M-selected">
                      <p>M</p>
                    </div>
                    <div className="tl">
                      <p>L</p>
                    </div>
                    <div className="tl">
                      <p>XL</p>
                    </div>
                    <div className="tl">
                      <p>XXL</p>
                    </div>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(9)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="second-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myShoes[1].src}
                      alt={myShoes[1].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myShoes[1].name}</h3>
                    <p>{myShoes[1].price}.00 DH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="liste">
              <div className="third-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myShoes[2].src}
                      alt={myShoes[2].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myShoes[2].name}</h3>
                    <p>{myShoes[2].price}.00 DH</p>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(11)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="last-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myShoes[3].src}
                      alt={myShoes[3].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myShoes[3].name}</h3>
                    <p>{myShoes[3].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>38</p>
                    </div>
                    <div className="tl">
                      <p>40</p>
                    </div>
                    <div className="tl M-selected">
                      <p>42</p>
                    </div>
                    <div className="tl">
                      <p>44</p>
                    </div>
                    <div className="tl">
                      <p>46</p>
                    </div>
                    <div className="tl">
                      <p>48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Polo = () => {
    const myPolo = [
      {
        id: 13,
        name: "Red Polo",
        price: 359,
        src: img11,
        alt: "img1",
      },

      {
        id: 14,
        name: "Black Polo",
        price: 399,
        src: img12,
        alt: "img2",
      },

      {
        id: 15,
        name: "Red Polo",
        price: 359,
        src: img11,
        alt: "img3",
      },
      {
        id: 16,
        name: "Black Polo",
        price: 399,
        src: img12,
        alt: "img4",
      },
    ];
    return (
      <>
        <h2 id="titul">Liste des Pantalons</h2>
        <div className="liste-pantalons-container">
          <div className="liste-pantalons">
            <div className="liste">
              <div className="first-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPolo[0].src}
                      alt={myPolo[0].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPolo[0].name}</h3>
                    <p>{myPolo[0].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>XS</p>
                    </div>
                    <div className="tl">
                      <p>S</p>
                    </div>
                    <div className="tl M-selected">
                      <p>M</p>
                    </div>
                    <div className="tl">
                      <p>L</p>
                    </div>
                    <div className="tl">
                      <p>XL</p>
                    </div>
                    <div className="tl">
                      <p>XXL</p>
                    </div>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(13)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="second-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPolo[1].src}
                      alt={myPolo[1].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPolo[1].name}</h3>
                    <p>{myPolo[1].price}.00 DH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="liste">
              <div className="third-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPolo[2].src}
                      alt={myPolo[2].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPolo[2].name}</h3>
                    <p>{myPolo[2].price}.00 DH</p>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(15)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="last-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myPolo[3].src}
                      alt={myPolo[3].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myPolo[3].name}</h3>
                    <p>{myPolo[3].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>38</p>
                    </div>
                    <div className="tl">
                      <p>40</p>
                    </div>
                    <div className="tl M-selected">
                      <p>42</p>
                    </div>
                    <div className="tl">
                      <p>44</p>
                    </div>
                    <div className="tl">
                      <p>46</p>
                    </div>
                    <div className="tl">
                      <p>48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Parfum = () => {
    const myParfum = [
      {
        id: 17,
        name: "Essentiel Parfum",
        price: 359,
        src: img13,
        alt: "img1",
      },

      {
        id: 18,
        name: "Dusita Parfum",
        price: 399,
        src: img14,
        alt: "img2",
      },

      {
        id: 19,
        name: "Essentiel Parfum",
        price: 359,
        src: img13,
        alt: "img3",
      },
      {
        id: 20,
        name: "Dusita Parfum",
        price: 399,
        src: img14,
        alt: "img4",
      },
    ];
    return (
      <>
        <h2 id="titul">Liste des Pantalons</h2>
        <div className="liste-pantalons-container">
          <div className="liste-pantalons">
            <div className="liste">
              <div className="first-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myParfum[0].src}
                      alt={myParfum[0].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myParfum[0].name}</h3>
                    <p>{myParfum[0].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>XS</p>
                    </div>
                    <div className="tl">
                      <p>S</p>
                    </div>
                    <div className="tl M-selected">
                      <p>M</p>
                    </div>
                    <div className="tl">
                      <p>L</p>
                    </div>
                    <div className="tl">
                      <p>XL</p>
                    </div>
                    <div className="tl">
                      <p>XXL</p>
                    </div>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(17)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="second-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myParfum[1].src}
                      alt={myParfum[1].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myParfum[1].name}</h3>
                    <p>{myParfum[1].price}.00 DH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="liste">
              <div className="third-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myParfum[2].src}
                      alt={myParfum[2].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myParfum[2].name}</h3>
                    <p>{myParfum[2].price}.00 DH</p>
                  </div>
                </div>
                <div className="coulors">
                  <h3>Couleur</h3>
                  <div className="clrs-container">
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c white"></div>
                      <p>Blanc</p>
                    </div>
                    <div className="clr M-selected">
                      <div className="clr-c brown"></div>
                      <p>Marron</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c blue"></div>
                      <p>Bleu Fonce</p>
                    </div>
                    <div className="clr">
                      <div className="clr-c black"></div>
                      <p>Noir</p>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button onClick={() => handlePurchase(19)}>
                    Ajouter Au Panier
                  </button>
                </div>
              </div>
              <div className="last-card">
                <div className="img-t-p-1">
                  <div className="img">
                    <img
                      className="img1"
                      src={myParfum[3].src}
                      alt={myParfum[3].alt}
                    />
                  </div>
                  <div className="title-price-1">
                    <h3>{myParfum[3].name}</h3>
                    <p>{myParfum[3].price}.00 DH</p>
                  </div>
                </div>
                <div className="taille">
                  <h3>Taille</h3>
                  <div className="tl-container">
                    <div className="tl">
                      <p>38</p>
                    </div>
                    <div className="tl">
                      <p>40</p>
                    </div>
                    <div className="tl M-selected">
                      <p>42</p>
                    </div>
                    <div className="tl">
                      <p>44</p>
                    </div>
                    <div className="tl">
                      <p>46</p>
                    </div>
                    <div className="tl">
                      <p>48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const animationn = () => {
    return (
      <div className="animation2">
        <div className="first2"></div>
        <div className="second2"></div>
        <div className="third2"></div>
        <div className="last2"></div>
      </div>
    );
  };

  const handlePurchase = (id) => {
    onSendData(id);
  };
  const [res, setres] = useState(animationn);
  const [idd, setidd] = useState();

  const handleActif = (id) => {
    setTimeout(() => {
      setres(animationn);
    }, 1000);
    setTimeout(() => {
      setidd(id);
      if (idd === 3 || idd === 1) {
        setres(Pantalons);
      } else if (id === 2) {
        setres(Chemises);
      } else if (id === 4) {
        setres(Shoes);
      } else if (id === 5) {
        setres(Polo);
      } else if (id === 6) {
        setres(Parfum);
      } else {
        setres(animationn);
      }
    }, 3000);
  };
  return (
    <div className="hero-container">
      <div className="categories-container">
        <div className="Categories">
          <h1>Categories</h1>
          <div className="cat-container">
            <button className="cat" onClick={() => handleActif(1)} nbtn="1">
              <p>Tous</p>
            </button>
            <button className="cat" onClick={() => handleActif(2)} nbtn="2">
              <p>Chemises</p>
            </button>
            <button className="cat" onClick={() => handleActif(3)} nbtn="3">
              <p>Pantalons</p>
            </button>
            <button className="cat" onClick={() => handleActif(4)} nbtn="4">
              <p>Chaussurs</p>
            </button>
            <button className="cat" onClick={() => handleActif(5)} nbtn="5">
              <p>Polos</p>
            </button>
            <button className="cat" onClick={() => handleActif(6)} nbtn="6">
              <p>Parfums</p>
            </button>
          </div>
        </div>
      </div>
      {res}
    </div>
  );
};

export default HeroSection;
