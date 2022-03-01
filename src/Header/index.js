//components
import NavBar from './Navbar';

import './styles.css';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <div className='header__top'>
          <div className='header__top-links-container'></div>
        </div>
        <div className='header__bottom'>
          <div className='header__bottom-logo-container'>
            <div className='header__logo'></div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
