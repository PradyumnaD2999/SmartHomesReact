import './style.css';
import { Link } from 'react-router-dom';
import Home from './Home';

function Content() {
  return (
    <div>
    <Home />

    <div id="content">
      <div class="post">
        <h2 class="title">
          Welcome to Smart Homes
        </h2>
        <div class="entry">
          <img src={require("../images/site/image.jpg")} alt=""/>
          <br/> <br/>
          <h3>The world trusts us to deliver SMART service for SMART devices</h3>
          <br/> <br/>
          <h3>We beat our competitors in all aspects. Price-Match Guaranteed</h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Content;
