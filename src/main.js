import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import firebase from 'firebase'

Vue.config.productionTip = false


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMULayxSOddoG43Uokp2wbPcd-QF2NXM",
  authDomain: "sign-up-8859d.firebaseapp.com",
  databaseURL: "https://sign-up-8859d.firebaseio.com",
  projectId: "sign-up-8859d",
  storageBucket: "sign-up-8859d.appspot.com",
  messagingSenderId: "951115674788",
  appId: "1:951115674788:web:0536cc2f60e8fd0ec9a231",
  measurementId: "G-HZ4WML3EER"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
