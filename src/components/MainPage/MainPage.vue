<template>
  <div id='mainPage'>
    <Navbar/>
    <Filters/>
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Filters from './Filters/Filters.vue';

export default {
  components: {
    Navbar,
    Filters,
  },
  data() {
    return {
      request: {
      },
    };
  },
};
</script>

<style lang='less' scoped>
</style>
