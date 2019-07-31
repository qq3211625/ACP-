//vue核心管理对象: store

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user
  }
})

/*
总state结构:
  {
    msite: {},
    shop: {},
    user: {}
  }
        模块名  存蓄数据名
  state.msite.address
  state.user.user

*/
