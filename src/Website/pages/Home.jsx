import styled from "styled-components";
import FooterComponent from "../Componant/Footer";
import HeaderComponent from "../Componant/Header";

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #ffe5d9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const HeroText = styled.div`
  max-width: 50%;

  h1 {
    font-size: 36px;
    color: #333;
  }

  p {
    font-size: 18px;
    margin: 20px 0;
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroImage = styled.img`
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const Hero = () => (
  <>
    {/* Header Component */}
    <HeaderComponent />

    {/* Hero Section */}
    <HeroSection>
      <HeroText>
        <h1>Don’t miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>
        <button>Subscribe</button>
      </HeroText>
      <HeroImage src="/assets/img/slider/slider-1.png" alt="Hero Banner" />
    </HeroSection>

    {/* Footer Component */}
    <FooterComponent />
  </>
);

export default Hero;
