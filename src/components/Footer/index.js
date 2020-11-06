import React from 'react';
import {
  FaLinkedin,
  FaStar
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='//github.com/bedrantirak/ecommerce-restaurant-design-w-react'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaStar />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/bedran-t%C4%B1rak-1a4bb9146/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;