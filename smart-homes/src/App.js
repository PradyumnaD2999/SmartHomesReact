import './components/style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import Doorbells from './components/Doorbells';
import Doorlocks from './components/Doorlocks';
import Speakers from './components/Speakers';
import Lightings from './components/Lightings';
import Thermostats from './components/Thermostats';
import HomeRetailer from './components/HomeRetailer';
import HomeManager from './components/HomeManager';
import Content from './components/Content';
import ViewProduct from './components/ViewProduct';
import {CartProvider} from './components/CartContext';
import CartView from './components/CartView';
import CheckOut from './components/CheckOut';
import Orders from './components/Orders';
import OrderSuccess from './components/OrderSuccess';
import Login from './components/Login'
import Register from './components/Register'
import Head from './components/Head'
import Account from './components/Account'
import CreateCustomer from './components/CreateCustomer'
import ProductAdd from './components/ProductAdd'
import ProductUpdate from './components/ProductUpdate'
import ProductDelete from './components/ProductDelete'
import OrderManage from './components/OrderManage'

function App() {
  return (
    <div>
      <Head />

      <CartProvider>
        <Routes>
          <Route path="/deleteproduct" element={<ProductDelete />} />
          <Route path="/updateproduct" element={<ProductUpdate />} />
          <Route path="/addproduct" element={<ProductAdd />} />
          <Route path="/ordermanage/:managetype" element={<OrderManage />} />
          <Route path="/createcustomer" element={<CreateCustomer />} />
          <Route path="/ordersuccess/:orderId" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout/:item/:price" element={<CheckOut />} />
          <Route path="/cartview" element={<CartView />} />
          <Route path="/viewproduct/:itemId/:type" element={<ViewProduct />} />
          <Route path="/doorbells" element={<Doorbells />}>
            <Route path="brand/:brand" element={<Doorbells />} />
            <Route path="type/:type" element={<Doorbells />} />
          </Route>
          <Route path="/doorlocks" element={<Doorlocks />}>
            <Route path="brand/:brand" element={<Doorlocks />} />
            <Route path="type/:type" element={<Doorlocks />} />
          </Route>
          <Route path="/speakers" element={<Speakers />}>
            <Route path="brand/:brand" element={<Speakers />} />
            <Route path="type/:type" element={<Speakers />} />
          </Route>
          <Route path="/lightings" element={<Lightings />}>
            <Route path="brand/:brand" element={<Lightings />} />
            <Route path="type/:type" element={<Lightings />} />
          </Route>
          <Route path="/thermostats" element={<Thermostats />}>
            <Route path="brand/:brand" element={<Thermostats />} />
            <Route path="type/:type" element={<Lightings />} />
          </Route>
          <Route path="/account" element={<Account />} />
          <Route path="/homemanager" element={<HomeManager />} />
          <Route path="/homeretailer" element={<HomeRetailer />} />
          <Route path="/home" element={<Content />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
