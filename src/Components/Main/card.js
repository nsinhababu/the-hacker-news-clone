export const WeeklyCard = () => {
  return (
    <div className='weekly-card-container'>
      <img src='' alt='' className='weekly-card-img' />
      <div className='weekly-card-title'></div>
    </div>
  );
};

const Card = () => {
  return (
    <a href=''>
      <div className='card__container'>
        <div>
          <img src={`assets/${imgNmbr}.jpg`} alt='' className='card__img' />
        </div>
        <div className='card__content-container'>
          <h2 className='card__hdng'>New News</h2>
          <div className='card__author'></div>
          <div className='card__content'></div>
        </div>
      </div>
    </a>
  );
};

export default Card;
