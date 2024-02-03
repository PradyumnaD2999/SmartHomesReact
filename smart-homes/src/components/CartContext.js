import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderCounter, setOrderCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCounter = localStorage.getItem('orderCounter');
    if (storedCounter) {
      setOrderCounter(parseInt(storedCounter, 10));
    }
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, id: cartItems.length + 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const saveOrderCounterToLocalStorage = (counter) => {
    localStorage.setItem('orderCounter', counter.toString());
  };

  const placeOrder = (orderDetails) => {
    const orderId = orderCounter + 1;
    const expectedDeliveryDate = calculateExpectedDeliveryDate();
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const currentDate = date.toLocaleDateString('en-US', options);

    axios.post('http://localhost:8081/orders', {orderDetails, orderId, expectedDeliveryDate, currentDate})
      .then(res => {
        if(res.data === "Error") {
          alert('Could not insert order in database.');
          console.log(res.data);
        } else {
          setOrders([...orders, { ...orderDetails, orderId, expectedDeliveryDate, currentDate }]);
          setCartItems([]);
          setOrderCounter(orderId);
          saveOrderCounterToLocalStorage(orderId);

          const orderData = JSON.parse(localStorage.getItem('orders')) || [];
          localStorage.setItem('orders', JSON.stringify([...orderData, { ...orderDetails, orderId, expectedDeliveryDate }]));
          
          navigate(`/ordersuccess/${orderId}`, { state: { expectedDeliveryDate } });
        }
      })
      .catch(err => {
        alert('Could not insert order in database.');
        console.log(err);
      });
  };

  const removeOrder = (orderId) => {
    axios.post('http://localhost:8081/deleteorders', {orderId})
      .then(res => {
        if(res.data === "Error") {
          alert('Could not delete order from database.');
          console.log(res.data);
        } else {
          var updatedOrders = [...orders];
          var index = updatedOrders.findIndex((orders) => orders.orderId === orderId)
          // console.log("local order index: ", index);

          updatedOrders.splice(index, 1);
          setOrders(updatedOrders);

          var orderData = JSON.parse(localStorage.getItem('orders')) || [];
          // console.log('Current Order Data: ', orderData)

          index = orderData.findIndex((orders) => orders.orderId === orderId)
          // console.log("order index: ", index);

          orderData.splice(index, 1)
          localStorage.setItem('orders', JSON.stringify(orderData));

          // const orderDeets = JSON.parse(localStorage.getItem('orders')) || [];
          // console.log('Order Data: ', orderDeets)
        }
      })
      .catch(err => {
        alert('Could not delete order from database.');
        console.log(err);
      });
  };

  const calculateExpectedDeliveryDate = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 14));
    return deliveryDate.toDateString();
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    orders,
    placeOrder,
    removeOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
