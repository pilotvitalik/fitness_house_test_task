<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage/MainPage.vue';

export default {
  name: 'app',
  components: {
    MainPage,
  },
  methods: {
    initialLoad() {
      this.$store.dispatch('initialLoad');
    },
  },
  created() {
    this.initialLoad();
  },
};
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
a{
  text-decoration: none;
}
ul, li{
  list-style-type: none;
}
</style>
