import {items} from '../items/index';
import Thumbnail from './Thumbnail';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import Home from './Home';

function Speakers() {
  const speakers = items.ProductCatalog.spkr;
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
              {speakers.map((speaker) => {
                if(brand === undefined && type === undefined) {
                  return <Thumbnail 
                    key={speaker.id}
                    id={speaker.id}
                    name={speaker.name}
                    price={speaker.price}
                    description={speaker.description}
                    image={speaker.image}
                    imgDir="spkr"
                    addToCart={addToCart}
                  />
                } else if(brand !== undefined && speaker.manufacturer.toLowerCase() === brand) {
                    return <Thumbnail 
                    key={speaker.id}
                    id={speaker.id}
                    name={speaker.name}
                    price={speaker.price}
                    description={speaker.description}
                    image={speaker.image}
                    imgDir="spkr"
                    addToCart={addToCart}
                  />
                } else if(type !== undefined && speaker.name.toLowerCase() === type.toLowerCase()) {
                    return <Thumbnail 
                    key={speaker.id}
                    id={speaker.id}
                    name={speaker.name}
                    price={speaker.price}
                    description={speaker.description}
                    image={speaker.image}
                    imgDir="spkr"
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

export default Speakers;
