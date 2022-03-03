const Card = () => {
  return (
    <div className='card__container'>
      <div>
        <img src='' alt='' className='card__img' />
      </div>
      <div className='card__content-container'>
        <h2 className='card__hdng'>New News</h2>
        <div className='card__author'></div>
        <div className='card__content'></div>
      </div>
    </div>
  );
};

export default Card;
