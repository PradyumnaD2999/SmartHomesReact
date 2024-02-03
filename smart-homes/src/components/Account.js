import React, { useState, useEffect } from 'react';
import Home from './Home';
import HomeRetailer from './HomeRetailer';
import HomeManager from './HomeManager';

function Account() {
  const [userData, setUserData] = useState(null);
  var homeType = <Home />

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log('Current User: ', currentUser)
    setUserData(currentUser);
  }, []);

  if(userData && userData.userType === 'retailer') {
    homeType = <HomeRetailer />
  } else if( userData && userData.userType === 'manager') {
    homeType = <HomeManager />
  }

  return (
    <div>
      {homeType}

      <div id='content'><div class='post'><h2 class='title meta'>
        <a style={{"font-size": "24px;"}}>Account Details</a></h2>
        <div class='entry'>
        <table class='gridtable'>
          {userData ? (
            <div>
            <tr>
              <th>
                Username:
              </th>
              <td>
                {userData.username}
              </td>
            </tr>
            <tr>
              <th>
                User Type:
              </th>
              <td>
                {userData.userType}
              </td>
            </tr>
            </div>
          ) : (
            <p>No user data found. Please log in.</p>
          )}
        </table>
      </div></div></div>
      
    </div>
  );
}

export default Account;
