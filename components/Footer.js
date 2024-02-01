import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';


const StyledFooter = styled.footer`
  background-color: #222;
  color: #aaa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const SocialMediaIcon = styled.a`
  color: #aaa;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export default function Footer() {
  const policyRoutes = [
    { text: 'Privacy Policy', route: '/policies/privacy-policy' },
    { text: 'Shipping & Returns', route: '/policies/shipping-and-returns' },
    { text: 'Terms & Conditions', route: '/policies/terms-and-conditions' }
  ];

  const socialMediaLinks = [
    { icon: <i className="fab fa-facebook-f"></i>, href: 'https://www.facebook.com/profile.php?id=61555867085793&mibextid=ZbWKwL' },
    
    { icon: <i className="fab fa-instagram"></i>, href: 'https://www.instagram.com/factory__loot/' },
  ];

  return (
    <StyledFooter>
      <FooterNav>
        {policyRoutes.map((policy) => (
          <FooterLink key={policy.text} href={policy.route}>
            {policy.text}
          </FooterLink>
        ))}
      </FooterNav>
      <CompanyDetails>
        <p>FactoryLoot</p>
        <p>WeWork 9A

Cybercity, Cybercity, DLF Phase III, Gurugram, HR 122002</p>
        {/* Address components based on your needs (street, city, state, zip, country) */}
        <p>+91 - 9350433580</p>
        <p>support@factoryloot.in</p>
      </CompanyDetails>
      <SocialMediaLinks>
        {socialMediaLinks.map((link) => (
          <SocialMediaIcon key={link.href} href={link.href} target="_blank">
            {link.icon}
          </SocialMediaIcon>
        ))}
      </SocialMediaLinks>
      <p>&copy; {new Date().getFullYear()} FactoryLoot</p>
    </StyledFooter>
  );
}
