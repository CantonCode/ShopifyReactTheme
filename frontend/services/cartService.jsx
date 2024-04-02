
const fetchCart = async () => {
    const response = await fetch(window.Shopify.routes.root + 'cart.js');
    const cart = await response.json();
  
    return cart;
}

const updateCartAttributes = async () => {
    
}

fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  export {fetchCart}