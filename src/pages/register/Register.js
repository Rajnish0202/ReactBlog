import "./register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../fireConfig";

export default function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setUser("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <div className='registerForm'>
        <label>Usename</label>
        <input
          type='text'
          className='registerInput'
          placeholder='Enter your username...'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Email</label>
        <input
          type='email'
          className='registerInput'
          placeholder='Enter your email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='registerInput'
          placeholder='Enter your password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='registerButton' onClick={register}>
          Register
        </button>
      </div>
      <button className='registerLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
    </div>
  );
}
