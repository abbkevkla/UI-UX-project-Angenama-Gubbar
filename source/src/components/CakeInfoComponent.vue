<template>
  <q-card style="width: 95%; height: 75%" class="items-start">
    <div style="width: 100%; height: 40%;">
      <img :src="this.cakeInfo.image" width="100%" height="100%">
    </div>
    <div width="100%" class="row justify-between items-center no-wrap">
        <div class="q-ml-md q-mt-md text-h4" style="width: 50%">
          {{ this.cakeInfo.title }}
        </div>
        <div class="q-mr-lg q-mt-md no-wrap text-h4 text-bold">
          {{ this.cakeInfo.price }} $
        </div>
    </div>
    <q-card-section class="list scroll q-my-sm" style="height: 30%">
      {{ this.cakeInfo.detailDescription }}
    </q-card-section>
    <q-card-actions class="row justify-evenly dense">
      Lägg till i varukorg:
      <q-btn color="red" label="-" v-close-popup style="width: 12%"/>
      <q-input dense filled suffix="st" style="width: 20%;"/>
      <q-btn color="green" label="+" v-close-popup style="width: 12%; text-align: center;"/>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
    props: {
      cakeInfo: Object
    }
}
</script>