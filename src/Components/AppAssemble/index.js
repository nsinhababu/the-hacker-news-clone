//components
import Header from '../Header';
import Main from '../Main';
import Deals from '../Deals';
import EmailSection from '../EmailSection';
import Footer from '../Footer';

function AppAssemble() {
  return (
    <div>
      <Header />
      <Main />
      <Deals />
      <EmailSection />
      <Footer />
    </div>
  );
}

export default AppAssemble;
