import Vue from 'vue';
import Vuex from 'vuex';
import storageRef from '../main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    api: 'https://fitnesshouse-ba47f.firebaseio.com/services.json',
    // cards
    listServices: '',
    listImages: [],
    urlImages: [],
    statusDataAPI: '',
    statusImagesAPI: false,
    statusUrlImages: false,
    lengthListImages: '',
    lengthListServices: '',
    commonArray: '',
    // filter
    categories: [],  // name array of categories
  },
  mutations: {
    // Receive services.json
    receiveData: (state) => {
      Vue.http.get(state.api).then((response) => {
        state.listServices = response.body;
        state.listServices.forEach((item) => {
          item.url = '';
        })
        state.statusDataAPI = response.ok;
        state.lengthListServices = response.body.length;
      }, (response) => {
      })
    },
    // Receive list of imagesКатегория тренера
    receiveImg: (state) => {
      storageRef.child('img').listAll().then((response) => {
        if (response.items.length !== 0) {
          state.lengthListImages = response.items.length;
        }
        state.listImages = response.items.map((item) => {
          return item.name
        });
      }, (response) => {
      })
    },
    // Receive url of images
    receiveUrlImg: (state) => {
      state.listImages.forEach((item) => {
        storageRef.child(`img/${ item }`).getDownloadURL().then((url) => {
          state.urlImages.push({
            name: item.slice(0, item.indexOf('.')),
            url: url,
          })
          if (state.lengthListImages === state.urlImages.length) {
            state.statusUrlImages = true;
          }
        });
      })
    },
    // merge images and services arr
    mergeImgServ: (state) => {
      state.listServices.forEach((service) => {
        service.description = service.description.slice(0, 100).trim();
        if (service.description.length >= 99) {
          service.description = `${service.description}...`;
        }
        state.urlImages.forEach((img) => {
          if (service.alias === img.name) {
            service.url = img.url;
          }
        })
      })
      state.commonArray = state.listServices
    },
    // create list of categories filter
    createCatFilter: (state) => {
      let tmpCat = [];
      tmpCat = state.listServices.map((item) => {
        return item.properties
      })
      let categories = [];
      tmpCat.forEach((item) => {
        item.forEach((subItem) => {
          if (!categories.includes(subItem.title)) {
            categories.push(subItem.title);
          }
        })
      })
      categories = categories.map((item) => {
        return {
          isShow: false,
          title: item,
          value: [],
        }
      })
      state.categories = categories;
      tmpCat.forEach((item) => {
        item.forEach((subItem) => {
          state.categories.forEach((i) => {
            if (subItem.title === i.title) {
              if (!i.value.includes(subItem.title)) {
                i.value.push(subItem.title);
              }
              if (!i.value.includes(subItem.value)) {
                i.value.push(subItem.value);
              }
            }
          })
        })
      })
    },
    // show sub menu filters
    showSubMenu: (state, payload) => {
      let arr = '';
      arr = state.categories.map((item) => {
        if (item.title === payload){
          item.isShow = !item.isShow;
        } else {
          item.isShow = false;
        }
      })
    },
    // change title of items filter
    changeSubMenu: (state, payload) => {
      let arr = '';
      arr = state.categories.map((item) => {
        item.value.forEach((subItem) => {
          if (subItem === payload){
            item.title = payload;
            item.isShow = !item.isShow;
            }
        })
      })
    }
  },
  actions: {
    initialLoad: ({ commit, state }) => {
      commit('receiveImg');
      commit('receiveData');
      // repeat function receiveData, if status = false
      const statusReceiveDataAPI = setTimeout(function request() {
        if (state.statusDataAPI === true) {
          clearTimeout(statusReceiveDataAPI);
          commit('createCatFilter');
        } else {
          commit('receiveData');
          setTimeout(request, 500)
        }
      }, 500);
      // repeat function receiveImg, if status = false
      const statusReceiveImgAPI = setTimeout(function request() {
        if (state.lengthListImages === state.lengthListServices) {
          clearTimeout(statusReceiveImgAPI);
          state.statusImagesAPI = true;
        } else {
          commit('receiveImg');
          setTimeout(request, 500)
        }
      }, 500);
      // receive url images
      const statusImagesAPI = setTimeout(function request() {
        if (state.statusImagesAPI === true) {
          commit('receiveUrlImg');
          clearTimeout(statusImagesAPI);
        } else {
          setTimeout(request, 500)
        }
      }, 500);
      // merge images and services arr
      const statusUrlImages = setTimeout(function request() {
        if (state.statusUrlImages === true) {
          commit('mergeImgServ');
          clearTimeout(statusUrlImages);
        } else {
          setTimeout(request, 500)
        }
      }, 800);
    },
    // show sub menu filters
    showSubMenu: ({ commit }, payload) => {
      commit('showSubMenu', payload);
    },
    // change title of items filter
    changeSubMenu: ({commit}, payload) => {
      commit('changeSubMenu', payload);
    }
  }
})