import './style.css';
import { useParams } from 'react-router-dom';
import {items} from '../items/index';
import Thumbnail from './Thumbnail';
import { useCart } from './CartContext';
import Home from './Home';

function Doorbells() {
  const doorbells = items.ProductCatalog.dbl;
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
                {doorbells.map((doorbell) => {
                  if(brand === undefined && type === undefined) {
                    return <Thumbnail 
                      key={doorbell.id}
                      id={doorbell.id}
                      name={doorbell.name}
                      price={doorbell.price}
                      description={doorbell.description}
                      image={doorbell.image}
                      manufacturer={doorbell.manufacturer}
                      condition={doorbell.condition}
                      discount={doorbell.discount}
                      imgDir="dbl"
                      addToCart={addToCart}
                    />
                  } else if(brand !== undefined && doorbell.manufacturer.toLowerCase() === brand) {
                      return <Thumbnail 
                        key={doorbell.id}
                        id={doorbell.id}
                        name={doorbell.name}
                        price={doorbell.price}
                        description={doorbell.description}
                        image={doorbell.image}
                        manufacturer={doorbell.manufacturer}
                        condition={doorbell.condition}
                        discount={doorbell.discount}
                        imgDir="dbl"
                        addToCart={addToCart}
                      />
                  } else if(type !== undefined && doorbell.name.toLowerCase() === type.toLowerCase()) {
                        return <Thumbnail 
                        key={doorbell.id}
                        id={doorbell.id}
                        name={doorbell.name}
                        price={doorbell.price}
                        description={doorbell.description}
                        image={doorbell.image}
                        manufacturer={doorbell.manufacturer}
                        condition={doorbell.condition}
                        discount={doorbell.discount}
                        imgDir="dbl"
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

export default Doorbells;
