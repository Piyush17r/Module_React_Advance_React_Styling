import styled from "styled-components";

const Footer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const FooterComponent = () => (
  <Footer>
    <p>© 2024 Nest Grocery. All rights reserved.</p>
  </Footer>
);

export default FooterComponent;
