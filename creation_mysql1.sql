create database smarthomesdb;

use smarthomesdb;

create table users(username varchar(40),password varchar(40),repassword varchar(40),
usertype varchar(40));

Create table orders
(
OrderId integer, orderName varchar(200), orderPrice double, 
userName varchar(40), userAddress varchar(200), 
creditCardNo varchar(40), zipcode integer,  purchaseDate varchar(50), 
storeAddress varchar(100), name varchar(100), shipDate varchar(50), deliveryType varchar(50), 
userID integer, productID varchar(40), category varchar(40), discount integer, 
totalSales integer, shipCost double, storeID integer, quantity integer, 
Primary key(OrderId,userName,orderName)
);

Create table products
(
ProductType varchar(20),
Id varchar(20),
productName varchar(100),
productPrice double,
productImage varchar(40),
productManufacturer varchar(40),
productCondition varchar(40),
productDiscount double,
description varchar(400),
productOnSale integer,
productQuantity integer,
productOnRebate integer,
Primary key(Id)
);

create table stores
(
storeID integer, storeAddress varchar(100), zipcode integer, 
Primary key(storeID)
);

CREATE TABLE Product_accessories (
    productName varchar(20),
    accessoriesName  varchar(20),
    FOREIGN KEY (productName) REFERENCES products(Id) ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (accessoriesName) REFERENCES products(Id) ON DELETE SET NULL
        ON UPDATE CASCADE    
);

-- select * from users;
-- select * from products;
-- select * from stores;
select * from orders;