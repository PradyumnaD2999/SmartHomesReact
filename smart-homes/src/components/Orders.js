import React from 'react';
import { useCart } from './CartContext';
import Home from './Home';

function Orders() {
  const { removeOrder } = useCart();

  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
  // console.log('Current user:', currentUser);

  const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
  // console.log('All orders:', allOrders);

  const handleDeleteOrder = (orderId) => {
    removeOrder(orderId);
  };

  return (
    <div>
      <Home />

      <div id='content'><div class='post'><h2 class='title meta'>
        <a style={{"font-size": "24px;"}}>Orders</a></h2>
        <div class='entry'>
        <table class='gridtable'>
          {allOrders.length === 0 ? (
            <h2 class="null" style={{color:"red"}}>No orders placed yet</h2>
          ) : (
            <div>
              <tr>
              <th>
                Order ID
              </th>
              <th>
                Order Name
              </th>
              <th>
                Total Price
              </th>
              <th>
                Username
              </th>
              <th>
                Name
              </th>
              <th>
                Delivery Date
              </th>
              <th>
                Delivery Type
              </th>
              <th>
                Pickup Address
              </th>
              <th>
                Customer Address
              </th>
              <th></th>
              </tr>

              {allOrders.map((order, index) => (
                currentUser.username === order.username ? (
                  <tr>
                  <td key={index}>
                    {order.orderId}
                  </td>
                  <td>
                    {order.item}
                  </td>
                  <td>
                    ${order.price}
                  </td>
                  <td>
                    {order.username}
                  </td>
                  <td>
                    {order.name}
                  </td>
                  <td>
                    {order.expectedDeliveryDate}
                  </td>
                  <td>
                    {order.deliveryOption}
                  </td>
                  {order.deliveryOption === 'inStorePickup' ? (
                    <td>
                       {order.pickupLocation}
                    </td>
                  ) : <td></td>}
                  <td>
                    {order.address}
                  </td>
                  <td>
                  <button onClick={() => handleDeleteOrder(order.orderId)}>Cancel Order</button>
                  </td>                    
                  </tr>
                ) : (
                  <p></p>
                )
              ))}
            </div>
          )}
        </table>
        </div></div></div>
    </div>
  );
}

export default Orders;
