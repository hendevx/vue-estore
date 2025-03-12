<template>
    <div>
        <div v-if="cartItems.length">
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartItems" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>${{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>${{ item.price * item.quantity }}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>Total Price: ${{ totalPrice }}</h4>
            <h4>Total Items: {{ totalItems }}</h4>
        </div>
        <p v-else>Your cart is empty.</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: mapGetters(['cartItems', 'totalPrice', 'totalItems']),
    methods: {
        ...mapMutations(['removeFromCart'])
    }
};
</script>