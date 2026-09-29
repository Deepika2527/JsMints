let orders = [
    {
        orderId: 1001,

        customer: {
            name: "Rahul"
        },

        items: [
            {
                product: {
                    name: "Laptop",
                    price: 75000
                },
                quantity: 1
            },

            {
                product: {
                    name: "Mouse",
                    price: 1500
                },
                quantity: 2
            }
        ]
    }
];
console.log(orders);
console.log(orders[0]);
console.log(orders[0].items);
console.log(orders[0].items[0].product.name);
console.log(orders[0].items[1].product.name);
// console.log(orders[1].items[0].product);
// console.log(orders[1].customer);
console.log(orders[1]?.customer);
console.log(orders[0]?.customer?.name);
console.log(orders[0]?.customer?.name?.address);
//when we try to retrive the value from out the range first it shows undefined later form that again if we try accessing it throes an eroor for that we use here ?.  for not causing the error If the value I'm accessing from is null or undefined, stop safely insetad of trowing error





