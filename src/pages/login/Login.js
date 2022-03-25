import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireConfig";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <div className='loginForm'>
        <label>Email</label>
        <input
          type='email'
          className='loginInput'
          placeholder='Enter your email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='Enter your password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='loginButton' onClick={login}>
          Login
        </button>
        <button className='loginRegisterButton'>
          <Link className='link' to='/register'>
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
