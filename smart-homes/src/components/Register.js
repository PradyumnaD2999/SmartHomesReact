import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();

  const handleRegister = () => {
    try {
      axios.post('http://localhost:8081/register', {username, password, password, userType})
      .then(res => {
        alert('User registered successfully');
        navigate('/');
      })
      .catch(err => console.log(err));

      // const userData = JSON.parse(localStorage.getItem('userData')) || [];
      // const newUser = { username, password, userType };
      // localStorage.setItem('userData', JSON.stringify([...userData, newUser]));
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <div class='post' style={{margin: 'auto', width: '50%'}}>
		  <h2 class='title meta'><a style={{'font-size': '24px;'}}>Register</a></h2>
		    <div class='entry'>
          <table class="login" style={{width:'100%'}}>
            <tr>
              <td>
                <h3>Username</h3>
              </td>
              <td>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} class='input' required/>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Password</h3>
              </td>
              <td>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} class='input' required />
              </td>
            </tr>
            <tr>
              <td>
                <h3>User Type</h3>
              </td>
              <td>
                <select name='usertype' class='input' onChange={(e) => setUserType(e.target.value)}>
                  <option value='customer' selected>Customer</option>
                  <option value='retailer'>Salesman</option>
                  <option value='manager'>Store Manager</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button onClick={handleRegister}>Register</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong><Link to="/">Return To Login</Link></strong>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Register;
