// Import necessary libraries
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components for layout and styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background:#003366;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Navbar = styled.nav`
  background: rgba(28,28,132);
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #000435;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  background: #6e8efb;
  color: white;
  text-align: center;
  padding: 10px 20px;
  margin-top: auto;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarItem = styled.div`
  margin: 10px 0;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

// Main Component
const AIPage = () => {
  return (
    <Container>
      <Navbar>
        <Logo>AI Dashboard</Logo>
        <SearchBar placeholder="Search..." />
        <NavLinks>
          <span>Home</span>
          <span><Link to="/product">Product</Link></span>
          <span>Contact</span>
        </NavLinks>
      </Navbar>

      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar>
          <SidebarItem><Link to="/shop">Dashboard</Link></SidebarItem>
          <SidebarItem><Link to="/product">Product</Link></SidebarItem>
          <SidebarItem>Settings</SidebarItem>
        </Sidebar>

        <MainContent>
          <h1>Welcome to AI Dashboard</h1>
          <p>Here you can access all the AI tools and analytics.</p>
        </MainContent>
      </div>

      <Footer>
        <p>&copy; 2024 AI Solutions. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default AIPage;
