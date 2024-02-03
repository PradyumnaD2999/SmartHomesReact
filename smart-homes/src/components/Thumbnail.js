import { Link, useNavigate } from "react-router-dom";
import './style.css';

function Thumbnail({ id, name, price, description, image, manufacturer, condition, discount, imgDir, addToCart }) {
  const viewurl=`/viewproduct/${id}/${imgDir}`;
  
  const handleAddToCart = () => {
    const productToAdd = {
      id, name, price, description, image, manufacturer, condition, discount, imgDir
    };

    addToCart(productToAdd);
  };
  
  return (
    <td>
      <div id="shop_item">
        <h3>{name}</h3>
        <strong>${price}</strong>
        <ul>
          <li id="item"><img src={require(`../images/${imgDir}/${image}`)} alt="" /></li>
        </ul>
        <button class="button" onClick={handleAddToCart}>Buy Now</button>
        <Link to={viewurl}><button class="button">View Product</button></Link>
        <Link to=""><button class="button">Write Review</button></Link>
        <Link to=""><button class="button">View Review</button></Link>
      </div>
      </td>
  );
}

export default Thumbnail;
