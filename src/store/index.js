import Vue from 'vue'
import Vuex from 'vuex'

import dates from './dates'

Vue.use(Vuex)

export default function () {

  const Store = new Vuex.Store({
    modules: {
      dates
    },
    strict: process.env.DEV
  })

  return Store
}

