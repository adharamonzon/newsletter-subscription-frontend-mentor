import React from 'react';
import '../styles.css';
import hero from '../assets/images/illustration-sign-up-mobile.svg';
import listIcon from '../assets/images/icon-list.svg';
import { useNavigate } from 'react-router-dom';

export const MainComponent : React.FC = (props) => {
  const [email, setEmail] = React.useState('');
  const [isInvalid, setInvalid] = React.useState(false);
  const navigate = useNavigate();
  const {handleState} = props
  const emailPatern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleclick = () => {
    if(emailPatern.test(email)) {
      handleState(email);
      navigate('/isSubscribed');
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }
  return (
    <div className='mainApp'>
      <div className='subscription'>
        <header className="header"></header>
        <main className="main">
          <h1 className="main-title">Stay updated!</h1>
          <p className="main-subtitle">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="main-list">
            <li className="main-list-item">
              <img className="icon" src={listIcon} />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="main-list-item">
              <img className="icon" src={listIcon} />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="main-list-item">
              <img className="icon" src={listIcon} />
              <p>And much more!</p>
            </li>
          </ul>

          <form action="#" className="form">
            <div className='form-label-container'>
              <label className="form-label" htmlFor="email">Email Adress</label>
              { isInvalid ? <small className='error'>Required email valid</small> : <small></small> }
            </div>
            <input className="form-input"
                  type="text"
                  name="email"
                  value = {email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  id="email"
                  placeholder="   email@company.com" />
            <button className="form-btn" 
                    type="button"
                    onClick={handleclick}
            >Subscribe to monthly newsletter</button>
          </form>
        </main>
      </div>
    </div>
  )
}