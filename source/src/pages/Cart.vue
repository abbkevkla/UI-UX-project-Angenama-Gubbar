<template>
  <q-page style="background-color: #f6edbe;">
      <div class="row q-pt-lg">
            <q-btn round dense flat icon="arrow_left" size="md" @click="redirect('cakes')"/>
            <div class="text-h4 text-center text-weight-medium">
                Din order
            </div>
        </div>
        <q-dialog v-model="paymentPrompt">
           <payment-component></payment-component>
        </q-dialog>

      <div style="height: 60vh; background-color: #ffffff;" class="list scroll">
        <q-item v-for="(item, index) in order" :key="index" class="row justify-between" style="border-bottom-style: solid;">
            <div style="width: 50%">
              {{ item.title }} {{ item.price }} $
            </div>
              <div class="row justify-end dense">
                <q-btn color="red" label="-" class="q-mx-sm" @click="decreaseQuantity(index)"/>
                <q-input dense filled v-model="item.quantity" suffix="st" style="width: 26%;"/>
                <q-btn color="green" class="q-mx-sm" label="+" @click="increaseQuantity(index)"/>
            </div>
        </q-item>
      </div>
        <div class="text-h4 text-center text-weight-medium q-py-md" style="background-color: #ffffff; border-top-style: solid">
          Totalt: {{ priceSum }} $
        </div>
      <div class="row justify-center q-my-lg">
        <q-btn v-if="validOrder == true" color="primary" label="Betala" class="q-pa-sm" style="width: 50%" size="lg" rounded @click="paymentPrompt = true"/>
        <q-btn v-else disabled color="primary" label="Betala" class="q-pa-sm" style="width: 50%" size="lg" rounded/>
      </div>
  </q-page>
</template>

<script>
import store from '../store'
import PaymentComponent from '../components/PaymentComponent.vue'

export default {
    components: {
        PaymentComponent
    },
    data () {
        return {
            paymentPrompt: false
        }
    },
    computed: {
        order () {
            return this.$store.state.orderinfo
        },
        priceSum () {
            let price = 0
            for (const item of this.order) {
                price += item.price * item.quantity
            }
            return price
        },
        validOrder () {
            if (this.order.length > 0) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        redirect (address) {
            this.$router.push(address)
        },
        increaseQuantity (index) {
            store.commit('increaseQuantity', index)
        },
        decreaseQuantity (index) {
            store.commit('decreaseQuantity', index)
        }
    }
}
</script>
