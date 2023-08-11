<template>
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">checkout</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-nav">
                        <li><a href="index.html"><i class="lni lni-home"></i> Home</a></li>
                        <li><a href="index.html">Shop</a></li>
                        <li>checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <section class="checkout-wrapper section">
        <div class="container">
            <form @submit.prevent="placeOrder({order, carts, subtotal, discount})">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="checkout-steps-form-style-1">
                            <ul id="accordionExample">
                                <li>
                                    <h6 class="title" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="true"
                                        aria-controls="collapseThree"> Personal Details </h6>
                                    <section class="checkout-steps-form-content collapse show" id="collapseThree"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="single-form form-default">
                                                    <label>User Name</label>
                                                    <div class="row">
                                                        <div class="col-md-6 form-input form">
                                                            <input type="text" placeholder="First Name" v-model="order.customer_first_name">
                                                        </div>
                                                        <div class="col-md-6 form-input form">
                                                            <input type="text" placeholder="Last Name" v-model="order.customer_last_name">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Email Address</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Email Address" v-model="order.customer_email">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Phone Number</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Phone Number" v-model="order.customer_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-form form-default">
                                                    <label>Mailing Address</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Address" v-model="order.customer_address">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>City</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="City" v-model="order.customer_city">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Post Code</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Post Code" v-model="order.customer_post_code">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Country</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Country" v-model="order.customer_country">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Region/State</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Region/State" v-model="order.customer_state">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-checkbox checkbox-style-3">
                                                    <input type="checkbox" id="checkbox-3">
                                                    <label for="checkbox-3"><span></span></label>
                                                    <p>My delivery and mailing addresses are the same.</p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-form button">
                                                    <button class="btn" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">next
                                                        step
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                                <li>
                                    <h6 class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">Shipping Address</h6>
                                    <section class="checkout-steps-form-content collapse" id="collapseFour"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="single-form form-default">
                                                    <label>User Name</label>
                                                    <div class="row">
                                                        <div class="col-md-6 form-input form">
                                                            <input type="text" placeholder="First Name" v-model="order.shipping_first_name">
                                                        </div>
                                                        <div class="col-md-6 form-input form">
                                                            <input type="text" placeholder="Last Name" v-model="order.shipping_last_name">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Email Address</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Email Address" v-model="order.shipping_email">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Phone Number</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Phone Number" v-model="order.shipping_phone_number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-form form-default">
                                                    <label>Mailing Address</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Address" v-model="order.shipping_address">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>City</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="City" v-model="order.shipping_city">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Post Code</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Post Code" v-model="order.shipping_post_code">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Country</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Country" v-model="order.shipping_country">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form form-default">
                                                    <label>Region/State</label>
                                                    <div class="form-input form">
                                                        <input type="text" placeholder="Region/State" v-model="order.shipping_state">
                                                    </div>
                                                </div>
                                            </div>
       
                                            <div class="col-md-12">
                                                <div class="steps-form-btn button">
                                                    <button class="btn" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">previous
                                                    </button>
                                                    <a href="javascript:void(0)" class="btn btn-alt">Save & Continue</a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                                <li>
                                    <h6 class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                        aria-expanded="false" aria-controls="collapsefive">Payment Info</h6>
                                    <section class="checkout-steps-form-content collapse" id="collapsefive"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="checkout-payment-form">
                                                    <div class="single-form form-default">
                                                        <label>Cardholder Name</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Cardholder Name">
                                                        </div>
                                                    </div>
                                                    <div class="single-form form-default">
                                                        <label>Card Number</label>
                                                        <div class="form-input form">
                                                            <input id="credit-input" type="text"
                                                                placeholder="0000 0000 0000 0000">
                                                            <img src="" alt="card">
                                                        </div>
                                                    </div>
                                                    <div class="payment-card-info">
                                                        <div class="single-form form-default mm-yy">
                                                            <label>Expiration</label>
                                                            <div class="expiration d-flex">
                                                                <div class="form-input form">
                                                                    <input type="text" placeholder="MM">
                                                                </div>
                                                                <div class="form-input form">
                                                                    <input type="text" placeholder="YYYY">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="single-form form-default">
                                                            <label>CVC/CVV <span><i class="mdi mdi-alert-circle"></i></span></label>
                                                            <div class="form-input form">
                                                                <input type="text" placeholder="***">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="single-form form-default button">
                                                        <button class="btn">pay now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="checkout-sidebar">
                            <div class="checkout-sidebar-coupon mb-30" v-if="!couponName">
                                <p>Appy Coupon to get discount!</p>
                                <form @submit.prevent='applyCoupon(couponInput)'>
                                    <div class="single-form form-default">
                                        <div class="form-input form">
                                            <input name="coupon" type="text" placeholder="Coupon Code" v-model="couponInput">
                                        </div>
                                        <div class="button">
                                            <button class="btn" type="submit">apply</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="checkout-sidebar-price-table">
                                <h5 class="title"> Pricing Table </h5>
                                <div class="sub-total-price">
                                    <div class="total-price">
                                        <p class="value"> Subotal Price: </p>
                                        <p class="price"> {{ subtotal }} tk </p>
                                    </div>
                                    <div class="total-price shipping" v-if="couponName">
                                        <p class="value">
                                            Coupon Applied - ({{ couponName }})
                                            <small class="text-danger font-bold " @click="cancelCoupon"
                                                style="cursor: context-menu;">x</small>
                                        </p>
                                        <p class="price"> {{ discount }}% </p>
                                    </div>
                                    <div class="total-price shipping">
                                        <p class="value"> Shipping: </p>
                                        <p class="price"> Free </p>
                                    </div>
                                </div>
                                <div class="total-payable">
                                    <div class="payable-price">
                                        <p class="value"> You Pay: </p>
                                        <p class="price">
                                            <span v-if="couponName">
                                                {{ subtotal - subtotal * discount / 100 }} tk
                                            </span>
                                            <span v-else>
                                                {{ subtotal }} tk
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="price-table-btn button">
                                    <!-- <a href="javascript:void(0)" class="btn btn-alt"> Place Order </a> -->
                                    <button class="btn" type="submit">Place Order</button>
                                </div>
                            </div>
                            <!-- <div class="checkout-sidebar-banner mt-30">
                                <a href="product-grids.html">
                                    <img :src="`frontend/images/banner/banner.jpg`" alt="#">
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "checkout",

    data() {
        return {
            couponInput: '',
            order: {
                customer_first_name : null,
                customer_last_name : null,
                customer_email : null,
                customer_phone_number : null,
                customer_address : null,
                customer_city : null,
                customer_post_code : null,
                customer_country : null,
                customer_state : null,

                shipping_first_name : null,
                shipping_last_name : null,
                shipping_email : null,
                shipping_phone_number : null,
                shipping_address : null,
                shipping_city : null,
                shipping_post_code : null,
                shipping_country : null,
                shipping_state : null,
            },
        }
    },
    computed: {
        ...mapGetters({
            couponName: 'couponName',
            subtotal: 'cart/subtotal',
            discount: 'couponDiscount',
            carts: 'cart/items',
        })
    },
    methods:{
        ...mapActions({
            applyCoupon: 'applyCoupon',
            cancelCoupon: 'cancelCoupon',
            placeOrder: 'cart/placeOrder',
        })
    },
}
</script>
