import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: linear-gradient(180deg, #f5efe7, #e2e8e4);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #333333;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Iago Porto Montes</h1>
    </HeaderWrapper>
  );
};

export default Header;
