<template>
  <q-page style="background-color: #f6edbe">
    <div>
        <div class="row q-pt-lg">
            <q-btn round dense flat icon="arrow_left" size="md" @click="redirect('home')"/>
            <div class="text-h4 text-center text-weight-medium">
                Bakverk
            </div>
        </div>
        <div class="text-h6 text-center text-weight-light q-py-md q-px-md" style="border-bottom-style: solid;">
            Vi erbjuder helt nybakade bakverk gjorda på uteslutande ekologiska råvaror närproducerade i Västmanland. 
        </div>
    </div>
      <div style="height: 65vh" class="list scroll q-py-md">
          <q-dialog v-model="prompt">
               <cake-info-component :cakeInfo="cakeData"></cake-info-component>
          </q-dialog>
          <q-item v-for="(item, index) in products" :key="index" class="q-ma-md">
            <q-btn color="primary" @click="ActivatePopup(item)">
                <div style="width: 50%;">
                    <img :src="item.image" width="100%" height="150px" class="q-my-sm">
                </div>
                <div style="width: 50%" class="text-center text-capitalize q-px-sm">
                    <div class="text-h5 text-weight-medium">
                        {{ item.title }}
                    </div>
                    
                    <div class="text-weight-light" style="font-size: 14px">
                        {{ item.previewDescription }}
                    </div>
                </div>
            </q-btn>
            </q-item>
        </div>
  </q-page>
</template>

<script>
import CakeInfoComponent from '../components/CakeInfoComponent.vue'
import store from '../store'

export default {
    components: {
        CakeInfoComponent
    },

    data () {
        return {
            products: [],
            prompt: false,
            cakeData: {}
        }
    },

    created() {
        fetch("http://localhost:3000/cakes")
            .then((resp) => resp.json())
            .then(data => {
                for (const item in data) {
                    data[item].quantity = 0; // Adds quantity to each item
                }
                console.log(data);
                this.products = data;
            })
        },

    methods: {
        ActivatePopup (newData) {
            this.prompt = true;
            this.cakeData = newData;
            console.log("Prompt activated")
            console.log(this.cakeData)
            },
        redirect (address) {
            this.$router.push(address)
        }
    }
}
</script>