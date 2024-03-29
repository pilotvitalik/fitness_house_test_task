import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { store } from './store/store';
import firebase from 'firebase/app';
import storage from 'firebase/storage';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDj4SJediSzhHRhxp3vqce0jIcEqoBFpP4",
  authDomain: "fitnesshouse-ba47f.firebaseapp.com",
  databaseURL: "https://fitnesshouse-ba47f.firebaseio.com",
  projectId: "fitnesshouse-ba47f",
  storageBucket: "fitnesshouse-ba47f.appspot.com",
  messagingSenderId: "832820160033",
  appId: "1:832820160033:web:67305f6327bea8a783e560",
  measurementId: "G-MMLQPPQRWM"
});

const storageRef = firebaseApp.storage().ref();

export default storageRef;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
