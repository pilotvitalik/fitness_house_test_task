<template>
  <ul>
    <li class='itemServices' v-for='item in listServices'>
      <img :src='item.url'>
      <div class='descript'>
        <h5>
          {{ item.title }}
        </h5>
        <a>
          {{ item.description }}
        </a>
        <form>
          <button v-for='label in item.properties'>#{{ label.value }}</button>
        </form>
      </div>
    </li>
  </ul>
</template>

<script>
export default{
  data() {
    return {};
  },
  computed: {
    listServices() {
      return this.$store.state.resultCommonArray;
    }
  },
};
</script>

<style lang='less'>
</style>