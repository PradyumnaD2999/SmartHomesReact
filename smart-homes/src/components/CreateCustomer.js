import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import HomeRetailer from './HomeRetailer';
import axios from 'axios';

function CreateCustomer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();

  const handleRegister = () => {
    try {
      axios.post('http://localhost:8081/register', {username, password, password, userType})
      .then(res => {
        alert('User registered successfully');
        navigate('/homeretailer');
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
        <HomeRetailer />
      <div class='post' style={{margin: 'auto', width: '50%'}}>
		  <h2 class='title meta'><a style={{'font-size': '24px;'}}>Create New Customer</a></h2>
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
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button onClick={handleRegister}>Create Customer</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;
