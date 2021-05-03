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
