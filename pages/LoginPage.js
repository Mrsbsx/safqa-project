import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>تسجيل الدخول</h1>
        <form>
          <input type="email" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة المرور" />
          <button type="submit">تسجيل الدخول</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
