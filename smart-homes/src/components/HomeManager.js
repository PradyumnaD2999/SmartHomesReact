import './style.css';
import { Link } from 'react-router-dom';

function HomeManager() {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
  };

  return (
    <div>
    <div id="header">
      <div id="menu" style={{float: "left"}}>
        <ul>
          <li><Link to="/homemanager">Home</Link></li>
          <li><Link to="/addproduct">Add Product</Link></li>
          <li><Link to="/updateproduct">Update Product</Link></li>
          <li><Link to="/deleteproduct">Delete Product</Link></li>
        </ul>
      </div>

      <div id="menu" style={{float: "right"}}>
        <ul>
          <li><Link to="/account">Account</Link></li>
          <li><a href="/" onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default HomeManager;
