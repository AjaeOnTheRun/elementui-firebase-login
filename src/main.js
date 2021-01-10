import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
    // copy from firebase Project settings
  };
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
