import styled from "styled-components";
import Button from "./Button";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--sand);
  display: flex;
  justify-content: space-between;
  color: var(--sand);
  /* From https://css.glass */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`

const HeaderItem = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const HeaderLogo = styled(HeaderItem)`
  
  `;

const Logo = styled.image`
  max-height: 60px;
  `;

const HeaderLinks = styled(HeaderItem)`
  `;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo>
                <Logo/>
            </HeaderLogo>
            <HeaderLinks>
                <Button href={'https://google.com'}>
                    Grab your ticket
                </Button>
            </HeaderLinks>
        </HeaderWrapper>
    )
}

export default Header