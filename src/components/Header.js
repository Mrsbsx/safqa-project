import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="صفقة" />
      </div>
      <nav>
        <Link to="/">الرئيسية</Link>
        <Link to="/login">تسجيل الدخول</Link>
        <Link to="/signup">إنشاء حساب</Link>
        <Link to="/terms">الشروط</Link>
        <Link to="/privacy-policy">سياسة الخصوصية</Link>
      </nav>
    </header>
  );
};

export default Header;
