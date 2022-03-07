const ImageBox = ({ imgSrc }) => {
  return (
    <div className='image-container'>
      <img className='card__img' src={imgSrc} alt='' />
    </div>
  );
};

export default ImageBox;
