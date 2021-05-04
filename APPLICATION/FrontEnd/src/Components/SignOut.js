/* SJSU CMPE 138 Spring 2021 TEAM8 */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { removeUser } from '../Utils/helper';

const SignOut = () => {
  const history = useHistory();

  useEffect(() => {
    removeUser();
    history.replace('/');
  }, []);

  return null;
}

export default SignOut;
