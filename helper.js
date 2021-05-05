const stripe = require('stripe')("sk_test_51Ick4IBNrUQf8H2jEebD5JkfJ9K7O1GuwksW3zJkAhuYHkjLeEhQB06kz65Q09fCrMzRwAWVfNZW6WzoGFFyLBQA00OgIeMjoz");

const findUserByEmail = async (email, callback) => {
    // console.log(email);
    let customer = await stripe.customers.list();
    customer = customer.data;
    console.log(customer);

    customer = customer.filter((el) => { return el.email === email });
    callback(customer.length === 0, customer.length !== 0);
    return true;
}

module.exports = {findUserByEmail}