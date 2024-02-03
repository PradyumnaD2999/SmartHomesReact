import {items} from '../items/index';
import Thumbnail from './Thumbnail';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import Home from './Home';

function Thermostats() {
  const thermostats = items.ProductCatalog.trmst;
  const {brand} = useParams();
  const {type} = useParams();

  const { cartItems, addToCart } = useCart();

  return (
    <div>
      <Home />
    <div id="content">
      <div class="post">
      <div class="entry">
          <table id="bestseller">
            <tr>
              {thermostats.map((thermostat) => {
                if(brand === undefined && type === undefined) {
                  return <Thumbnail 
                    key={thermostat.id}
                    id={thermostat.id}
                    name={thermostat.name}
                    price={thermostat.price}
                    description={thermostat.description}
                    image={thermostat.image}
                    imgDir="trmst"
                    addToCart={addToCart}
                  />
                } else if(brand !== undefined && thermostat.manufacturer.toLowerCase() === brand) {
                    return <Thumbnail 
                    key={thermostat.id}
                    id={thermostat.id}
                    name={thermostat.name}
                    price={thermostat.price}
                    description={thermostat.description}
                    image={thermostat.image}
                    imgDir="trmst"
                    addToCart={addToCart}
                  />
                } else if(type !== undefined && thermostat.name.toLowerCase() === type.toLowerCase()) {
                    return <Thumbnail 
                      key={thermostat.id}
                      id={thermostat.id}
                      name={thermostat.name}
                      price={thermostat.price}
                      description={thermostat.description}
                      image={thermostat.image}
                      imgDir="trmst"
                      addToCart={addToCart}
                    />
                }
                return null;
              })}
            </tr>
          </table>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Thermostats;
