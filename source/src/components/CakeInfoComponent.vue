<template>
  <q-card style="width: 95%; height: 70vh;" class="items-start">
    <div class="row" style="height: 40%;">
      <img :src="this.cakeInfo.image" width="100%" height="100%">
    </div>
    <div style="height: 96px;" class="row justify-between items-center no-wrap">
        <div class="col-7 q-ml-md q-my-sm text-h4">
          {{ this.cakeInfo.title }}
        </div>
        <div class="col-4 q-pr-lg no-wrap text-h4 text-bold text-right">
          {{ this.cakeInfo.price }} $
        </div>
    </div>
    <q-card-section class="row list scroll q-py-none q-my-auto" style="height: 33%;">
      {{ this.cakeInfo.detailDescription }}
    </q-card-section>
    <q-card-actions class="row absolute-bottom justify-evenly dense text-weight-medium">
      <div>
        Lägg till i varukorg:
      </div>
      <q-btn color="grey" padding="none" dense label="-" style="width: 12%" size="lg" @click="subtractItem()"/>
      <q-input disable v-model="quantityCounter" dense filled suffix="st" style="width: 20%;"/>
      <q-btn color="primary" padding="none" dense label="+" style="width: 12%" size="lg" @click="addItem()"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import store from '../store'

export default {
    props: {
      cakeInfo: Object
    },
    computed: {
      order () {
        return this.$store.state.orderinfo
      },
      quantityCounter () {
        let items = this.order
        for (const index in items) {
          if (items[index].title == this.cakeInfo.title) {
            return items[index].quantity
            break
          }
        }
        return 0
      }
    },
    methods: {
      addItem() {
        if (this.order.length < 1) {
          store.commit("updateOrder", this.cakeInfo)
        }
        else {
          let itemFound = false
          for (const item in this.order) {
            if (this.order[item].title == this.cakeInfo.title) { // Checks if item already exists in order, if it does not, push it into order
              store.commit("increaseQuantity", item)
              itemFound = true
            }
          }
          if (itemFound == false) {
            store.commit("updateOrder", this.cakeInfo)
          }
        }
        console.log(this.order)
      },
      subtractItem() {
        for (const itemIndex in this.order) {
            if (this.order[itemIndex].title == this.cakeInfo.title) { // Checks if item exists in order and in that case find the index
              store.commit("decreaseQuantity", itemIndex)
              if (this.order[itemIndex].quantity < 1) {
                store.commit("removeItem", itemIndex)
              }
              break
            }
          }
          console.log(this.order)
      }
    }
}
</script>