import './style.css';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <div id="logo">
    <table style={{float: "left"}}>
        <tr>
        <td style={{valign: "top"}}><img src={require("../images/site/head.jpeg")} alt=""
            style={{height: "80px"}} /></td>
        <td><h1>
            <a>Smart Homes</a>
            </h1></td>
        </tr>
        <tr>
        <td></td>
        <td><p>
            <em>World's Best Smart Devices Collection</em>
            </p></td>
        </tr>
    </table>
    </div>
  );
}

export default Head;
