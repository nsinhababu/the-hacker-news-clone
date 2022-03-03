// Components
import Card from './card';

// CSS
import './styles.css';

const Main = () => {
  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main__content-container'>
          <div className='recent-event-container'>
            <Card />
          </div>

          <div className='button-container'>
            <button className='btn' type='button'>
              Prev Page
            </button>
            <button className='btn' type='button'>
              Next Page
            </button>
          </div>
        </div>

        <div className='popular-weekly'></div>
      </div>
    </main>
  );
};

export default Main;
