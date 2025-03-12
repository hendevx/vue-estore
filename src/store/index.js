import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [
        { id: 1, name: 'Headphones', price: 499 },
        { id: 2, name: 'Speaker', price: 600 },
        { id: 3, name: 'Laptop', price: 35000 },
        { id: 4, name: 'Smartphone', price: 15000 },
        { id: 5, name: 'Tablet', price: 12000 },
        { id: 6, name: 'Smartwatch', price: 8000 },
        { id: 7, name: 'Camera', price: 25000 },
        { id: 8, name: 'Printer', price: 5000 },
        { id: 9, name: 'Monitor', price: 7000 },
        { id: 10, name: 'Keyboard', price: 1500 },
      ],
      cart: [],
    };
  },
  mutations: {
    addToCart(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ id: productId, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        const item = state.cart[index];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
  },
  getters: {
    cartItems(state) {
      return state.cart.map(item => {
        const product = state.products.find(product => product.id === item.id);
        return {
          ...product,
          quantity: item.quantity,
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItemCount(state, getters) {
      return getters.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export default store;