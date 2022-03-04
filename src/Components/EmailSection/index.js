// CSS
import './styles.css';

const EmailSection = () => {
  return (
    <div className='email__section-background'>
      <div className='email__section'>
        <div>
          <p className='email__section-hdng'>
            Cybersecurity Newsletter — Stay Informed
          </p>
        </div>
        <div>
          <p>
            Sign up for cybersecurity newsletter and get latest news updates
            delivered straight to your inbox daily.
          </p>
        </div>
        <div className='email__section-input-container'>
          <input type='email' className='email' />
          <button className='subscribe-btn' type='subscribe'>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmailSection;
