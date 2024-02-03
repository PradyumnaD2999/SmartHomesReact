import './style.css';
import {items} from '../items/index';
import {useParams} from 'react-router-dom';
import Home from './Home';

function ViewProduct() {
  const {itemId} = useParams();
  const {type} = useParams();
  const index = (itemId - 1) % 5;
  const item = items.ProductCatalog[`${type}`][Number(index)];

  return (
    <div>
    <Home />
    <div id='content'>
      <div class='post'>
        <h3 class='title meta' style={{"font-size": "24px"}}>
          {item.name}
        </h3>
				<div class='productContainer'>
          <img src = {require(`../images/${type}/${item.image}`)} alt='' />
              <br/><h4><strong style={{"font-size": "15px"}}> Price - ${item.price}</strong></h4>
              <h5 style={{"font-size": "15px"}}>{item.description}</h5>
              <h5 style={{"font-size": "15px"}}>Manufacturer - {item.manufacturer}</h5>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ViewProduct;
