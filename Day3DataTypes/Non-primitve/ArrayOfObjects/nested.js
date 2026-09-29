let orders = [
    {
        id: 1001,

        customer: {
            name: "Rahul",
            email: "rahul@example.com",

            address: {
                city: "Hyderabad",
                state: "Telangana",
                country: "India"
            }
        },

        payment: {
            method: "UPI",
            status: "paid"
        }
    },

    {
        id: 1002,

        customer: {
            name: "Priya",
            email: "priya@example.com",

            address: {
                city: "Bangalore",
                state: "Karnataka",
                country: "India"
            }
        },

        payment: {
            method: "Card",
            status: "paid"
        }
    }
];

console.log(orders);
console.log(orders[0]);
console.log(orders[0].customer);
console.log(orders[0].customer.email);
console.log(orders[0]);
console.log(orders[0].customer.address);
console.log(orders[0].customer.address.city);

