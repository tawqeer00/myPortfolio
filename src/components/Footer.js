// import { Container, Row, Col } from "react-bootstrap";
// // import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           {/* <MailchimpForm /> */}
//           <Col size={12} sm={6}>
//             <img src={logo} alt="Logo" />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="https://www.linkedin.com/in/tawqeer-ali-795745210/" target='display'><img src={navIcon1} alt="Icon" /></a>
//               <a href="/"><img src={navIcon2} alt="Icon" /></a>
//               <a href="/"><img src={navIcon3} alt="Icon" /></a>
//             </div>
//             <p>Copyright 2022. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }


import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../components/data/constants';

const FooterContainer = styled.div`

  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
  
 

  
  `;


const FooterWrapper = styled.footer`

  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 25px;
  color: SlateBlue;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out; 
  color:white;
  &:hover {
    color: SlateBlue;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color:white;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: SlateBlue;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 15px;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const Footer=()=>
{
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Tawqeer Ali</Logo>
        <Nav>
          <NavLink href="#home">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Tawqeer Ali. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
};



