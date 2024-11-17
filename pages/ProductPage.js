import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';

const ProductPage = ({ productId, productName, productDescription, productPrice }) => {
  return (
    <div>
      <Header />
      <main>
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <p>السعر: {productPrice} ريال</p>
        <Chat productId={productId} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
