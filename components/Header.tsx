import styled from 'styled-components';
import Button from './Button';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--sand);
  display: flex;
  justify-content: space-between;
  color: var(--sand);
  /* From https://css.glass */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 0;
`;

const HeaderItem = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderLogo = styled(HeaderItem)``;

const Logo = styled.img`
  max-height: 60px;
`;

const HeaderText = styled.p`
  font-size: 17px;
  font-weight: 900;
  max-width: 230px;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (min-width: 420px) {
    font-size: 19px;
  }
`;

const HeaderLinks = styled(HeaderItem)``;

const HeaderButton = styled(Button)`
  font-size: 16px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        {/* <Logo /> */}
        <HeaderText>Southeast Asia Student Festival 2022</HeaderText>
      </HeaderLogo>
      <HeaderLinks>
        <HeaderButton href={'https://google.com'}>Grab your ticket</HeaderButton>
      </HeaderLinks>
    </HeaderWrapper>
  );
};

export default Header;
