import React from 'react';
import successIcon from '../assets/images/icon-success.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  email: string
}

export const CorrectSubscribe : React.FC<Props> = (props) => {
  const {email} = props;
  const navigate = useNavigate();
  console.log(email)
  return (
    <main className="success">
      <div className='successIcon'>
        <img src={successIcon} alt="success icon" />
      </div>
      <div>
        <h1 className='successTitle'>Thanks for subscribing!</h1>
        <p className='successText'>A Confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription</p>
      </div>
    <button className='successBtn' type='button' onClick={() => navigate('/')}>Dismiss message</button>
    </main>
  )
}