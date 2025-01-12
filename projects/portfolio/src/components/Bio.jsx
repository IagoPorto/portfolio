import styled from "styled-components";

const BioWrapper = styled.div`
  background-color: #e2e8e4;
  padding: 20px;
  text-align: center;
  color: #333333;
  font-family: 'Roboto', sans-serif;
`;

const CoffeeIcon = styled.span`
  font-size: 24px;
  margin-left: 8px;
`;

const Bio = () => {
  return (
    <BioWrapper>
      <p>Hi, I am Iago, a backend engineer passionate about building reliable and efficient systems.</p>
      <p>Let&apos;s grab a coffee! <CoffeeIcon>☕</CoffeeIcon></p>
    </BioWrapper>
  );
};

export default Bio;
