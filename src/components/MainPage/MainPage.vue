<template>
  <Navbar/>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';

export default {
  components: {
    Navbar,
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
p{
  color: red;
}
</style>
