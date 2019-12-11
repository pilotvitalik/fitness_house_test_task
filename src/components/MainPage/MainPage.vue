<template>
  <div id='mainPage'>
    <Navbar/>
    <Filters/>
    <Services/>
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Filters from './Filters/Filters.vue';
import Services from './Services/Services.vue';

export default {
  components: {
    Navbar,
    Filters,
    Services,
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
