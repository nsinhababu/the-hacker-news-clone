// CSS
import './styles.css';

const Main = () => {
  return (
    <main className='main'>
      <div className='container'>
        <div className='recent-event-container'>
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
