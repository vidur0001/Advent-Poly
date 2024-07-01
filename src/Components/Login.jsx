import { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="login-form-container">
      <div className="form-toggle">
        <button className={isRegistered ? 'active' : ''} onClick={() => setIsRegistered(true)}>Login</button>
        <button className={!isRegistered ? 'active' : ''} onClick={() => setIsRegistered(false)}>Register</button>
      </div>
      {isRegistered ? (
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="input-container">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="submit-button">Login</button>
            
          </form>
        </div>
      ) : (
        <div className="register-form">
          <h2>Register</h2>
          <form>
            <div className="input-container">
              <input type="name" placeholder="Name" required />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="input-container">
              <input type="password" placeholder='Confirm Password' required/>
            </div>
            <div className="input-container">
              <input type="tel" placeholder='Mobile no.' required />
            </div>
            <button type="submit" className="submit-button">Register</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default LoginForm;
