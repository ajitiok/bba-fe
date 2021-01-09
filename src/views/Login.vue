<template>
    <div class="container">
        <div class="login">
            <div class="logo">
                <h1>E-Gigs</h1>              
                <div>
                    <p>Login with E-Gigs , Find and Get Job !</p>
                </div>
            </div>
            <form action="" @submit.prevent="login">
                <div class="form-group" >
                    <div class="form-sub-group">
                        <span class="icon">
                            <i class="far fa-envelope"></i>
                        </span>
                    </div>
                    <div class="form-sub-group">
                        <input type="text" name="email" v-model="email" id="email" placeholder="Email Address">
                        <label for="email">Email Address</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-sub-group">
                        <span class="icon">
                            <i class="fas fa-lock"></i>
                        </span>
                    </div>
                    <div class="form-sub-group">
                        <input type="password" name="password" v-model="password" id="password" placeholder="Password">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="form-group-mini">
                    <div class="form-sub-group-mini">
                        <input type="checkbox" name="rememberme" id="rememberme">
                        <label for="rememberme">Remember Me</label>
                    </div>
                    <div class="form-sub-group-mini">
                        <a href="#" target="_blank" rel="noopener noreferrer">Forgot Password</a>
                    </div>
                </div>
                <div class="form-actions">
                    <input type="submit" value="Login" name="" id="">
                    <span>or</span>
                    <router-link href="" class="register-btn" to="/register">Create a Free Account</router-link>
                </div>
            </form>
            <div class="social-logins">
                <p><small>or you can login with</small></p>
                <div class="social-items">
                    <a href="#" class="google">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            let v = this;

            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                () => {
                    alert('login')
                    this.$router.replace('/')
                },
                (err) => {
                    console.log(`Error - ${err.message}`);
                }
            )
        }
    }
}
</script>

<style>

</style>