//components
import Header from '../Header';
import Main from '../Main';
import Deals from '../Deals';
import EmailSection from '../EmailSection';
import Footer from '../Footer';
import { useState } from 'react';

function AppAssemble() {
  const [className, setClassName] = useState('false');
  const handleSearch = () => {
    setClassName(!className);
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Main />
      <Deals />
      <EmailSection />
      <Footer />
    </div>
  );
}

export default AppAssemble;
