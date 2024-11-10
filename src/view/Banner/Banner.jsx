import React from 'react';
import './Banner.scss';
import adidasImg from './../../assets/img/bannerImageAdidas.svg';
import bannerFrogImg from './../../assets/img/bannerFrog.svg'

function Banner() {
  return (
    <div className='banner'>
        <div className="bannerLeftSide">
            <div className="bannerTitleImage">
                <img src={adidasImg} alt="bennerimage" className="adidasImg" />
            </div>
            <div className="bannerLeftBody">
                <div className="bannertHeadingText">
                    <span className="greenText">Stan Smith,</span>
                    <br />
                    <span className='text'>Forever</span>
                </div>
                <div className="bannerButtonBlock">
                    <button className="bannerBtn">Buy</button>
                </div>
            </div>
        </div>
        <div className="bannerRightSide">
            <img src={bannerFrogImg} alt="" className="bannerFrogImage" />
        </div>
    </div>
  )
}

export default Banner