var orderFood = {
    nameRestaurant: "Bonchon",
    orders: [],
    addMenu: function(name, price){
        this.orders.push({name:name, price:price});
    },
    totalPrice: function(){
        var total = 0;
        // forEach
        this.orders.forEach(function(order){
            total = total + order.price;
        })
        // for-loop
        // for(var i=0; i< this.orders.length;i++){
        //     total = total + this.orders[i].price;
        // }
        function showTotal(){
            console.log("Total Price is "+ total);
        }
        return showTotal;
    }

}

orderFood.addMenu("Chicken8Pcs.", 250);
orderFood.addMenu("Tofusoup",280);
console.log(orderFood.orders);
// console.log(orderFood.totalPrice());
var tt = orderFood.totalPrice(); // closure
tt();
