const WeeklyCard = (props) => {
  const imgArr = props.img;
  return (
    <>
      {imgArr.map((img, index) => {
        return (
          <div className='weekly-card-container' key={index}>
            {/* <img src={`assets/${img}.jpg`} alt='' className='weekly-card-img' /> */}
            <div className='weekly-card-title'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, magni.
            </div>
          </div>
        );
      })}
    </>
  );
};
export default WeeklyCard;
