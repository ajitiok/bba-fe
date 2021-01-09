<template>
  <div class="container">
        <div class="login">
            <div class="logo"> 
                <h1>E-Gigs</h1>             
                <div>
                    <p>Join with E-Gigs , for more better !</p>
                </div>
            </div>
            <form action="" id="register-form" @submit.prevent="register">
                <div class="form-group">
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
                <div class="form-actions">
                    <input type="submit" value="Register" name="" id="">
                    <span>or</span>
                    <router-link href="" class="register-btn" to="/login">Already have an account ?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            email : '',
            password : '',
        }
    },

    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(this.email , this.password).then(
                () => {
                    this.$router.replace('login')
                },
                (err) => {
                    alert(`Error - ${err.message}`);
                }
            )
        }
    }
}
</script>

<style>

</style>