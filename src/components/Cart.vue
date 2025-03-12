<template>
    <div>
      <h3>Cart</h3>
      <ul class="list-group mb-4">
        <li class="list-group-item" v-for="item in cartItems" :key="item.id">
          {{ item.name }} - ${{ item.price | currency }} x {{ item.quantity }}
          <button class="btn btn-danger btn-sm float-end" @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total Items: {{ cartItemCount }}</p>
      <p>Total Price: ${{ cartTotal | currency }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'cartTotal', 'cartItemCount']),
    },
    methods: {
      ...mapMutations(['removeFromCart']),
    },
  };
  </script>