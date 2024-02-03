import './style.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import Search from './Search';

function Home() {
  const { cartItems } = useCart();

  const handleLogout = () => {
      localStorage.removeItem('currentUser');
  };

  return (
    <div>
    <Search />
    
    <div id="header">
      <div id="menu" style={{float: "left"}}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/doorbells">Smart Doorbells</Link></li>
          <li><Link to="/doorlocks">Smart Doorlocks</Link></li>
          <li><Link to="/speakers">Smart Speakers</Link></li>
          <li><Link to="/lightings">Smart Lightings</Link></li>
          <li><Link to="/thermostats">Smart Thermostats</Link></li>
        </ul>
      </div>

      <div id="menu" style={{float: "right"}}>
        <ul>
          <li><Link to="/cartview">Cart ({cartItems.length})</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><a href="/" onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>

    <div id="sidebar">
        <ul>
          <li>
            <h2>Smart Doorbells</h2>
            <ul>
              <li><Link to="/doorbells/brand/google">Google</Link></li>
              <li><Link to="/doorbells/brand/eken">Eken</Link></li>
              <li><Link to="/doorbells/brand/reolink">Reolink</Link></li>
            </ul>
          </li>
          <li>
            <h2>Smart Doorlocks</h2>
            <ul>
              <li><Link to="/doorlocks/brand/philips">Philips</Link></li>
              <li><Link to="/doorlocks/brand/veise">Veise</Link></li>
              <li><Link to="/doorlocks/brand/wyze">Wyze</Link></li>
            </ul>
          </li>
          <li>
            <h2>Smart Speakers</h2>
            <ul>
              <li><Link to="/speakers/brand/echo">Echo</Link></li>
              <li><Link to="/speakers/brand/bose">Bose</Link></li>
              <li><Link to="/speakers/brand/ihome">iHome</Link></li>
            </ul>
          </li>
          <li>
            <h2>Smart Lightings</h2>
            <ul>
              <li><Link to="/lightings/brand/philips">Philips</Link></li>
              <li><Link to="/lightings/brand/govee">Govee</Link></li>
              <li><Link to="/lightings/brand/kasa">Kasa</Link></li>
            </ul>
          </li>
          <li>
            <h2>Smart Thermostats</h2>
            <ul>
              <li><Link to="/thermostats/brand/amazon">Amazon</Link></li>
              <li><Link to="/thermostats/brand/google">Google</Link></li>
              <li><Link to="/thermostats/brand/honeywell">Honeywell</Link></li>
            </ul>
          </li>
          <li>
            <h2>Accessories</h2>
            <ul>
              <li><Link to="">Trushome</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* <Content /> */}
    </div>
  );
}

export default Home;
