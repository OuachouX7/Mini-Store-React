import './styles/heroSection.css'
import img from './images/image.jpg'
import img1 from './images/imagee.jpg'
import img3 from './images/imageee.jpg'
import img4 from './images/imageeee.jpg'

const heroSection = () => {
    return(
        <div className="hero-container" id='hero'>
            <div className="categories-container">

                <div className="Categories">
                    <h1>Categories</h1>
                    <div className="cat-container">
                        <div className="cat">
                            <p>Tous</p>
                        </div>
                        <div className="cat">
                            <p>Chemises</p>
                        </div>
                        <div className="cat act">
                            <p>Pantalons</p>
                        </div>
                        <div className="cat">
                            <p>Chaussurs</p>
                        </div>
                        <div className="cat">
                            <p>Polos</p>
                        </div>
                        <div className="cat">
                            <p>Parfums</p>
                        </div>
                    </div>
                </div>
            </div>


            <h2 id='titul'>Liste des Pantalons</h2>
            <div className="liste-pantalons-container">
                <div className="liste-pantalons">
                    <div className="liste">
                        

                            <div className="first-card">
                                <div className="img-t-p-1">

                                    <div className="img">
                                        <img className='img1' src={img} alt="" />
                                    </div>
                                    <div className="title-price-1">
                                        <h3>Pantalon en Jean Léger</h3>
                                        <p>359.00 DH</p>
                                    </div>
                                </div>
                                <div className="taille">
                                    <h3>Taille</h3>
                                    <div className="tl-container">

                                        <div className='tl'>
                                            <p>XS</p>
                                        </div>
                                        <div className='tl'>
                                            <p>S</p>
                                        </div>
                                        <div className='tl M-selected' >
                                            <p>M</p>
                                        </div>
                                        <div className='tl'>
                                            <p>L</p>
                                        </div>
                                        <div className='tl'>
                                            <p>XL</p>
                                        </div>
                                        <div className='tl'>
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
                                <div className='btn'>
                                    <button>
                                        Ajouter Au Panier
                                    </button>
                                </div>
                            </div>
                            <div className="second-card">
                                <div className="img-t-p-1">

                                    <div className="img">
                                        <img className='img1' src={img1} alt="" />
                                    </div>
                                    <div className="title-price-1">
                                        <h3>Pantalon en Jean Léger</h3>
                                        <p>359.00 DH</p>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div className="liste">
                        

                            <div className="third-card">
                                <div className="img-t-p-1">

                                    <div className="img">
                                        <img className='img1' src={img4} alt="" />
                                    </div>
                                    <div className="title-price-1">
                                        <h3>Pantalon en Jean Léger</h3>
                                        <p>359.00 DH</p>
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
                                <div className='btn'>
                                    <button>
                                        Ajouter Au Panier
                                    </button>
                                </div>
                        </div>
                        <div className="last-card">
                            <div className="img-t-p-1">

                                <div className="img">
                                        <img className='img1' src={img3} alt="" />
                                </div>
                                <div className="title-price-1">
                                        <h3>Pantalon en Jean Léger</h3>
                                        <p>359.00 DH</p>
                                </div>
                                
                                
                            </div>
                            <div className="taille">
                                    <h3>Taille</h3>
                                    <div className="tl-container">

                                        <div className='tl'>
                                            <p>38</p>
                                        </div>
                                        <div className='tl'>
                                            <p>40</p>
                                        </div>
                                        <div className='tl M-selected' >
                                            <p>42</p>
                                        </div>
                                        <div className='tl'>
                                            <p>44</p>
                                        </div>
                                        <div className='tl'>
                                            <p>46</p>
                                        </div>
                                        <div className='tl'>
                                            <p>48</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default heroSection