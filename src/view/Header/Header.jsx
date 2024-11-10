import React from 'react';
import './Header.scss'

import logoImg from '../../assets/img/logoImg.png';
import cartImg from '../../assets/img/cartImg.svg';
import favouritesImg from '../../assets/img/favouritesImg.svg';
import profileImg from '../../assets/img/profileImg.svg';


function Header(props) {
  return (
    <div className="header">
        <div className="headerLogo">
            <div className="headerLogoImg">
                <img className="logoImg" alt="logoImg" src={logoImg} />
            </div>
            <div className="headerLogoTitle">
                <h1 className="logoTitle">React Sneakers</h1>
                <p className="logoSubtitle">Shop of best sneaker</p>
            </div>
        </div>
        <ul className="headerController">
            <li className="controllerItem" onClick={props.openCart}>
                <img className="controllerImg" alt="img" src={cartImg}/>
                <span className='controllerName'>1200zl</span>
            </li>
            <li className="controllerItem">
                <img className="controllerImg" alt="img" src={favouritesImg}/>
                <span className='controllerName'>Favourites</span>
            </li>
            <li className="controllerItem">
                <img className="controllerImg" alt="img" src={profileImg}/>
                <span className='controllerName'>Profile</span>
            </li>
        </ul>
    </div>
  )
}

export default Header