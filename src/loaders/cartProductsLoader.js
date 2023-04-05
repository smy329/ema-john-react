import { getShoppingCart } from '../utilities/fakedb';

const cartProductsLoader = async () => {
  const loadProducts = await fetch('products.json');
  const products = await loadProducts.json();

  //if cart data is in database, you have to use async - await
  const storedCart = getShoppingCart();
  const savedCart = [];
  //for - in loop applicable for object
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      //as cart is saved in local storage in key value pairs. We are sending the key through storedCart[id], so that we can get value as quantity
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

export default cartProductsLoader;
