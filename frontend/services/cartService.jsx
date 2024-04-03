
const fetchCart = async () => {
    const response = await fetch(window.Shopify.routes.root + 'cart.js');
    const cart = await response.json();

    return cart;
}

const updateCartAttributes =(weapon) => {
    console.log(weapon);
    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "attributes":{
                  "selected_weapon":weapon
               }
            })
    })
        .then(response => {
            return response.json()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



export { fetchCart,updateCartAttributes }