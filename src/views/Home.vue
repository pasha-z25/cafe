<template>
  <div class="home">
<!--    <img alt="Vue logo" src="./public/assets/images/vue-logo.png">-->
    <div class="content">
      <button @click="getData">Get Data</button>
    </div>
    <preloader/>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'
import Preloader from "@/components/Preloader";

export default {
  name: 'Home',
  components: {Preloader},
  methods: {
    getData() {
      let result;

      // Set the configuration for your app
      // TODO: Replace with your project's config object

      const firebaseConfig = {
        apiKey: "AIzaSyCOCElOqJ61Eyv1ok-JoWeitneNcbzCqBQ",
        authDomain: "vocal-facet-231411.firebaseapp.com",
        databaseURL: "https://vocal-facet-231411.firebaseio.com",
        projectId: "vocal-facet-231411",
        storageBucket: "vocal-facet-231411.appspot.com",
        messagingSenderId: "624551834172",
        appId: "1:624551834172:web:8c00729ed7c8a2a69b4939",
        measurementId: "G-GJT4XQ7NBG"
      };

      var app = firebase.initializeApp(firebaseConfig);

      app.database().ref().once('value').then(res => {
        result = res.val();
        console.log(result);
      }).catch(console.log);

      var storage = app.storage().ref().child('burgers/gamburger.jpg');
      storage.getDownloadURL().then(url => {
        console.log(url);
      }).catch(console.log);

    }
  }
}
</script>

<style scoped>
.content {
  max-width: 1140px;
  margin: 30px auto 0 auto;
  padding: 15px;
}
</style>