import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #6c8e71;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Contact me: iagoportomontes@gmail.com</p>
    </FooterWrapper>
  );
};

export default Footer;
