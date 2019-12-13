<template>
  <ul class='subMenu'>
    <li v-for='subCat in value' @click='changeSubMenu(subCat)'>{{subCat}}</li>
  </ul>
</template>

<script>
export default{
  props: ['value'],
  data() {
    return{
    };
  },
  methods: {
    changeSubMenu(subCat) {
      this.$store.dispatch('changeSubMenu', subCat);
    }
  }
};
</script>

<style lang='less'>
@itemColor: #edf2f7;
@itemColorText: #4a5667;
@borderSubMenu: #7c9fd1;
@itemSelect: #2596fa;
@back: #fff;
.subMenu{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 188px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  top: 40px;
  border: 1px solid @borderSubMenu;
  border-radius: 4px;
  z-index: 100;
  background: @back;
  li{
    display: inline-block;
    width: 174px;
    height: 13px;
    padding-left: 14px;
    color: @itemColorText;
    font-size: 13px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.1px;
  }
  li:not(:first-child){
    margin-top: 5px;
  }
  li:hover{
    cursor: pointer;
    background: @itemSelect;
  }
}
@media(min-width: 641px) and (max-width: 768px){
  .subMenu{
    width: 248px;
  }
}
@media(max-width: 640px){
  .subMenu{
    width: 100%;
    li{
      display: inline-block;
      width: 100%;
      height: 30px;
      padding-left: 0;
      font-size: 13px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>