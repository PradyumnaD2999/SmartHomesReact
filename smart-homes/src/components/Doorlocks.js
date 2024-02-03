import {items} from '../items/index';
import Thumbnail from './Thumbnail';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import Home from './Home';

function Doorlocks() {
  const doorlocks = items.ProductCatalog.dlk;
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
              {doorlocks.map((doorlock) => {
                if(brand === undefined && type === undefined) {
                  return <Thumbnail 
                    key={doorlock.id}
                    id={doorlock.id}
                    name={doorlock.name}
                    price={doorlock.price}
                    description={doorlock.description}
                    image={doorlock.image}
                    manufacturer={doorlock.manufacturer}
                    condition={doorlock.condition}
                    discount={doorlock.discount}
                    imgDir="dlk"
                    addToCart={addToCart}
                  />
                } else if(brand !== undefined && doorlock.manufacturer.toLowerCase() === brand) {
                    return <Thumbnail 
                    key={doorlock.id}
                    id={doorlock.id}
                    name={doorlock.name}
                    price={doorlock.price}
                    description={doorlock.description}
                    image={doorlock.image}
                    manufacturer={doorlock.manufacturer}
                    condition={doorlock.condition}
                    discount={doorlock.discount}
                    imgDir="dlk"
                    addToCart={addToCart}
                  />
                } else if(type !== undefined && doorlock.name.toLowerCase() === type.toLowerCase()) {
                    return <Thumbnail 
                    key={doorlock.id}
                    id={doorlock.id}
                    name={doorlock.name}
                    price={doorlock.price}
                    description={doorlock.description}
                    image={doorlock.image}
                    manufacturer={doorlock.manufacturer}
                    condition={doorlock.condition}
                    discount={doorlock.discount}
                    imgDir="dlk"
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

export default Doorlocks;
