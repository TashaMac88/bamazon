CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cat food", "pet procducts", 10, 3),
VALUES ("cat litter", "pet products", 12, 1),
VALUES ("dish detergent", "house hold", 6, 2),
VALUES ("socks", "clothing", 24, 3),
VALUES ("deodrant", "health care", 6, 5),
VALUES ("toliet paper", "house hold", 12, 1),
VALUES ("gatorade", "sports drinks", 1, 10),
VALUES ("chicken", "ploultry", 16, 3),
VALUES ("cheese", "dariy", 6, 2),
VALUES ("creamer", "dairy", 6, 3)