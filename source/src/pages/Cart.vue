<template>
  <q-page style="background-color: #f6edbe;">
      <div class="row q-pt-lg">
            <q-btn round dense flat icon="arrow_left" size="md" @click="redirect('cakes')"/>
            <div class="text-h4 text-center text-weight-medium">
                Din order
            </div>
        </div>

        <q-dialog v-model="paymentPrompt" persistent>
           <payment-component :Success="result"></payment-component>
        </q-dialog>

        <q-dialog v-model="removalPrompt">
            <removal-component :ItemIndex="OrderIndex"></removal-component>
        </q-dialog>

      <div style="height: 60vh; background-color: #ffffff;" class="list scroll">
        <q-item v-for="(item, index) in order" :key="index" class="row justify-between" style="border-bottom-style: solid; border-color: #8a8a8a">
            <div style="width: 50%; font-size: 18px" class="text-weight-medium q-mt-sm">
              {{ item.title }} {{ item.price }} $
            </div>
              <div class="row justify-end dense">
                <q-btn color="grey" label="-" class="q-mx-sm" @click="decreaseQuantity(index)"/>
                <q-input dense filled v-model="item.quantity" suffix="st" style="width: 26%;"/>
                <q-btn color="primary" class="q-mx-sm" label="+" @click="increaseQuantity(index)"/>
            </div>
        </q-item>
      </div>
        <div class="text-h4 text-center text-weight-medium q-py-md" style="background-color: #ffffff; border-top-style: solid; border-color: #8a8a8a">
          Totalt: {{ priceSum }} $
        </div>
      <div class="row justify-center q-my-lg">
        <q-btn v-if="validOrder == true" color="primary" label="Betala" class="q-pa-sm" style="width: 50%" size="lg" rounded @click="completeOrder()"/>
        <q-btn v-else disabled color="primary" label="Betala" class="q-pa-sm" style="width: 50%" size="lg" rounded/>
      </div>
  </q-page>
</template>

<script>
import store from '../store'
import PaymentComponent from '../components/PaymentComponent.vue'
import RemovalComponent from '../components/RemovalComponent.vue'

export default {
    components: {
        PaymentComponent,
        RemovalComponent
    },
    data () {
        return {
            paymentPrompt: false,
            result: null,
            removalPrompt: false,
            OrderIndex: Number
        }
    },
    computed: {
        order () {
            return this.$store.state.orderinfo
        },
        user () {
            return this.$store.state.userinfo
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
            if (this.order[index].quantity <= 1) {
                this.OrderIndex = index
                this.removalPrompt = true
            }  
            else {
            store.commit('decreaseQuantity', index)
            }
        },
        completeOrder () {
            let dateobj = new Date();
            let timestamp = dateobj.toISOString(); // Generate a timestamp

            let cakeList = [] // Create a list for the cakes
            for (const item in this.order) {
                cakeList.push({cakeId: this.order[item].id, quantity: this.order[item].quantity})
            }

            fetch("http://localhost:3000/orders", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerId: this.user.id,
                    cakes: cakeList,
                    totalPrice: this.priceSum,
                    timestamp: timestamp
                    })
            })
            .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    this.paymentPrompt = true
                    this.result = true
                })
                .catch((error) => {
                    console.error('Error:', error);
                    this.paymentPrompt = true
                    this.result = false
                });
        }
    }
}
</script>
