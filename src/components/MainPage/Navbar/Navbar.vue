<template>
  <header>
    <nav>
      <h2>Fitness House Market</h2>
      <div class='box'>
        <span>4</span>
        <span></span>
        <p>Корзина</p>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      request: {
      },
    };
  },
};
</script>

<style lang='less'>
@backgroundHeader: #2d5580;
@mainColor: #fff;
@boxColor: #a0afbf;
header{
  display: block;
  position: relative;
  width: 100%;
  height: 61px;
  background: @backgroundHeader;
  nav{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    h2{
      display: inline-block;
      width: 210px;
      height: 18px;
      margin-left: 9.9%;
      color: @mainColor;
      font-weight: 400;
      line-height: 100%;
      letter-spacing: 0.9px;
      text-align: center;
    }
    .box{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      position: relative;
      align-items: center;
      width: 134px;
      height: 33px;
      margin-left: auto;
      margin-right: 10.8%;
      padding-bottom: 1px;
      border: 1px solid @boxColor;
      border-radius: 4px;
      margin-top: -1px;
      span:first-child{
        display: inline-block;
        width: 27px;
        height: 14px;
        margin-left: 13px;
        margin-right: 7px;
        padding-top: 2px;
        color: @backgroundHeader;
        font-size: 15px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.38px;
        text-align: center;
        background: @mainColor;
        border-radius: 38%;
      }
      span:nth-child(2){
        display: block;
        width: 13px;
        height: 14px;
        margin-right: 8px;
        background: @mainColor;
      }
      p{
        display: inline-block;
        width: auto;
        height: 12.5px;
        padding-top: 1px;
        color: @boxColor;
        font-size: 13.5px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.2px;
        text-align: center;
      }
    }
    .box:hover{
      cursor: pointer;
    }
  }
}
@media(max-width: 450px){
header{
  width: 100%;
  height: 61px;
  nav{
    h2{
      width: 140px;
      height: 50px;
      line-height: 25px;
      margin-left: 9.9%;
    }
    .box{
      width: 134px;
      height: 33px;
      margin-left: auto;
      margin-right: 10.8%;
      margin-top: -1px;
    }
  }
}
}
@media(max-width: 360px){
header{
  width: 100%;
  height: 61px;
  nav{
    justify-content: space-around;
    h2{
      width: 140px;
      height: 50px;
      margin-left: 0;
      line-height: 25px;
    }
    .box{
      width: 134px;
      height: 33px;
      margin-left: 0;
      margin-right: 0;
      margin-top: -1px;
    }
  }
}
}
</style>
