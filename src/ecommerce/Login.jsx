import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



function HandleLoginform() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginForm, setLoginForm] = useState(null);


  const History=useNavigate();

  const Handlelogin = (e) => {

   
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoginForm(`welcome , ${user.email}`);
         History('./Handle');
        
      })
      .catch((error) => {
        setLoginForm(`error: ${error.message}`);
      });
  }

  return (
    <div className='login'>
      <input
        type="email"
        value={Email}
        placeholder='abcd@gmail.com'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        value={password}
        placeholder='enter password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Handlelogin}>Login</button>
      <p>{loginForm}</p>
    </div>
  );
}

export default HandleLoginform;
