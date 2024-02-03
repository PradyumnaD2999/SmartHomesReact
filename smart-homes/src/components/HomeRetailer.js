import './style.css';
import { Link } from 'react-router-dom';

function HomeRetailer() {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
  };

  return (
    <div>
    <div id="header">
      <div id="menu" style={{float: "left"}}>
        <ul>
          <li><Link to="/homeretailer">Home</Link></li>
          <li><Link to="/createcustomer">Create Customer</Link></li>
          <li><Link to="/ordermanage/Add">Add Order</Link></li>
          <li><Link to="/ordermanage/Update">Update Order</Link></li>
          <li><Link to="/ordermanage/Delete">Delete Order</Link></li>
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

export default HomeRetailer;
