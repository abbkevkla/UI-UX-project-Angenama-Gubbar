<template>
  <q-page style="background-color: #f6edbe;">
      
        <q-btn round dense flat icon="arrow_left" size="md" style="margin-top: 10vh;" class="fixed-top-left q-mx-xs" @click="redirect('cakes')"/>
        <div style="padding-top: 3.5vh;" class="row q-pb-lg">
            <div class="q-mx-auto text-h4 text-center text-weight-medium">
                Din order
            </div>
        </div>

        <q-dialog v-model="paymentPrompt" persistent>
           <payment-component :Success="result"></payment-component>
        </q-dialog>

        <q-dialog persistent v-model="removalPrompt">
            <removal-component :ItemIndex="OrderIndex"></removal-component>
        </q-dialog>

      <div style="max-width: 400px; height: 60vh; background-color: #ffffff;" class="list scroll q-mx-auto">
        <q-item v-for="(item, index) in order" :key="index" class="row justify-between q-px-sm q-py-md" style="border-bottom-style: solid; border-color: #8a8a8a">
            <div class="row">
                <div class="col-2 q-pl-xs q-my-auto">
                    <q-avatar square>
                        <img style="object-fit: cover;" :src="getUrl(item.title)">
                    </q-avatar>
                </div>
                <div class="col-10">
                    <div style="font-size: 18px" class="row q-pl-sm q-pb-sm text-weight-medium">
                        {{ item.title }}
                    </div>
                    <div class="row dense text-weight-medium q-pl-sm"> 
                        <div class="col-4">
                            <div style="font-size: 16px" class="dense text-weight-medium q-py-sm">${{ item.price }} / styck</div>
                        </div>
                        <q-btn style="height: 40px;" class="q-px-sm q-mr-sm q-ml-lg" dense color="grey" label="-" @click="decreaseQuantity(index)"/>
                        <q-input mask="##" debounce=500 dense filled v-model="item.quantity" placeholder=0 @input="checkAmount(index)" suffix="st" style="width: 26%;"/>
                        <q-btn style="height: 40px;" class="q-px-sm q-ml-sm" dense color="primary" label="+" @click="increaseQuantity(index)"/>
                    </div>
                </div>
            </div>
        </q-item>
      </div>
        <div class="text-h4 text-center text-weight-medium q-py-md" style="background-color: #ffffff; border-top-style: solid; border-color: #8a8a8a">
          Totalt: ${{ priceSum }}
        </div>
      <div class="row justify-center q-my-lg">
        <q-btn v-if="validOrder == true" color="primary" label="Betala" class="q-pa-sm" style="width: 50%" size="lg" rounded @click="completeOrder()"/>
        <q-btn v-else disabled color="primary" label="Betala" class="q-pa-sm" style="width: 50%" size="lg" rounded/>
      </div>
  </q-page>
</template>

<script>
import store from '../store'
import axios from 'axios'
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
            OrderIndex: Number,
            cakes: null,
        }
    },

    mounted() {
        axios
            .get('http://localhost:3000/cakes')
            .then(response => (this.cakes = response.data))
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
        checkAmount (index) {
            if (this.order[index].quantity < 1 || !this.order[index].quantity) {
                this.OrderIndex = index
                this.removalPrompt = true
            }
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
        },
        getUrl (title) {
            for (var cake of this.cakes) {
                if (title == cake.title) {
                    return cake.image;
                }
            }
        }
    }
}
</script>