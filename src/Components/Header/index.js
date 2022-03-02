//components
import NavBar from './Navbar';
import Search from './search';

//data

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
            <a className='social-links' href='#'>
              FaceBook
            </a>
            <a className='social-links' href='#'>
              Twiter
            </a>
            <a className='social-links' href='#'>
              LinkedIn
            </a>
            <a className='social-links' href='#'>
              YouTube
            </a>
            <a className='social-links' href='#'>
              Feeds
            </a>
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
