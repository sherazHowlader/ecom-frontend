<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="breadcrumbs-content">
            <h1 class="page-title"> Single Product </h1>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <ul class="breadcrumb-nav">
            <li><a href="index.html"><i class="lni lni-home"></i> Home </a></li>
            <li><a href="index.html"> Shop </a></li>
            <li> Single Product </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <section class="item-details section">
    <div class="container">
      <div class="top-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-images">
              <main id="gallery">

                <div class="main-img d-flex justify-content-center">
                    <span v-if="image">
                        <img :src="path + image" id="current" alt="#" height="350" style="width: 605px;"/>
                    </span>

                  <span v-else>
                     <img v-if="product.image" :src="path + product.image" height="350"/>
                  </span>
                </div>

                <div class="images">
                  <img v-for="image in images"
                       :src="path + image.image"
                       class="img" alt="#"
                       @click="imageSelector(image.image)"
                       height="80"
                  >
                </div>

              </main>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-info">
              <h2 class="title"> {{ product.name }} </h2>
              <p class="category">
                <i class="lni lni-tag"></i>
                <a href="javascript:void(0)"> {{ product.category_name }} </a>
              </p>

              <h3 class="price">
                <h4 v-if="product.discount_price">
                  ??? {{ product.discount_price }}
                  <span> ??? {{ product.regular_price }}</span>
                  <small class="text-danger">
                    -{{parseFloat((product.regular_price - product.discount_price) / product.regular_price * 100).toFixed()}}%
                  </small>
                </h4>

                <h4 v-else> ??? {{ product.regular_price }}</h4>
              </h3>

              <p class="info-text"> {{ product.short_description }} </p>

              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group color-option">

                    <label class="title-label" for="size">Choose color</label>

                    <div class="single-checkbox checkbox-style-1">
                      <input type="checkbox" id="checkbox-1" checked>
                      <label for="checkbox-1"><span></span></label>
                    </div>
                    <div class="single-checkbox checkbox-style-2">
                      <input type="checkbox" id="checkbox-2">
                      <label for="checkbox-2"><span></span></label>
                    </div>
                    <div class="single-checkbox checkbox-style-3">
                      <input type="checkbox" id="checkbox-3">
                      <label for="checkbox-3"><span></span></label>
                    </div>
                    <div class="single-checkbox checkbox-style-4">
                      <input type="checkbox" id="checkbox-4">
                      <label for="checkbox-4"><span></span></label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12" v-if="variants.length > 0 ">
                  <div class="form-group">
                    <label for="color">Battery capacity</label>
                    <select class="form-control p-2" id="color" @click="variantSelector($event)">
                      <option v-for="variant in variants">
                        {{ variant.size }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group quantity">
                    <label for="color">Quantity</label>
                    <select class="form-control" v-model="quantity">
                      <option> 1</option>
                      <option> 2</option>
                      <option> 3</option>
                      <option> 4</option>
                      <option> 5</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="bottom-content">
                <div class="row align-items-end">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="button cart-button">
                      <button class="btn" style="width: 100%;"
                              @click="addToCart({product, quantity, variant})"> Add to Cart
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="wish-button">
                      <button class="btn"><i class="lni lni-reload"></i> Compare</button>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="wish-button">
                      <button class="btn"><i class="lni lni-heart"></i> To Wishlist</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-details-info">
        <div class="single-block">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="info-body custom-responsive-margin">
                <h4>Details</h4>
                <p> {{ product.description }} </p>
                <h4>Features</h4>
                <ul class="features">
                  <li>Capture 4K30 Video and 12MP Photos</li>
                  <li>Game-Style Controller with Touchscreen</li>
                  <li>View Live Camera Feed</li>
                  <li>Full Control of HERO6 Black</li>
                  <li>Use App for Dedicated Camera Operation</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="info-body">
                <h4>Specifications</h4>
                <ul class="normal-list">
                  <li><span>Weight:</span> 35.5oz (1006g)</li>
                  <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                  <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                  <li><span>Operating Frequency:</span> 2.4GHz</li>
                  <li><span>Manufacturer:</span> GoPro, USA</li>
                </ul>
                <h4>Shipping Options:</h4>
                <ul class="normal-list">
                  <li><span>Courier:</span> 2 - 4 days, $22.50</li>
                  <li><span>Local Shipping:</span> up to one week, $10.00</li>
                  <li><span>UPS Ground Shipping:</span> 4 - 6 days, $18.00</li>
                  <li><span>Unishop Global Export:</span> 3 - 4 days, $25.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="single-block give-review">
              <h4>4.5 (Overall)</h4>
              <ul>
                <li>
                  <span>5 stars - 38</span>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </li>
                <li>
                  <span>4 stars - 10</span>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star"></i>
                </li>
                <li>
                  <span>3 stars - 3</span>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star"></i>
                  <i class="lni lni-star"></i>
                </li>
                <li>
                  <span>2 stars - 1</span>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star"></i>
                  <i class="lni lni-star"></i>
                  <i class="lni lni-star"></i>
                </li>
                <li>
                  <span>1 star - 0</span>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star"></i>
                  <i class="lni lni-star"></i>
                  <i class="lni lni-star"></i>
                  <i class="lni lni-star"></i>
                </li>
              </ul>

              <button type="button" class="btn review-btn" data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                Leave a Review
              </button>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="single-block">
              <div class="reviews">
                <h4 class="title">Latest Reviews</h4>

                <div class="single-review">
                  <img src="" alt="#">
                  <div class="review-info">
                    <h4>Awesome quality for the price
                      <span> Jacob Hammond </span>
                    </h4>
                    <ul class="stars">
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor...</p>
                  </div>
                </div>


                <div class="single-review">
                  <img src="" alt="#">
                  <div class="review-info">
                    <h4>My husband love his new...
                      <span> Alex Jaza </span>
                    </h4>
                    <ul class="stars">
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star"></i></li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor...</p>
                  </div>
                </div>


                <div class="single-review">
                  <img src="" alt="#">
                  <div class="review-info">
                    <h4>I love the built quality...
                      <span>Jacob Hammond</span>
                    </h4>
                    <ul class="stars">
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                      <li><i class="lni lni-star-filled"></i></li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor...</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <div class="modal fade review-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Leave a Review</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="review-name">Your Name</label>
                <input class="form-control" type="text" id="review-name" required>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="review-email">Your Email</label>
                <input class="form-control" type="email" id="review-email" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="review-subject">Subject</label>
                <input class="form-control" type="text" id="review-subject" required>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="review-rating">Rating</label>
                <select class="form-control" id="review-rating">
                  <option>5 Stars</option>
                  <option>4 Stars</option>
                  <option>3 Stars</option>
                  <option>2 Stars</option>
                  <option>1 Star</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="review-message">Review</label>
            <textarea class="form-control" id="review-message" rows="8" required></textarea>
          </div>
        </div>
        <div class="modal-footer button">
          <button type="button" class="btn">Submit Review</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "product-details",

  data() {
    return {
      path: 'http://127.0.0.1:8000/',
      image: '',
      quantity: 1,
      variant: '',
    }
  },

  methods: {
    ...mapActions({
      productLoad: 'product/getProduct',
      getImages: 'product/getImages',
      getVariant: 'product/getVariant',
      addToCart: 'cart/addProductToCart',
    }),

    imageSelector(img) {
      this.image = img;
    },

    variantSelector(event) {
      this.variant = this.variants.find((item) => {
        return item.size == event.target.value
      })
      this.product.regular_price = this.variant.regular_price;
      this.product.discount_price = this.variant.discount_price;
    }
  },

  computed: {
    ...mapGetters({
      product: 'product/single_product',
      images: 'product/product_images',
      variants: 'product/product_variants',
    })
  },

  mounted() {
    this.productLoad(this.$route.params.slug);
    this.getImages(this.$route.params.slug);
    this.getVariant(this.$route.params.slug);
  },
}
</script>
