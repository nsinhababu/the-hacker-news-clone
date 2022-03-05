export const WeeklyCard = () => {
  return (
    <div className='weekly-card-container'>
      <img src='' alt='' className='weekly-card-img' />
      <div className='weekly-card-title'></div>
    </div>
  );
};

const Card = (props) => {
  console.log(props.img);
  const imgArr = props.img;

  return (
    <>
      {imgArr.map((img, index) => {
        return (
          <a className='card__link' href='' key={index}>
            <div className='card__container'>
              <div>
                <img src={`assets/${img}.jpg`} alt='' className='card__img' />
              </div>
              <div className='card__content-container'>
                <h2 className='card__hdng'>Lorem ipsum dolor sit amet.</h2>
                <div className='card__author'>Lorem ipsum dolor sit amet.</div>
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
