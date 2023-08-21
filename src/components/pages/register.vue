<template>
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">Login</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-nav">
                        <li><a href="index.html"><i class="lni lni-home"></i> Home</a></li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="account-login section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                    <form class="card login-form" @submit.prevent="register(form_data)">
                        <div class="card-body">
                            <div class="title">
                                <h3>Create Account</h3>
                                <p>You can login using your social media account or email address.</p>
                            </div>
                            <div class="social-login">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-12">
                                      <a class="btn facebook-btn" href="javascript:void(0)">
                                        <i class="lni lni-facebook-filled"></i> Facebook login </a>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                      <a class="btn twitter-btn" href="javascript:void(0)">
                                        <i class="lni lni-twitter-original"></i> Twitter login </a>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                      <a class="btn google-btn" href="javascript:void(0)">
                                        <i class="lni lni-google"></i> Google login </a>
                                    </div>
                                </div>
                            </div>
                            <div class="alt-option">
                                <span>Or</span>
                            </div>

                            <div class="form-group input-group">
                                <label for=""> First Name </label>
                                <input class="form-control" type="text" v-model="form_data.first_name" name="first_name" placeholder="First Name">
                            </div>
                            <div class="form-group input-group">
                              <label for="">Last Name</label>
                              <input class="form-control" type="text" v-model="form_data.last_name" name="last_name" placeholder="Last Name">
                            </div>
                            <div class="form-group input-group">
                              <label for="">Email</label>
                              <input class="form-control" type="email" v-model="form_data.email" name="email" placeholder="Email">
                            </div>
                            <div class="form-group input-group">
                                <label for="password"> Password </label>
                                <input class="form-control" type="password" v-model="form_data.password" name="password" placeholder="Password">
                            </div>
                            <div class="form-group input-group">
                              <label for="password"> Confirm Password </label>
                              <input class="form-control" type="password" v-model="form_data.c_password" name="c_password" placeholder="Repeat Password ">
                            </div>

                            <div class="d-flex flex-wrap justify-content-end bottom-content">
                                <a class="lost-pass" href=""> Forgot password? </a>
                            </div>
                            <div class="button">
                                <button type="submit" class="btn"> Register </button>
                            </div>
                            <p class="outer-link"> Already have an account?
                              <router-link :to="{name: 'login'}"> Login </router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "../../router/index.js";

export default {
    name: "login",

    data() {
        return {
            form_data: {
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                password: '',
                c_password: '',
            },
        };
    },
    computed:{
      ...mapGetters({
          hasToken: 'token/hasToken',
      })
    },
    methods: {
        ...mapActions({
          register: 'token/register',
        }),
    },

  mounted() {
    if (this.hasToken) {
      router.push({ name: 'home' });
    }
  }
}
</script>
