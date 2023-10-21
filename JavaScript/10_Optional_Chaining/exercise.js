const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// };



// By using the ?. operator instead of just ., JavaScript knows to implicitly check
//to be sure 'order', 'order.customer' and then 'order.customer.address' is not null or undefined
//before attempting to access 'order.customer.address.city'

if (!order?.customer?.address?.city) {
  console.log('City is required');
};