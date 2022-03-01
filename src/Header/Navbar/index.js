//components
import Search from './search';

const NavBar = () => {
  return (
    <section className='nav-section'>
      <nav className='nav__bar'>
        <div className='nav__bar-menu-container'>
          <div className='nav__bar-search'></div>
          <div className='nav__bar-menu'> </div>
        </div>
      </nav>
      <Search />
    </section>
  );
};

export default NavBar;
