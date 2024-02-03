import {items} from '../items/index';
import Thumbnail from './Thumbnail';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import Home from './Home';

function Lightings() {
  const lightings = items.ProductCatalog.lght;
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
              {lightings.map((lighting) => {
                if(brand === undefined && type === undefined) {
                  return <Thumbnail 
                    key={lighting.id}
                    id={lighting.id}
                    name={lighting.name}
                    price={lighting.price}
                    description={lighting.description}
                    image={lighting.image}
                    imgDir="lght"
                    addToCart={addToCart}
                  />
                } else if(brand !== undefined && lighting.manufacturer.toLowerCase() === brand) {
                    return <Thumbnail 
                    key={lighting.id}
                    id={lighting.id}
                    name={lighting.name}
                    price={lighting.price}
                    description={lighting.description}
                    image={lighting.image}
                    imgDir="lght"
                    addToCart={addToCart}
                    />
                } else if(type !== undefined && lighting.name.toLowerCase() === type.toLowerCase()) {
                    return <Thumbnail 
                    key={lighting.id}
                    id={lighting.id}
                    name={lighting.name}
                    price={lighting.price}
                    description={lighting.description}
                    image={lighting.image}
                    imgDir="lght"
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

export default Lightings;
