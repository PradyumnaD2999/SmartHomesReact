const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "smarthomesdb",
})

app.post('/register', (req, res) => {
    const sql = "insert into users values (?,?,?,?)";
    
    db.query(sql, [req.body.username, req.body.password, req.body.password, req.body.userType], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "select * from users where username=? and password=? and usertype=?";
    
    db.query(sql, [req.body.username, req.body.password, req.body.userType], (err, data) => {
        if(data.length === 0) {
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/orders', (req, res) => {
    var addr = `${req.body.orderDetails.address}, ${req.body.orderDetails.city}, ${req.body.orderDetails.state}, ${req.body.orderDetails.zipcode}`;
    
    const sql = "insert into orders (OrderId, orderName, orderPrice, userName, userAddress, creditCardNo, zipcode, purchaseDate, storeAddress, name, shipDate, deliveryType) values (?,?,?,?,?,?,?,?,?,?,?,?)";
    
    db.query(sql, [req.body.orderId, req.body.orderDetails.item, req.body.orderDetails.price, req.body.orderDetails.username, addr, req.body.orderDetails.creditCard, req.body.orderDetails.zipcode, req.body.currentDate, req.body.orderDetails.pickupLocation, req.body.orderDetails.name, req.body.expectedDeliveryDate, req.body.orderDetails.deliveryOption], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/updateorders', (req, res) => {
    var addr = `${req.body.orderDetails.address}, ${req.body.orderDetails.city}, ${req.body.orderDetails.state}, ${req.body.orderDetails.zipcode}`;
    const sql = "update orders set orderName=?, orderPrice=?, userName=?, userAddress=?, creditCardNo=?, zipcode=?, name=? where OrderId=?";
    
    db.query(sql, [req.body.orderDetails.item, req.body.orderDetails.price, req.body.orderDetails.username, addr, req.body.orderDetails.creditCard, req.body.orderDetails.zipcode, req.body.orderDetails.name, req.body.orderId], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/deleteorders', (req, res) => {
    const sql = "delete from orders where OrderId=?";
    
    db.query(sql, [req.body.orderId], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/addproduct', (req, res) => {
    const sql = "insert into products values (?,?,?,?,?,?,?,?,?,?,?,?)";
    
    db.query(sql, [req.body.productDetails.producttype, req.body.productDetails.id, req.body.productDetails.productname, req.body.productDetails.price, req.body.productDetails.image, req.body.productDetails.manufacturer, req.body.productDetails.condition, req.body.productDetails.discount, req.body.productDetails.description, req.body.productDetails.sale, req.body.productDetails.quantity, req.body.productDetails.rebate], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/updateproduct', (req, res) => {
    const sql = "update products set ProductType=?, productName=?, productPrice=?, productImage=?, productManufacturer=?, productCondition=?, description=? where Id=?";
    
    db.query(sql, [req.body.productDetails.producttype, req.body.productDetails.productname, req.body.productDetails.price, req.body.productDetails.image, req.body.productDetails.manufacturer, req.body.productDetails.condition, req.body.productDetails.description, req.body.productDetails.id], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/deleteproduct', (req, res) => {
    const sql = "delete from products where Id=?";
    
    db.query(sql, [req.body.id], (err, data) => {
        if(err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.get('/search/:query', (req, res) => {
    const query = req.params.query.toLowerCase();
    
    const sql = 'SELECT * FROM products WHERE lower(productName) LIKE ?';
    const params = [`${query}%`];
  
    db.query(sql, params, (err, results) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        
        res.json(results);
    });
});

app.listen(8081, () => {
    console.log("Listening...");
})