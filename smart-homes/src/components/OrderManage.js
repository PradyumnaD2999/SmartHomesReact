import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeRetailer from './HomeRetailer';
import { useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';

function OrderManage() {
  const [orderId, setOrderid] = useState('');
  const [item, setOrdername] = useState('');
  const [price, setPrice] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');
  const [pickupLocation, setPickupLocation] = useState('');

  const { removeOrder } = useCart();

  const navigate = useNavigate();
  const {managetype} = useParams();
  // console.log("Manage type:", managetype);

  const handleManage = () => {
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

    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const currentDate = date.toLocaleDateString('en-US', options);

    const dt = new Date();
    const expectedDeliveryDate = new Date(dt.setDate(dt.getDate() + 14)).toDateString();

    if(managetype === 'Add') {
      axios.post('http://localhost:8081/orders', {orderDetails, orderId, expectedDeliveryDate, currentDate})
      .then(res => {
        if(res.data === "Error") {
          alert('Could not insert order in database.');
          console.log(res.data);
        } else {
          alert("Order Added Successfully");
          navigate('/homeretailer');
        }
      })
      .catch(err => {
        alert('Could not insert order in database.');
        console.log(err);
      });
    } else if(managetype === 'Update') {
      axios.post('http://localhost:8081/updateorders', {orderDetails, orderId})
      .then(res => {
        if(res.data === "Error") {
          alert('Could not update order in database.');
          console.log(res.data);
        } else {
          alert("Order Updated Successfully");
          navigate('/homeretailer');
        }
      })
      .catch(err => {
        alert('Could not update order in database.');
        console.log(err);
      });
    } else {
      removeOrder(orderId);
      alert("Order Deleted Successfully");
    }
  };

  return (
    <div>
      <HomeRetailer />

      <div id="content">
      <div class="post">
      <div class="entry">
      <div class='row'>
        <h2 style={{'font-size': '24px;'}}>{managetype} Order</h2>
        <br/><br/>
          {managetype === 'Add' ? (
            <table>
            <tr>
              <td>Category:</td>
              <select class='form-control' name='pcategory'>
              <option value='dbls' selected>Smart Doorbell</option>
              <option value='dlks'>Smart Doorlock</option>
              <option value='spkrs'>Smart Speaker</option>
              <option value='lghts'>Smart Lighting</option>
              <option value='trmsts'>Smart Thermostat</option>
              </select>
            </tr><br/>
            <tr>
              <td>Order ID:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Order ID' value={orderId} onChange={(e) => setOrderid(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Order Name:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Name For Order' value={item} onChange={(e) => setOrdername(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Order Price:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Product Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Username:</td>
              <input style={{float: "right"}} type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Name:</td>
              <input style={{float: "right"}} type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Address:</td>
              <input style={{float: "right"}} type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>City:</td>
              <input style={{float: "right"}} type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>State:</td>
              <input style={{float: "right"}} type='text' value={state} onChange={(e) => setState(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Zipcode:</td>
              <input style={{float: "right"}} type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Credit Card:</td>
              <input style={{float: "right"}} type='text' value={creditCard} onChange={(e) => setCreditCard(e.target.value)}/>
            </tr><br/>
            </table>
          ) : managetype === 'Update' ? (
            <table>
            <tr>
              <td>Order ID:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Order ID' value={orderId} onChange={(e) => setOrderid(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Order Name:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Name For Order' value={item} onChange={(e) => setOrdername(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Order Price:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Product Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Username:</td>
              <input style={{float: "right"}} type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Name:</td>
              <input style={{float: "right"}} type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Address:</td>
              <input style={{float: "right"}} type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>City:</td>
              <input style={{float: "right"}} type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>State:</td>
              <input style={{float: "right"}} type='text' value={state} onChange={(e) => setState(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Zipcode:</td>
              <input style={{float: "right"}} type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            </tr><br/>
            <tr>
              <td>Credit Card:</td>
              <input style={{float: "right"}} type='text' value={creditCard} onChange={(e) => setCreditCard(e.target.value)}/>
            </tr><br/>
            </table>
          ) : (
            <table>
            <tr>
              <td>Order ID:</td>
              <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Order ID' value={orderId} onChange={(e) => setOrderid(e.target.value)}/>
            </tr><br/>
            </table>
          )}
          
          <button onClick={handleManage} class='button'>{managetype} Order</button>
          </div>
          </div>
          </div>
          </div>

      
        {/* <tr>
          <td>Category:</td>
          <select class='form-control' name='pcategory'>
          <option value='dbls' selected>Smart Doorbell</option>
          <option value='dlks'>Smart Doorlock</option>
          <option value='spkrs'>Smart Speaker</option>
          <option value='lghts'>Smart Lighting</option>
          <option value='trmsts'>Smart Thermostat</option>
          </select>
        </tr><br/>
		    <tr>
          <td>Name:</td>
          <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Product Name' />
        </tr><br/>
		    <tr>
          <td>Description:</td>
          <textarea style={{float: "right"}} class='form-control' placeholder='Enter Product Description' name='pdescription' />
        </tr><br/>
		    <tr>
          <td>Price:</td>
          <input style={{float: "right"}} class='form-control' type='text' placeholder='Enter Product Price' name='pprice' />
        </tr><br/>
		    <tr>
          <td>Image Name:</td>
          <input style={{float: "right"}} class='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage' />
        </tr><br/>
		    <tr>
          <td>Condition:</td>
          <input style={{float: "right"}} class='form-control' type='text' placeholder='Enter Product Condition' name='pcondition' />
        </tr><br/>
		    <tr>
          <td>Company:</td>
          <input style={{float: "right"}} class='form-control' type='text' placeholder='Enter Product Company' name='pcompany' />
        </tr><br/>
        </table><br/><br/>
		    <button onClick={handleAdd} class='button'>Add</button>
      </div>
		  
      </div>
      </div>
      </div> */}
    </div>
  );
}

export default OrderManage;
