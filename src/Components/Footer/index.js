// Component
import { SocialLinks } from '../../consts';
// CSS
import './styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__links-container'>
        <div className='follow-us'>Follow US</div>
        <div className='footer__links'>
          <SocialLinks />
        </div>
      </div>
      <div className='footer__menu-container'>
        <div className='footer__menu'>
          <h4>About</h4>
          <a className='footer__menu-links' href='#'>
            About Us
          </a>
          <a className='footer__menu-links' href='#'>
            Advertising
          </a>
          <a className='footer__menu-links' href='#'>
            Editorial Team
          </a>
          <a className='footer__menu-links' href='#'>
            Contact
          </a>
        </div>
        <div className='footer__menu'>
          <h4>Pages</h4>
          <a className='footer__menu-links' href='#'>
            RSS Feeds
          </a>
          <a className='footer__menu-links' href='#'>
            Deals Store
          </a>
          <a className='footer__menu-links' href='#'>
            Privacy Policy
          </a>
          <a className='footer__menu-links' href='#'>
            Jobs
          </a>
        </div>
        <div className='footer__menu'>
          <h4>Deals</h4>
          <a className='footer__menu-links' href='#'>
            Exclusives
          </a>
          <a className='footer__menu-links' href='#'>
            Hacking
          </a>
          <a className='footer__menu-links' href='#'>
            Development
          </a>
          <a className='footer__menu-links' href='#'>
            Android
          </a>
        </div>
        <div className='footer__menu footer__menu-last'>
          <a href='#'>RSS Feeds</a>
          <a href='#'>Contact Us</a>
          <a href='#'>Telegram Channel</a>
        </div>
      </div>
      <div className='footer__copyright'>
        © The Hacker News, 2021. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
