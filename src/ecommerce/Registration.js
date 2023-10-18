import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState(null);
    
  const handleRegistration = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      setRegistrationError("user successfully Registered")
      
    } catch (error) {
      setRegistrationError(error.message); // Convert the error object to a string
    }
  
  };

  return (
    <div className='Register'>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='abcd1@gmail.com'
      />
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegistration}>Register</button>
      {registrationError && <p className='error-message'>{registrationError}</p>}
    </div>
  );
}

export default RegistrationForm;
