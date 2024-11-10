import './Sneaker.scss';

import toCartAddedImg from './../../assets/img/favouritesAdded.svg';
import toFavoritesImg from './../../assets/img/toFavoritesImg.svg'
import toCartImg from './../../assets/img/toCartImg.svg';
import toFavouritesAdded from './../../assets/img/favoritesAddedImg.svg';

function Sneaker(props) {

  const cartHandler = () => {
    props.addToCart(!props.inCart)
    console.log(props.inCart)
  }
  const favouritesHandler = () => {
    props.addToFavourites(!props.inFavourites)
    console.log(props.inFavourites)
  }

  return (
    <div className="sneakerWrapper">
      <div className="sneakerHeader">
        <img 
          src={props.inFavourites ? toFavouritesAdded : toFavoritesImg}
          onClick={favouritesHandler}
          alt="" className="isImageLiked" 
        />
      </div>
      <div className="sneakerCardBody">
        <img src={props.props.img} alt="" className="sneakerImg" />
        <p className="sneakerName">{props.props.name}</p>
      </div>
      <div className="sneakerCardFooter">
        <div className="cardPrice">
          <span className="cardPriceName">Price: </span>
          <p className="sneakerPrice">{props.props.price}</p>
        </div>
        <div className="addToCart">
          <img className='addToCartBtn' src={props.inCart ? toCartAddedImg : toCartImg} alt='cartBtn' onClick={cartHandler}/>
        </div>
      </div>
    </div>

  )
}

export default Sneaker;