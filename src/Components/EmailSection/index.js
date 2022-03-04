// CSS
import './styles.css';

const EmailSection = () => {
  return (
    <div className='email__section-background'>
      <div className='email__section'>
        <div></div>
        <p></p>
        <div className='email__section-input-container'>
          <input type='email' className='email' />
          <button className='submit-btn' type='submit'></button>
        </div>
      </div>
    </div>
  );
};
export default EmailSection;
