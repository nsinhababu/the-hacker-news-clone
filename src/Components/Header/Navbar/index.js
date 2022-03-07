//components

const NavBar = ({ handleSearch }) => {
  return (
    <section className='nav-section'>
      <nav className='nav__bar clear-margin'>
        <div>
          <a href='#'>Home</a>
        </div>
        <div>
          <a href='#'>Data Breaches</a>
        </div>
        <div>
          <a href='#'>Cyber Attacks</a>
        </div>
        <div>
          <a href='#'>Vulnerabilities</a>
        </div>
        <div>
          <a href='#'>Malware</a>
        </div>
        <div>
          <a href='#'>Offers</a>
        </div>
        <div>
          <a href='#'>Contact</a>
        </div>
        <button onClick={handleSearch} className='nav__bar-search-btn'>
          search img
        </button>
        <div className='nav__bar-menu'>menu </div>
      </nav>
    </section>
  );
};

export default NavBar;
