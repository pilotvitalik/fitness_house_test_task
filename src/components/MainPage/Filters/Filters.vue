<template>
  <ul class='listItems'>
      <li class='item' v-for='cat in filters' :class="{display: cat.isShow}">
        <p class='btn' @click='showSubMenu(cat.title)'>{{cat.title}}</p>
        <transition name='SubMenu'>
          <Submenu :value='cat.value' v-if='cat.isShow'/>
        </transition>
        <button @click='showSubMenu(cat.title)' :class="{displayBtn: cat.isShow}">
          <span></span>
        </button>
      </li>
  </ul>
</template>

<script>
import Submenu from './Submenu/Submenu.vue';

export default {
  components: {
    Submenu,
  },
  data() {
    return {
    };
  },
  computed: {
    filters() {
      return this.$store.state.categories;
    },
    show() {
      return this.$store.state.show;
    },
  },
  methods: {
    showSubMenu(title) {
      this.$store.dispatch('showSubMenu', title);
    }
  },
};
</script>

<style lang='less'>
@itemColor: #edf2f7;
@itemColorText: #4a5667;
@borderSubMenu: #7c9fd1;
@itemSelect: #2596fa;
@back: #fff;

.SubMenu-enter-active {
  transition: all .8s ease;
}
.SubMenu-leave-active {
  transition: all .8s ease;
}
.SubMenu-enter, .SubMenu-leave-to{
  transform: translateY(-10px);
  opacity: 0;
}

.listItems{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 78.5%;
  height: 66px;
  margin-top: 7px;
  margin-left: 10.65%;
  &>.item{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    width: 190px;
    height: 39px;
    border: none;
    border-radius: 4px;
    background: @itemColor;
    color: @itemColorText;
    p{
      display: inline-block;
      width: 80%;
      height: 100%;
      padding-left: 14px;
      color: @itemColorText;
      font-size: 13px;
      font-weight: 400;
      line-height: 39px;
      letter-spacing: 0.1px;
    }
    &>button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 190-166px;
      height: 39px;
      border: none;
      outline: none;
      border-radius: 0 4px 4px 0;
      background: @itemColor;
      &>span{
        display: inline-block;
        position: relative;
        width: 4.5px;
        height: 4.5px;
        margin-left: auto;
        margin-right: 10px;
        margin-top: -4px;
        border: solid @itemColorText;
        border-width: 0 1px 1px 0;
        transform: rotate(44deg);
      }
    }
    &>button:hover{
      cursor: pointer;
    }
  }
  &>.item:first-child,
  &>.item:nth-child(2),
  &>.item:nth-child(3),
  &>.item:nth-child(4){
    margin-right: 1%;
  }
  &>.item:hover{
    cursor: pointer ;
  }
}
.display{
  outline: 1px solid @borderSubMenu !important;
  background: @back !important;
}
.displayBtn{
  background: @back !important;
}
.under{
  z-index: -1 !important;
}
@media(min-width: 1248px) and (max-width: 1260px){
  .listItems{
    height: auto;
    padding-top: (66-39)/2px;
    padding-bottom: (66-39)/2px;
    &>.item:nth-child(4){
      margin-right: 1%;
    }
    &>.item:last-child{
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
@media(min-width: 1025px) and (max-width: 1247px){
  .listItems{
    height: auto;
    padding-top: (66-39)/2px;
    padding-bottom: (66-39)/2px;
    &>.item:nth-child(4){
      margin-right: 0;
    }
    &>.item:last-child{
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
@media(min-width: 769px) and (max-width: 1024px){
  .listItems{
    justify-content: center;
    width: 728px;
    height: auto;
    padding-top: (66-39)/2px;
    padding-bottom: (66-39)/2px;
    margin-left: auto;
    margin-right: auto;
    &>.item:first-child{
      float: left;
      margin-right: auto;
    }
    &>.item:nth-child(2){
      margin: 0 1%;
    }
    &>.item:nth-child(3){
      margin-right: 0;
      margin-left: auto;
      float: right;
    }
    &>.item:nth-child(4){
      margin-top: 10px;
      margin-right: (726.02-380)/3px;
    }
     &>.item:last-child{
      margin-top: 10px;
    }
  }
}
@media(min-width: 641px) and (max-width: 768px){
  .listItems{
    justify-content: space-between;
    width: 79%;
    height: auto;
    padding-top: (66-39)/2px;
    padding-bottom: (66-39)/2px;
    margin-left: auto;
    margin-right: auto;
    &>.item{
      width: 250px;
      p{
        width: 100-8.7%;
        padding-left: 0;
        text-align: center;
      }
      button{
        display: none;
      }
    }
    &>.item:first-child,
    &>.item:nth-child(3){
      float: left;
      margin-right: 0;
    }
    &>.item:nth-child(2),
    &>.item:nth-child(4){
      float:right;
      margin-right: 0;
    }
    &>.item:nth-child(3),
    &>.item:nth-child(4){
      margin-top: 10px;
    }
    &>.item:last-child{
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
@media(max-width: 640px){
  .listItems{
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: auto;
    padding-top: (66-39)/2px;
    padding-bottom: (66-39)/2px;
    margin-left: auto;
    margin-right: auto;
    &>.item{
      width: 100%;
      p{
        width: 100%;
        padding-left: 0;
        text-align: center;
      }
      button{
        display: none;
      }
    }
    &>.item:nth-child(2),
    &>.item:nth-child(3),
    &>.item:nth-child(4),
    &>.item:last-child{
      margin-top: 10px;
    }
    &>.item:last-child{
      margin-left: -1%;
    }
  }
}
</style>
