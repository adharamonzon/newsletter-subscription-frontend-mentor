import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';

import { MainComponent } from "./components/main";
import { CorrectSubscribe } from "./components/correctSubscribe";

export const App = () => {
  const [email, setEmail] = React.useState('');

  const handleState = (email: string) => {
    setEmail(email);
  }
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<MainComponent handleState= {handleState} />} />
        <Route path='/isSubscribed' element={ <CorrectSubscribe email={email}/> }/>
      
      </Routes>
      
    </HashRouter>
  );
};