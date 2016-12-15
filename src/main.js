import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'

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

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
})

<<<<<<< HEAD
const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

=======
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
