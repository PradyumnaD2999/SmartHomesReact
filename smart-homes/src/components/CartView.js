import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import Home from './Home';

function CartView() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <Home />
      <div id='content'><div class='post'><h2 class='title meta'>
        <a style={{"font-size": "24px;"}}>Cart ({cartItems.length})</a></h2>
        <div class='entry'>
        <table class='gridtable'>
        {cartItems.length === 0 ? (
          <h2 class="null" style={{color:"red"}}>Your Cart is empty</h2>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div>
              <td key={index}>
                {index+1}
              </td>
              <td key={index}>
                {item.name} - ${item.price}
              </td>
              <td>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </td>
              </div>
            ))}
            
            <tr><th></th><th>Total</th><th>
              ${calculateTotalPrice()}
            </th>
              <td>
                <Link to={`/checkout/${cartItems[0].name}/${calculateTotalPrice()}`}>
                  <button class="button">Checkout</button>
                </Link>
              </td>
            </tr>
          </div>
        )}
        </table>
        </div></div></div>
    </div>
  );
}

export default CartView;
