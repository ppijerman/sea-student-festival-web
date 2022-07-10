import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.footer`
  width: 100%;
  max-height: 430px;
  padding: 20px;
  border-top: solid 1px var(--sand);
  color: var(--sand);
  display: flex;
  justify-content: space-between;
  /* From https://css.glass */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const LogoWrapper = styled.div`
  width: 60%;
  
  @media only screen and (max-width: 992px) {
    width: 100%;
  } 
  `;

const TextLogo = styled.span`
  
  `;

const ContactWrapper = styled.div`
  width: 20%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

const FooterTitle = styled.h2`
  font-family: 'Piazzolla', sans-serif;
  `;

const Contacts = styled.ul`
  list-style-type: none;
  padding: 0;
  `;

const Contact = styled.li`
  margin-bottom: 0.5em;
  `;

// @ts-ignore
const ContactItem = ({link, text}) => {
  return (
      <Contact>
        <a href={link}>{text}</a>
      </Contact>
  )
}

const SocialMedias = styled.ul`
  display: inline;
  list-style-type: none;
  padding: 0;
  `;

const SocialMedia = styled.a`
  display: flex;
  background: var(--sand);
  color: var(--black);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  `;

// @ts-ignore
const SocialMediaItem = ({link, icon_class}) => {
    return (
        <li>
            <SocialMedia href={link} target={'_blank'}>
                <FontAwesomeIcon icon={icon_class} width={20} />
            </SocialMedia>
        </li>
    )
}

const Footer = () => {
  return (
      <FooterWrapper>
        <LogoWrapper>

        </LogoWrapper>
        <ContactWrapper>
          <FooterTitle>
            Contact
          </FooterTitle>
          <Contacts>
            <ContactItem link={'https://google.com'} text={'Ticket'}/>
            <ContactItem link={'https://google.com'} text={'Ticket'}/>
          </Contacts>
        </ContactWrapper>
        <ContactWrapper>
          <FooterTitle>
            Social Media
          </FooterTitle>
            <SocialMedias>
                <SocialMediaItem link={'https://www.instagram.com/seastudentfestival/'} icon_class={faInstagram}/>
            </SocialMedias>
        </ContactWrapper>
      </FooterWrapper>
  )
}

export default Footer