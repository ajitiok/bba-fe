<template>
  <div class="menu">
          <div class="top-bar">
            <div class="navigation-icon" v-if="mobileView">
              <i class="fas fa-bars"></i>
            </div>
          </div>
          <div class="navigation" v-if="!mobileView">
            <ul>
              <li>Job</li>
              <li>My Apps</li>
            </ul>
          </div>
          <div class=" title">
            <h1 class="justify-content-start">My Applications</h1>
            <button id="logout" @click="logout()">Log Out</button>
          </div>
          <div class="navbar-layout">
            <div id="nav">
              <router-link to="/">Favourite</router-link>
              <router-link to="/progress">On Progress</router-link>
            </div>
        </div>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
    name : 'Menu',
    data : () => {
      return {
        mobileView : true,
        showNav : false
      }
    },
    methods : {
      logout() {
        firebase.auth().signOut()
          .then(() => {
            alert('Bye-Bye')
            this.$router.replace('login')
          })  
          .catch((err) => {
            console.log(err);
          })
      },
      handleView() {
        this.mobileView = window.innerWidth <= 990;
      }
    
    },
    created() {
      this.handleView();
    }
}
</script>

<style>

  .navigation li {
    list-style: none;
  }

  
  
  .navigation-icon {
    padding : 20px;
    margin-right: 10px;
    cursor: pointer;
    top: 0;
    left: 0;
    position: absolute;
  }

  .navigation-icon i {
    font-size: 2rem;
    
  }



  #logout {
    position: absolute;
    top : 0;
    right: 0;
    margin: 20px;
    background-color: #9969D3;
    border-radius: 12px;
    color: #fff;
    border: 0;
    padding: 5px 15px;
    font-weight: 700;
    font-size: 13px;
}
</style>