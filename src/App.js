//components
import Header from './Components/Header';
import Main from './Components/Main';
import Deals from './Components/Deals';
import EmailSection from './Components/EmailSection';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Deals />
      <EmailSection />
      <Footer />
    </div>
  );
}

export default App;
