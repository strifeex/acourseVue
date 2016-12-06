import Vue from 'vue'
import router from './router'
import firebase from 'firebase'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!!css!semantic-ui-css/semantic.min.css'

import App from './App'

firebase.initializeApp({
  apiKey: 'AIzaSyBzN36zUOUUGUZA4oKN4D9zpjH-nu7xfsE',
  authDomain: 'twitty-vue-93e0c.firebaseapp.com',
  databaseURL: 'https://twitty-vue-93e0c.firebaseio.com',
  storageBucket: 'twitty-vue-93e0c.appspot.com',
  messagingSenderId: '217854775087'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
