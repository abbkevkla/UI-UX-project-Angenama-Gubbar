<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar v-if="$router.currentRoute.path !== '/'">
      
        <q-toolbar-title class="text-dark text-h5" style="font-family: 'Lucida Handwriting';" @click="redirect('home')">
          Café Karma
        </q-toolbar-title>

        <div v-if="$router.currentRoute.path !== '/cart'">
          <q-btn flat dense round icon="shopping_cart" @click="redirect('cart')"/>
          <q-avatar v-if="itemsInCart != 0" size="24px" color="red"> {{ this.itemsInCart }} </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import store from "../store"

export default {
  name: 'MainLayout',
  computed: {
    itemsInCart () {
      return this.$store.state.orderinfo.length
    }
  },
  methods: {
    redirect (address) {
        this.$router.push(address)
      }
  }
}
</script>
