import Vue from 'vue';
import Vuex from 'vuex';
import storageRef from '../main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    api: 'https://fitnesshouse-ba47f.firebaseio.com/services.json',
    listServices: '',
    listImages: [],
    urlImages: [],
    statusDataAPI: '',
    statusImagesAPI: false,
    statusUrlImages: false,
    lengthListImages: '',
    lengthListServices: '',
    commonArray: '',
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
    // Receive list of images
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
        state.urlImages.forEach((img) => {
          if (service.alias === img.name) {
            service.url = img.url;
          }
        })
      })
      state.commonArray = state.listServices
    },
  },
  actions: {
    initialLoad: ({ commit, state }) => {
      commit('receiveImg');
      commit('receiveData');
      // repeat function receiveData, if status = false
      const statusReceiveDataAPI = setTimeout(function request() {
        if (state.statusDataAPI === true) {
          clearTimeout(statusReceiveDataAPI);
        } else {
          commit('receiveData');
          setTimeout(request, 3000)
        }
      }, 1000);
      // repeat function receiveImg, if status = false
      const statusReceiveImgAPI = setTimeout(function request() {
        if (state.lengthListImages === state.lengthListServices) {
          clearTimeout(statusReceiveImgAPI);
          state.statusImagesAPI = true;
        } else {
          commit('receiveImg');
          setTimeout(request, 3000)
        }
      }, 1000);
      // receive url images
      const statusImagesAPI = setTimeout(function request() {
        if (state.statusImagesAPI === true) {
          commit('receiveUrlImg');
          clearTimeout(statusImagesAPI);
        } else {
          setTimeout(request, 3000)
        }
      }, 1000);
      // merge images and services arr
      const statusUrlImages = setTimeout(function request() {
        if (state.statusUrlImages === true) {
          commit('mergeImgServ');
          clearTimeout(statusUrlImages);
        } else {
          setTimeout(request, 3000)
        }
      }, 1400);
    }
  }
})