// Component
import { SocialLinks } from '../../consts';
// CSS
import './styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__links-container'>
        <div className='footer__links'>
          <SocialLinks />
        </div>
      </div>
      <div className='footer__menu-container'></div>
      <div className='footer__copyright'></div>
    </footer>
  );
};
export default Footer;
