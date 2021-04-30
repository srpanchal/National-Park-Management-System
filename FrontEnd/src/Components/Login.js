import React from 'react';
import { useHistory} from 'react-router-dom';

export default function Login() {
    
   
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }
  return(
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
      <button onClick={handleClick} type="button" > Submit </button>
      </div>
    </form>
  )
}