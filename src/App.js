import './app.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from './view/Header/Header';
import Banner from './view/Banner/Banner'

import orderDone from './assets/img/orderDoneImg.svg';
import emptyBox from './assets/img/emptyBoxImg.svg';
import favouritesAdded from './assets/img/favouritesAdded.svg';
import inFavourites from './assets/img/toFavoritesImg.svg';
import addToFavourites from './assets/img/favoritesAddedImg.svg';
import searchImg from './assets/img/searchImg.svg'
import Sneaker from './view/SneakerItem/Sneaker';
import Cart from './Components/Cart/Cart';

function App() {
  const [inCart, addToCart] = useState(false);
  const [inFavourites, addToFavourites] = useState(false)
  const [isCartOpen, setCartOpen] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getUrl = 'http://localhost:3003/';
    axios.get(getUrl)
      .then(function (res) {
        if (JSON.stringify(res.data) !== JSON.stringify(data))
          setData(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.error('Ошибка:', error.message);
    });
},[])

  return (
    <div className="appWrapper">
      {isCartOpen && <Cart closeCart={()=> setCartOpen(false)} />}
      <header className='headerWrapper'>
        <Header 
          openCart={() => setCartOpen(true)}
        />
      </header>
        <div className="bodyWrapper">
          <div className="banner">
            <Banner />
          </div>
          <div className="itemsWrapper">
            <div className="itemsHeader">
              <h1 className="itemsTitle">All Sneakers</h1>
              <div className='searchBox'>
                <img className='inputSearchImg' src={searchImg} alt='searchimg' />
                <input className="inputSearch" placeholder="Search..."/>
              </div>
            </div>
            <div className="sneakerItem">
              {
                data.map((item) => (
                    <Sneaker 
                      props={item}
                      inCart = {inCart}
                      addToCart = {addToCart}
                      inFavourites = {inFavourites}
                      addToFavourites = {addToFavourites}
                    />
                  ))
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
