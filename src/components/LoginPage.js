import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  color: white;
  font-family: "Arial", sans-serif;
`;

const Logo = styled.img`
  width: 70px;
  margin-bottom: 20px;
  height:70px;
  border-radius:100px;
`;

const AIMessage = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  animation: fadeIn 3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 250px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #00adb5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #007580;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('All fields are required!');
      return false;
    }
    // Simple AI-based validation simulation
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError('Enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/shop');
    }
  };

  return (
    <LoginContainer>
      <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimrMUId692F8ytceMnSgzuxqc2GUIAmLxVw&s" alt="Logo" />
      <AIMessage>Welcome! Let AI power your shopping experience.</AIMessage>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        {error && <p>{error}</p>}
      <Button onClick={handleLogin}>Sign In</Button>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </LoginContainer>
  );
};

export default LoginPage;
