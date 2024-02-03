import { useNavigate } from 'react-router-dom';
import HomeManager from './HomeManager';
import { useState } from 'react';
import axios from 'axios';

function ProductDelete() {
  const [id, setId] = useState('');

  const navigate = useNavigate();

  const handleAdd = () => {
    axios.post('http://localhost:8081/deleteproduct', {id})
      .then(res => {
        if(res.data === "Error") {
          alert('Could not delete product from database.');
          console.log(res.data);
        } else {
          alert("Product Deleted Successfully");
          navigate('/homemanager');
        }
      })
      .catch(err => {
        alert('Could not delete product from database.');
        console.log(err);
    });
  };

  return (
    <div>
      <HomeManager />

      <div id="content">
      <div class="post">
      <div class="entry">
      <div class='row'>
        <h2><a style={{'font-size': '24px;'}}>Delete Product</a></h2>
        <br/><br/>
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
          <td>Product ID:</td>
          <input style={{float: "right"}} type='text' class='form-control' name='pid' placeholder='Enter Product ID' value={id} onChange={(e) => setId(e.target.value)}/>
        </tr><br/>
        </table><br/><br/>
		    <button onClick={handleAdd} class='button'>Delete</button>
      </div>
		  
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProductDelete;
