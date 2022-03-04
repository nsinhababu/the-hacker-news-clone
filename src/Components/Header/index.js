//components
import NavBar from './Navbar';
import Search from './search';
import { SocialLinks } from '../../consts';

//data
// CSS
import './styles.css';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <div className='header__top'>
          <div className='header__top-links-container clear-margin'>
            <a className='social-links' href='#'>
              Follow US
            </a>
            <SocialLinks />
          </div>
        </div>
        <div className='header__bottom'>
          <div className='header__bottom-logo-container clear-margin'>
            <div className='header__logo'>
              <img className='logo' src='assets/logo.png' alt='' />
            </div>
            <a className='logo-container-link' href='#'>
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
      <NavBar />
      <Search />
    </header>
  );
};

export default Header;
