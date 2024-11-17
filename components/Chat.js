import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // عنوان الخادم

const Chat = ({ productId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on(`receive_message_${productId}`, (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off(`receive_message_${productId}`);
    };
  }, [productId]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit(`send_message_${productId}`, message);
      setMessages((prevMessages) => [...prevMessages, { message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h3>الدردشة مع البائع</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="أرسل رسالة..."
      />
      <button onClick={sendMessage}>إرسال</button>
    </div>
  );
};

export default Chat;
