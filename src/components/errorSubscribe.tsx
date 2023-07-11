import React from 'react';
import successIcon from '../assets/images/icon-success.svg';

interface Props {
  email: string
}

export const ErrorSubcribe : React.FC<Props> = (props) => {
  const {email} = props;
  console.log(email)
  return (
    <>
    <div>
     ERROR
    </div>
    </>
  )
}