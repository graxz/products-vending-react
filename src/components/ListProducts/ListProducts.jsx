import React from 'react';
import api from '../../api/products.json'
import icon from '../../assets/coracao.png'
import './ListProducts.css'

function ListProducts () {
  return (
    <div className="list-products">
      {
        api.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div className="wishlist">
                <button className="btn-wishlist">
                  <img className="wishlist-image" src={icon} alt="icon"/>
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
                <button className="btn-buy">
                  <p className="add-btn">ADICIONAR</p>
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