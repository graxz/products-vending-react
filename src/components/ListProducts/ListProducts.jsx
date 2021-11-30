import React, { useState } from 'react';
import api from '../../api/products.json'
import check from '../../assets/verifica.png'
import './ListProducts.css'

function ListProducts () {
  const [ color, setColor ] = useState([])
  const [ favorites, setFavorites ] = useState([])

  function changeState (index) {
    const position = color.indexOf(index);

    if (position > -1) {
      color.splice(position, 1)

      setColor(color => [...color])
    } else {

      setColor(color => [...color, index])
    }
  }

  function addFavorite (index) {
    const position = favorites.indexOf(index);

    if (position > -1) {
      favorites.splice(position, 1)

      setFavorites(favorites => [...favorites])
    } else {

      setFavorites(favorites => [...favorites, index])
    }
  }

  return (
    <div className="list-products">
      {
        api.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div onClick={() => addFavorite(index)} className={"wishlist " + (favorites.includes(index) ? "wishlist-click" : "")}>
                <button className="btn-wishlist">
                  {/* <img className="wishlist-image" src={icon} alt="icon"/> */}
                    <div className={"wishlist-svg wishlist-svg-select " + (favorites.includes(index) ? "svg-click" : "")}>
                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                        fill="#000000">
                        <path d="M26 209 c-42 -33 -34 -62 34 -132 l60 -62 61 62 c69 71 74 101 26
                        137 -27 20 -29 20 -58 3 -28 -15 -33 -15 -52 -2 -28 20 -39 19 -71 -6z m72
                        -15 c20 -14 24 -14 44 0 28 20 43 20 62 0 25 -25 18 -45 -34 -103 l-50 -55
                        -50 55 c-52 58 -59 78 -34 103 19 20 34 20 62 0z"/>
                        </g>
                      </svg>
                  </div>
                </button>
              </div>
              <div className="product-image">
                <img className="image" src={product.image} height="240px" alt={product.description} />
              </div>
              <div className="product-description">
                <p className="description"><strong>{product.description}</strong></p>
              </div>
              <div className="product-price">
                <p className="price">{product.price}</p>
              </div>
              <div className="product-price-discount">
                <p className="price-discount">{product.price_discount}</p>
              </div>
              <div className="installments">
                <p className="installments-text">em até <strong className="installments-text-black">10x de R$ 259,90</strong> sem juros</p>
              </div>
              <div className="btn">
                <button onClick={() => changeState(index)} className={"btn-buy " + (color.includes(index) ? "isSelect" : "green-test")}>
                  <img className={"check-icon " + (color.includes(index) ? "" : "hidden")} src={check} alt="icon"/>
                  {color.includes(index) ? "ADICIONADO" : "ADICIONAR"}
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ListProducts;