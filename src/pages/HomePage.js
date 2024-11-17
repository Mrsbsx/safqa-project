import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = [
    { id: 1, name: 'منتج 1', description: 'وصف المنتج 1', price: '100', imageUrl: '/assets/product1.jpg' },
    { id: 2, name: 'منتج 2', description: 'وصف المنتج 2', price: '200', imageUrl: '/assets/product2.jpg' },
    // يمكنك إضافة المزيد من المنتجات هنا
  ];

  return (
    <div>
      <Header />
      <main>
        <h1>مرحبًا في منصة صفقة!</h1>
        <p>المنصة لبيع وشراء المنتجات المستعملة والجديدة. تواصل مع البائعين والمشترين!</p>

        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="actions">
          <a href="/login" className="button">تسجيل الدخول</a>
          <a href="/signup" className="button">إنشاء حساب</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
