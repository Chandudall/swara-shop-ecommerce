import './App.css';
import { useState } from 'react';
import DashboardForm from './ecommerce/dashboard';
import RegistraionForm from './ecommerce/Registration';
import HandleLoginform from './ecommerce/Login';
import Handle from './ecommerce/home';
import { BrowserRouter,Router,Route,Routes} from 'react-router-dom';

import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// import RegistraionForm from './ecommerce/Registration';
// import HandleLoginform from './ecommerce/Login';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnjIo1_TzhXwZ6NKf-7sa90xytA9FFgkg",
  authDomain: "ecommarceapp-45604.firebaseapp.com",
  projectId: "ecommarceapp-45604",
  storageBucket: "ecommarceapp-45604.appspot.com",
  messagingSenderId: "43300287253",
  appId: "1:43300287253:web:061b1c270ab6593c82af1c",
  measurementId: "G-728MPQQS3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [isRegistered,setIsRegistered]=useState(true);
  
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Hello welcome to ecommerce</h1>
      {isRegistered ? 
       (<RegistraionForm />):
      (<HandleLoginform />)
      } 
      <button onClick={()=>setIsRegistered(!isRegistered)}>
        {isRegistered ? 'switch to login':'switch to registration'}
      </button> 
        {/* <DashboardForm /> */}
      
        
      
      <Routes>
          <Route path="/" element={<HandleLoginform/>} />
          <Route path="/" element={<Handle/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
