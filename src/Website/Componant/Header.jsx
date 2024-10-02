import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
`;

const HeaderComponent = () => (
  <Header>
    <Logo>Nest</Logo>
    <Nav>
      < NavLink to="hero">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="shop">Shop</NavLink>
      <NavLink to="vendors">Vendors</NavLink>
      <NavLink to=" contact">Contact</NavLink>
    </Nav>
  </Header>
);

export default HeaderComponent;
