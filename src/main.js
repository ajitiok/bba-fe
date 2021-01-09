import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import store from './store'


Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyBkzLBNA6xHy8rhByLkNl5_PHGd2ibTuOI",
  authDomain: "bba-fe.firebaseapp.com",
  projectId: "bba-fe",
  storageBucket: "bba-fe.appspot.com",
  messagingSenderId: "495214573180",
  appId: "1:495214573180:web:1d0acefe81f5fb4ba37bf9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
