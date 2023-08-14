import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Authenticate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";



export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken}/>
    </>
  );
}