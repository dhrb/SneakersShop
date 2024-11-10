import './Cart.scss';
import closeCartImg from './../../assets/img/closeCartImg.svg';
import cartArrowImg from './../../assets/img/cartArrowImg.svg';

import React from 'react'

function Cart(props) {
  return (
    <div className='cart'>
        <div className="cartOverlay">
            <div className="cartHeader">
                <p className="cartHeaderTitle">Cart</p>
                <img 
                    src={closeCartImg}
                    alt="closeImg"
                    className="cartCloseImg"
                    onClick={props.closeCart}
                />
            </div>
            <div className="cartBody">
                <div className="cartItems">
                    <div className="cartItem">
                        <img src="" alt="cartItemImg" className="cartItemImg" />
                        <div className="cartItemInfo">
                            <p className="cartItemName"> кроссовки</p>
                            <p className="cartItemPrice">12 999</p>
                        </div>
                        <img src={closeCartImg} alt="deleteImg" className="deleteImg" />
                    </div>
                </div>
            </div>
            <div className="cartFooter">
                <div className="cartFooterAmount">
                    <p className="amountSummary">Summary: </p>
                    <p className="amountPrice">
                        {'amountpricemustbehere'}
                    </p>
                </div>
                <div className="cartFooterTax">
                    <p className="taxName">
                        Tax 5%:
                    </p>
                    <p className="taxAmount">
                        {'taxamountmustbeher'}
                    </p>
                </div>
                <div className="cartFooterAction">
                    <button className="actionOrderBtn">
                        <span className="cartBtntext">Confirm order</span>
                        <img src={cartArrowImg} alt="cartImg" className="cartArrowImg" />
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cart