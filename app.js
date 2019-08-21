var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost", 

    port: 3306,

    user: "root",

    password: "root",

    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
    start();
});

var chosenItem;
var itemNum;
//function to prompt user what Item they would like to buy
function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.table(results);

    
    inquirer
      .prompt([ 
        {
        name: "item",
        type: "input",
        message: "What is the id of the item you would like to buy?"
       
      },
      {
          name: "quantity",
          type: "input",
          message: "How many would you like to purchase?"

      }
    ])
    .then(function(answer) {
        console.log(answer.item);
        console.log(answer.quantity);
        //function to update stock 
       
        for (var i = 0; i < results.length; i++) {
           
          if (results[i].item_id === parseInt(answer.item)) {
            
           chosenItem = results[i];
           itemNum = results[i].item_id;
           console.log(chosenItem);
           
          }
        }
        if(chosenItem.stock_quantity < answer.quantity) {
            console.log("Sorry we do not have enough");
            start();

        }else {
         updateStock(chosenItem.stock_quantity, answer.quantity);
        }

    });
});
}

function updateStock (stockQuantity, userQuantity) {
    updatedQty = stockQuantity - userQuantity;
    connection.query("UPDATE products SET? WHERE?", [{
        stock_quantity: updatedQty
    },
    {
        item_id: itemNum
    }
],
function(err){
    if (err) throw err;
    console.log("Item purchased successfully!");
    start();
})
}



