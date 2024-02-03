import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      axios.post('http://localhost:8081/login', {username, password, userType})
      .then(res => {
        if(res.data === "Error") {
          alert('Login failed. Please check your credentials.');
          console.log(res.data);
        } else {
          alert('Login successful');
          localStorage.setItem('currentUser', JSON.stringify({username, password, userType}));

          if(userType === 'customer')
            navigate('/home');
          else if(userType === 'retailer')
            navigate('/homeretailer');
          else
            navigate('/homemanager');
        }
      })
      .catch(err => {
        alert('Login failed. Please check your credentials.');
        console.log(err);
      });
      
      // var userData = JSON.parse(localStorage.getItem('userData')) || [];
      // // console.log('Users: ', userData)
      
      // const user = userData.find(
      //   (u) => u.username === username && u.password === password && u.userType === userType
      // );

      // if (user) {
      //   alert('Login successful');
      //   localStorage.setItem('currentUser', JSON.stringify(user));
        
      //   if(user.userType === 'customer')
      //     navigate('/home');
      //   else if(user.userType === 'retailer')
      //     navigate('/homeretailer');
      //   else
      //     navigate('/homemanager');
      // } else {
      //   alert('Login failed. Please check your credentials.');
      // }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <div class='post' style={{margin: 'auto', width: '50%'}}>
		  <h2 class='title meta'><a style={{'font-size': '24px;'}}>Login</a></h2>
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
                <button onClick={handleLogin}>Login</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong><Link to="/register">New User? Register here!</Link></strong>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Login;
