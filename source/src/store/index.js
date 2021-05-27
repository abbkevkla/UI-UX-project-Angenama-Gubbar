import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderinfo: [],
    userinfo: {}
  },

  mutations: {
    clearOrder () {
      this.state.orderinfo = []
    },
    updateOrder (state, newObj) {
      newObj.quantity = 1
      state.orderinfo.push(newObj)
    },
    updateUserInfo (state, newObj) {
      state.userinfo = newObj
      console.log(state.userinfo)
    },
    clearUserInfo (state) {
      state.userinfo = {}
    },
    removeItem (state, itemIndex) {
      state.orderinfo.splice(itemIndex, 1)
    },
    increaseQuantity (state, itemIndex) {
      state.orderinfo[itemIndex].quantity += 1
    },
    decreaseQuantity (state, itemIndex) {
      state.orderinfo[itemIndex].quantity -= 1
      if (state.orderinfo[itemIndex].quantity < 1) {
        state.orderinfo[itemIndex].quantity = 0
      }
    }
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
