// CSS
import './styles.css';

const Deals = () => {
  const imgNmbrArr = ['one', 'two', 'three', 'four'];

  return (
    <div className='deals'>
      <div className='deals-hdng'>Online Courses and Software</div>

      <div className='deals-card-container'>
        {/* loop */}
        {imgNmbrArr.map((imgNmbr, index) => {
          return (
            <div className='deals-card'>
              <div className='deals-img-container'>
                <img
                  src={`assets/${imgNmbrArr[index]}.jpg`}
                  alt=''
                  className='deals-img'
                />
              </div>

              <div className='deals-content-container'>
                <div className='deals-content-one'>
                  Lorem ipsum dolor sit amet.
                </div>
                <div className='deals-content-two'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ipsa reprehenderit maiores praesentium voluptatum.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Deals;
