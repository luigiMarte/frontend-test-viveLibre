<!-- eslint-disable eqeqeq -->
<template>
  <div class="product-list">
    <h1>Product List</h1>
    <button
      class="btn-position btn btn-lg btn-outline-dark btn-block"
      @click="logout"
    >
      log out
    </button>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading && !error" class="products">
      <div v-for="product in products" :key="product.id">
        <product-card
          :product="product"
          @productFavoriteClicked="toggleProductFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import { getProductsListEndpoint } from "@/helpers/constants";
import authService from "@/services/auth/authService";

export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  created() {
    this.fetchProducts();
  },
  data() {
    return {
      products: [],
      favoriteProducts: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    logout() {
      authService.logout();
      this.$router.push("/login");
      this.$toast.top("You have successfully logged out");
    },
    async fetchProducts() {
      try {
        const response = await axios.get(getProductsListEndpoint);
        this.products = response.data.slice(0, 5);
      } catch (err) {
        this.error = "Failed to load products";
      } finally {
        this.loading = false;
      }
    },
    toggleProductFavorite(productSelectedId) {
      if (this.favoriteProducts.includes(productSelectedId)) {
        this.favoriteProducts = this.favoriteProducts.filter(
          (id) => id !== productSelectedId
        );
      } else {
        this.favoriteProducts.push(productSelectedId);
      }
      // Puedes comprobar si llegan los id's correctos
      console.log("this.favoriteProducts", this.favoriteProducts);
    },
  },
};
</script>

<style scoped>
.product-list {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.loading {
  font-size: 18px;
  color: gray;
}

.error {
  color: red;
  font-size: 18px;
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.btn-position {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
