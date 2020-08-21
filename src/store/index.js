import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultado: 0
  },
  mutations: {
    setResultado(state, entrada){
      state.resultado = entrada;
    }
  },
  actions: {
  },
  modules: {
  }
})
