<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar v-if="$router.currentRoute.path !== '/'">
      
        <q-toolbar-title class="text-dark">
          Café Karma
        </q-toolbar-title>

        <q-btn v-if="$router.currentRoute.path !== '/cart'"
          flat
          dense
          round
          icon="shopping_cart"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>
