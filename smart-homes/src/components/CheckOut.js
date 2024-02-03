import { useState } from 'react';
import { useCart } from './CartContext';
import { useParams } from 'react-router-dom';
import Home from './Home';

function CheckOut() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');
  const [pickupLocation, setPickupLocation] = useState('');

  const {item} = useParams();
  const {price} = useParams();

  const { placeOrder } = useCart();

  const handleCheckout = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = currentUser.username;

    const orderDetails = {
      name,
      address,
      creditCard,
      deliveryOption,
      pickupLocation,
      username,
      item,
      price,
      zipcode,
      city,
      state,
    };

    placeOrder(orderDetails);
  };

  return (
    <div>
      <Home />
      <div>
      <div id='content'><div class='post'><h2 class='title meta'>
        <a style={{"font-size": "24px;"}}>Checkout</a></h2>
        <div class='entry'>
        <table class='gridtable'>
        <tr>
        <td>
          Name:
        </td>
        <td>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </td>
        </tr>
        <tr>
        <td>
          Address:
        </td>
        <td>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </td>
        </tr>
        <tr>
        <td>
          City:
        </td>
        <td>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        </td>
        </tr>
        <tr>
        <td>
          State:
        </td>
        <td>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
        </td>
        </tr>
        <tr>
        <td>
          Zipcode:
        </td>
        <td>
          <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
        </td>
        </tr>
        <tr>
        <td>
          Credit Card:
        </td>
        <td>
          <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
        </td>
        </tr>
        <tr>
        <td>
          Delivery Option:
        </td>
        <td>
        <select value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)}>
          <option value="homeDelivery">Home Delivery</option>
          <option value="inStorePickup">In-store Pickup</option>
        </select>
        {deliveryOption === 'inStorePickup' && (
          <>
            <td>
              Pickup Location:
              <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
                <option value='Bloomingdale 60108'>Bloomingdale 60108</option>
                <option value='Naperville 60564'>Naperville 60564</option>
                <option value='Oak Lawn 60453'>Oak Lawn 60453</option>
                <option value='Shaumburg 60173'>Shaumburg 60173</option>
                <option value='Westmont 60559'>Westmont 60559</option>
                <option value='Morton Grove 60053'>Morton Grove 60053</option>
                <option value='Naperville 60563'>Naperville 60563</option>
                <option value='North Riverside 60546'>North Riverside 60546</option>
                <option value='Norridge 60706'>Norridge 60706</option>
                <option value='Chicago 60616'>Chicago 60616</option>
              </select>
            </td>
          </>
        )}
        </td>
        </tr>
        <tr>
          <td>
            <button onClick={handleCheckout}>Place Order</button>
          </td>
        </tr>
        </table>
        </div>
        </div>
        </div>
      <br />
      <br />
    </div>
    </div>
  );
}

export default CheckOut;
