import ImageBox from '../ImageBox';

const Card = (props) => {
  const imgArr = props.img;

  return (
    <>
      {imgArr.map((img, index) => {
        return (
          <a className='card__link' href='' key={index}>
            <div className='card__container'>
              <ImageBox imgSrc={`assets/${img}.jpg`} />
              {/* <div>
                <img src={`assets/${img}.jpg`} alt='' className='card__img' />
              </div> */}
              <div className='card__content-container'>
                <h2 className='card__hdng'>Lorem ipsum dolor sit amet.</h2>
                <div className='card__author'>
                  <p>sit amet.</p>
                  <p>Lorem ipsum dolor</p>
                </div>
                <div className='card__content'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  quae illum voluptates quisquam dolorum alias.
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Card;
