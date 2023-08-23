<template>
  <section class="trending-product section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2> Trending Product </h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form.</p>
          </div>
        </div>
      </div>
      <div class="row">

        <div class="col-lg-3 col-md-6 col-12" v-for="product in products" :key="product.id">
          <form @submit.prevent="addToCart(product)">
            <div class="single-product">
              <div class="product-image">
                <img :src="product.image" alt="#">

                <span class="sale-tag"
                      v-if="product.discount_price">
                      -{{parseFloat((product.regular_price - product.discount_price) / product.regular_price * 100).toFixed()}}%
                </span>

                <div class="button">
                  <button type="submit" class="btn">
                    <i class="lni lni-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
              <div class="product-info">
                <span class="category"> {{ product.category_name }} </span>
                <h4 class="title">
                  <router-link :to="`/product/` + product.slug"> {{ product.name }}</router-link>
                </h4>
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star"></i></li>
                  <li><span>4.0 Review(s)</span></li>
                </ul>

                <div class="price">
                  <span v-if="product.discount_price">
                      ৳ {{ product.discount_price }}
                      <span class="discount-price"> ৳ {{ product.regular_price }} </span>
                  </span>

                  <span v-else> ৳ {{ product.regular_price }} </span>
                </div>

              </div>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "trending-product",

  data() {
    return {
    }
  },

  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
      loadProducts: 'product/allProduct',
      loadToken: 'token/csrfToken',
    }),
  },

  computed: {
    ...mapGetters({
      subtotal: "cart/subtotal",
      products: "product/allProducts",
    })
  },

  mounted() {
    this.loadProducts();
    this.loadToken();
  }
}
</script>