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
  getters:{
    getResultado: state => {
      return state.resultado
    }
  },
  actions: {
  },
  modules: {
  }
})
