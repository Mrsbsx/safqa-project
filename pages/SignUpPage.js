import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>إنشاء حساب</h1>
        <form>
          <input type="email" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة المرور" />
          <button type="submit">إنشاء الحساب</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;
