import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Home from './Home';

function OrderSuccess() {
  const { orderId } = useParams();
  const location = useLocation();
  const { expectedDeliveryDate } = location.state || {};

  return (
    <div>
      <Home />
    <div id='content'><div class='post'><h2 class='title meta'>
        <a style={{"font-size": "24px;"}}>Order Placed Successfully</a></h2>
        <div class='entry'>
        <table class='gridtable'>
        <tr>
        <td>
          Order ID:
        </td>
        <td>
          {orderId}
        </td>
        </tr>
        <tr>
        <td>
          Expected Delivery Date:
        </td>
        <td>
          {expectedDeliveryDate}
        </td>
        </tr>
        </table>
      </div></div></div> 
    <div>
    </div>
    </div>
  );
}

export default OrderSuccess;
