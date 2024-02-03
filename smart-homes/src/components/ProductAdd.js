import { useNavigate } from 'react-router-dom';
import HomeManager from './HomeManager';
import { useState } from 'react';
import axios from 'axios';

function ProductAdd() {
  const [producttype, setProducttype] = useState('');
  const [productname, setProductname] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [condition, setCondition] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [id, setId] = useState('');
  const discount = 10;
  const sale = 1;
  const quantity = 1;
  const rebate = 0;

  const navigate = useNavigate();

  const handleAdd = () => {
    const productDetails = {
      productname,
      producttype,
      price,
      description,
      image,
      condition,
      manufacturer,
      id,
      discount,
      sale,
      quantity,
      rebate,
    };

    axios.post('http://localhost:8081/addproduct', {productDetails})
      .then(res => {
        if(res.data === "Error") {
          alert('Could not insert product in database.');
          console.log(res.data);
        } else {
          alert("Product Added Successfully");
          navigate('/homemanager');
        }
      })
      .catch(err => {
        alert('Could not insert product in database.');
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
        <h2><a style={{'font-size': '24px;'}}>Add Product</a></h2>
        <br/><br/>
        <table>
        <tr>
          <td>Category:</td>
          <select class='form-control' name='pcategory' value={producttype} onChange={(e) => setProducttype(e.target.value)}>
          <option value='dbl' selected>Smart Doorbell</option>
          <option value='dlk'>Smart Doorlock</option>
          <option value='spkr'>Smart Speaker</option>
          <option value='lght'>Smart Lighting</option>
          <option value='trmst'>Smart Thermostat</option>
          </select>
        </tr><br/>
        <tr>
          <td>Product ID:</td>
          <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Product ID' value={id} onChange={(e) => setId(e.target.value)}/>
        </tr><br/>
		    <tr>
          <td>Name:</td>
          <input style={{float: "right"}} type='text' class='form-control' name='pname' placeholder='Enter Product Name' value={productname} onChange={(e) => setProductname(e.target.value)}/>
        </tr><br/>
		    <tr>
          <td>Description:</td>
          <textarea style={{float: "right"}} class='form-control' placeholder='Enter Product Description' name='pdescription' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </tr><br/>
		    <tr>
          <td>Price:</td>
          <input style={{float: "right"}} class='form-control' type='text' placeholder='Enter Product Price' name='pprice' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </tr><br/>
		    <tr>
          <td>Image Name:</td>
          <input style={{float: "right"}} class='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage' value={image} onChange={(e) => setImage(e.target.value)}/>
        </tr><br/>
		    <tr>
          <td>Condition:</td>
          <input style={{float: "right"}} class='form-control' type='text' placeholder='Enter Product Condition' name='pcondition' value={condition} onChange={(e) => setCondition(e.target.value)}/>
        </tr><br/>
		    <tr>
          <td>Company:</td>
          <input style={{float: "right"}} class='form-control' type='text' placeholder='Enter Product Company' name='pcompany' value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}/>
        </tr><br/>
        </table><br/><br/>
		    <button onClick={handleAdd} class='button'>Add</button>
      </div>
		  
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProductAdd;
