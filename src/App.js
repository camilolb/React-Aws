import React from 'react';
import Signup from '../src/components/signup';
import Login from '../src/components/login';
import { Account } from './components/account';
import Status from './components/status';
import Attributes from './components/attributes';
import Microservice from './components/microservicio';

export default () => {

  return (
    <Account>
      <Status />
      <h2>Registrar</h2>
      <Signup />
      <hr /><br /> 
      <h2>Loguear</h2>
      <Login />
      <Attributes />
      <Microservice/>
    </Account>
  );
};