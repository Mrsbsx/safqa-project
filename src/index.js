import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // هذا لتطبيق أي تنسيقات أساسية قد تكون موجودة
import App from './App';  // استيراد التطبيق الرئيسي (App.js)
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// إذا كنت ترغب في استخدام Web Vitals لمراقبة الأداء، يمكنك تمكينه هنا
reportWebVitals();
