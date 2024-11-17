import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>السعر: {product.price} ريال</p>
      <Link to={`/product/${product.id}`}>عرض التفاصيل</Link>
    </div>
  );
};

export default ProductCard;
