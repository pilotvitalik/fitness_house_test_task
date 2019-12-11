<template>
  <div class='main'>
    <ul>
      <li class='itemServices'>
        <img src='../../../assets/img/multicart.jpeg'>
        <div class='descript'>
          <h5>
            Мультикарта Fitness House
          </h5>
          <a>
            Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100...
          </a>
          <form>
            <button>#100 занятий</button>
            <button>#1 год</button>
          </form>
        </div>
      </li>
      <li class='itemServices'>
        <img src='../../../assets/img/abonement.jpg'>
        <div class='descript'>
          <h5>
            Абонемент Fitness House
          </h5>
          <a>
            Абонемент на посещение одного спортивного клуба сети Fitness House в течении 1 года но не более 100...
          </a>
          <form>
            <button>#100 занятий</button>
            <button>#1 год</button>
            <button>#утро</button>
          </form>
        </div>
      </li>
      <li class='itemServices'>
        <img src='../../../assets/img/child.jpg'>
        <div class='descript'>
          <h5>
            Детская секция вода
          </h5>
          <a>
            Абонемент на посещение определенного количества занятий детской секции в одном из спортивных клубов...
          </a>
          <form>
            <button>#18 занятий</button>
            <button>#6 месяцев</button>
            <button>#вода</button>
          </form>
        </div>
      </li>
      <li class='itemServices'>
        <img src='../../../assets/img/personalTraning.jpg'>
        <div class='descript'>
          <h5>
            Пакет персональных тренировок
          </h5>
          <a>
            Индивидуальная работа тренера с посетителем клуба, с учётом его целей и возможных ограничений.
          </a>
          <form>
            <button>#18 занятий</button>
            <button>#6 месяцев</button>
            <button>#мастер</button>
          </form>
        </div>
      </li>
      <li class='itemServices'>
        <img src='../../../assets/img/group.jpg'>
        <div class='descript'>
          <h5>
            Групповые занятия
          </h5>
          <a>
            Абонемент на посещение одного спортивного клуба сети Fitness House в составе групповых секций в вече
          </a>
          <form>
            <button>#36 занятий</button>
            <button>#1 год</button>
            <button>#вечер</button>
          </form>
        </div>
      </li>
      <li class='itemServices'>
        <img src='../../../assets/img/masterClass.jpeg'>
        <div class='descript'>
          <h5>
            Мастер класс
          </h5>
          <a>
            Посещение одного мастер-класса по авторской методике инструктора в одном из клубов сети Fitness House
          </a>
          <form>
            <button>#разовое посещение</button>
            <button>#1 месяц</button>
            <button>#профи</button>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang='less'>
@titleCardColor: #000;
@descriptTextColor: #4a5667;
@buttonCardBackground: #edf2f7;
@shadowCardColor: #e3e3e3;
@cardColor: #fff;
.main{
  display: block;
  position: relative;
  width: 78.5%;
  height: auto;
  margin: 0 auto;
  margin-top: 21px;
  padding-bottom: 50px;
  &>ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: auto;
    .itemServices{
      display: flex;
      flex-direction: column;
      position: relative;
      width: 325px;
      height: 401px;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 7px 14px @shadowCardColor, 0 10px 10px @shadowCardColor;
      background: @cardColor;
      img{
        display: block;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: auto;
      }
      .descript{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 401-216.13px;
        h5{
          display: inline-block;
          width: 90%;
          height: 59px;
          margin-left: 19px;
          color: @titleCardColor;
          font-size: 16px;
          font-weight: 700;
          line-height: 59px;
          letter-spacing: 0.9px;
        }
        a{
          display: inline-block;
          width: 89%;
          height: 57.5px;
          margin-left: 19px;
          padding-top: 1px;
          color: @descriptTextColor;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.11px;
        }
        form{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          position: relative;
          margin-top: 29px; 
          margin-left: 19px;
          width: 250px;
          height: 25px;
          button{
            display: block;
            position: relative;
            width: auto;
            height: 21px;
            margin-right: 7px;
            padding-top: 1px;
            padding-left: 9px;
            padding-right: 9px;
            color: @descriptTextColor;
            font-size: 9px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0.6px;
            border-radius: 10px;
            border: none;
            background: @buttonCardBackground;
          }
        }
      }
    }
    .itemServices:nth-child(4),
    .itemServices:nth-child(5),
    .itemServices:last-child{
      margin-top: 27px;
    }
    .itemServices:hover{
      transform: scale(1.12, 1.12);
      transition: all .4s ease;
      cursor: pointer;
      z-index: 100;
      box-shadow: unset;
    }
  }
}
@media(min-width: 1025px) and (max-width: 1280px){
  .main{
    width: 68%;
    &>ul{
      .itemServices:nth-child(3),
      .itemServices:nth-child(4),
      .itemServices:nth-child(5),
      .itemServices:last-child{
        margin-top: 27px;
      }
    }
  }
}
@media(min-width: 768px) and (max-width: 1024px){
  .main{
    width: 728px;
    &>ul{
      .itemServices:nth-child(3),
      .itemServices:nth-child(4),
      .itemServices:nth-child(5),
      .itemServices:last-child{
        margin-top: 27px;
      }
      .itemServices:hover{
        transform: unset;
        transition: unset;
        cursor: pointer;
        z-index: 0;
        box-shadow: 0 7px 14px @shadowCardColor, 0 10px 10px @shadowCardColor;
      }
    }
  }
}
@media(min-width: 641px) and (max-width: 768px){
  .main{
    width: 605px;
    &>ul{
      .itemServices{
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 201.88px;
        img{
          width: 50%;
          height: 100%;
        }
        .descript{
          width: 50%;
          height: 100%;
          h5{
            width: 100%;
            text-align: center;
            margin-left: 0;
          }
          a{
            float: right;
            width: 90%;
            text-align: justify;
            margin-left: 0;
            padding: 0 10px;
          }
          form{
            justify-content: space-around;
            margin-left: 0;
            width: 100%;
            button{
              margin: 0;
            }
          }
        }
      }
      .itemServices:nth-child(2),
      .itemServices:nth-child(3),
      .itemServices:nth-child(4),
      .itemServices:nth-child(5),
      .itemServices:last-child{
        margin-top: 27px;
      }
    }
  }
}
@media(max-width: 640px){
  .main{
    width:90%;
    &>ul{
      .itemServices{
        width: 100%;
        height: auto;
        .descript{
          height: auto;
          padding-bottom: 15px;
          h5{
            width: 100%;
            text-align: center;
            margin-left: 0;
          }
          a{
            width: 90%;
            height: auto;
            text-align: justify;
            margin-left: 0;
            padding: 0 10px;
          }
          form{
            justify-content: space-around;
            margin-top: 15px;
            margin-left: 0;
            width: 100%;
            button{
              margin: 0;
            }
          }
        }
      }
      .itemServices:nth-child(2),
      .itemServices:nth-child(3),
      .itemServices:nth-child(4),
      .itemServices:nth-child(5),
      .itemServices:last-child{
        margin-top: 27px;
      }
      .itemServices:hover{
        transform: unset;
        transition: unset;
        cursor: pointer;
        z-index: 0;
        box-shadow: 0 7px 14px @shadowCardColor, 0 10px 10px @shadowCardColor;
      }
    }
  }
}
</style>
