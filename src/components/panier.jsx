import './styles/panier.css'
import img1 from './images/imagee.jpg'
import img3 from './images/imageee.jpg'
import img4 from './images/imageeee.jpg'

const panier = () => {

    return(
        <div className="panier-Container" id='pan-cont'>
            <div className="paniers">

                <div className="panier-up">
                <h2 className='h2-panier'>Panier</h2>

                    <div className="panier1">
                        <div className="panier1-img">
                            <img className='image-panier' src={img1} alt="" />
                        </div>
                        <div className="title-price-qte">
                            <h3>Pantalon en Jean Léger</h3>
                            <div className="qte-price">
                                <div className="qte">

                                    <button className='btn-panier'>-</button>
                                    <span className='span-panier'>1</span>
                                    <button className='btn-panier'>+</button>
                                </div>
                                <div className="price">
                                    <span>359.00 DH</span>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="panier1">
                        <div className="panier1-img">
                            <img className='image-panier' src={img4} alt="" />
                        </div>
                        <div className="title-price-qte">
                            <h3>Pantalon en Jean Léger</h3>
                            <div className="qte-price">
                                <div className="qte">

                                    <button className='btn-panier'>-</button>
                                    <span className='span-panier'>1</span>
                                    <button className='btn-panier'>+</button>
                                </div>
                                <div className="price">
                                    <span>359.00 DH</span>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="panier1">
                        <div className="panier1-img">
                            <img className='image-panier' src={img3} alt="" />
                        </div>
                        <div className="title-price-qte">
                            <h3>Pantalon en Jean Léger</h3>
                            <div className="qte-price">
                                <div className="qte">

                                    <button className='btn-panier'>-</button>
                                    <span className='span-panier'>1</span>
                                    <button className='btn-panier'>+</button>
                                </div>
                                <div className="price">
                                    <span>359.00 DH</span>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="total">
                        <p className='total-p'>Total</p>
                        <span className='line-through'>1097.00 DH</span>
                        <span className='the-pricee'>977.00 DH</span>
                    </div>
                </div>
                <div className="panier-down">

                    <div className="inputs">
                        <form>
                            <div className="reduction">

                                <input type="text" className='inpt' value='1000.00' id='inpt'/>
                                <label htmlFor="inpt">Especes</label>
                            </div>
                            <div className="reduction">

                                <input type="text" className='inpt' value='100.00' id='inpt'/>
                                <label htmlFor="inpt">Reduction</label>
                            </div>
                        </form>

                    </div>
                    <div className="cards-panier">
                        <button className="card-panier-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/></svg>
                            <span>Carte</span>
                        </button>
                        <button className="card-panier">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z"/></svg>
                            <span>Carte</span>
                        </button>
                        <button className="card-panier-2">
                            <span>Valider</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default panier