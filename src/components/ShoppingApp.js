import {Link} from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const AppContainer = styled.div`
  background:url("https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  color: white;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #16213e;
`;

const Logo = styled.h1`
  color: #00adb5;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #1a1a2e;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: white;
  padding: 5px;
  outline: none;
`;

const Icon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  text-align: center;
`;

const Option = styled.div`
  background: #16213e;
  padding: 20px;
  border-radius: 10px;
  width: 150px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #1a1a2e;
  }
`;

const ShoppingApp = () => {
  return (
    <AppContainer>
      <Header>
        <Logo>HighTechShop</Logo>
        <SearchBar>
          <Input placeholder="Search for products..." />
          <Icon>
            <FaSearch color="white" />
          </Icon>
        </SearchBar>
        <Icon>
          <FaShoppingCart size={20} />
        </Icon>
        <Icon>
          <FaUser size={20} />
        </Icon>
      </Header>
      <Options>
        <Option><Link to ="/electronics">Electronics</Link></Option>
        <Option><Link to ="/product">Fashion</Link></Option>
        <Option>Home Appliances</Option>
        <Option>Books</Option>
      </Options>
    </AppContainer>
  );
};

export default ShoppingApp;
