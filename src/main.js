import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
    // apiKey: "<< your API key >>",
    // authDomain: "<< your authDomain key >>",
    // projectId: "element-login",
    // storageBucket: "<< your storageBucket key >>",
    // messagingSenderId: "<< your messagingSenderId >>",
    // appId: "<< your appId >>"
  };
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
