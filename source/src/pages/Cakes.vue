<template>
  <div>
    <div>
        <div class="text-h4 text-center text-weight-medium q-pt-lg">
            Bakverk
        </div>
        <div class="text-h6 text-center text-weight-light q-py-md q-px-md" style="border-bottom-style: solid;">
            Vi erbjuder helt nybakade bakverk gjorda på uteslutande ekologiska råvaror närproducerade i Västmanland. 
        </div>
    </div>
      <div style="height: 65%;" class="list scroll q-py-md">
          <q-item v-for="(item, index) in products" :key="index" class="q-ma-md" >
            <q-btn color="primary">
                <div style="width: 50%;">
                    <img :src="item.image" width="100%" height="100%">
                </div>
                <div style="width: 50%" class="text-center text-capitalize">
                    <div class="text-h5 text-weight-medium">
                        {{ item.title }}
                    </div>
                    
                    <div class="text-weight-light">
                        {{ item.previewDescription }}
                    </div>
                </div>
            </q-btn>
            </q-item>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            products: []
        }
    },

    created() {
        fetch("http://localhost:3000/cakes")
            .then((resp) => resp.json())
            .then(data => {
                console.log(data);
                this.products = data;
            })
        }
    }
</script>