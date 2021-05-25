import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderinfo: []
  },

  mutations: {
    clearOrder () {
      this.state.orderinfo = []
    },
    updateOrder (state, newObj) {
      console.log('hello there')
      newObj.quantity = 1
      state.orderinfo.push(newObj)
    },
    updateInfo (state, newObj) {
      state.userinfo = newObj
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
    },
    lmao () {
      console.log("sugma")
    }
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
