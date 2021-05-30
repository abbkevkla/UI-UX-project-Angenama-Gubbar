<template>
  <q-page class="flex flex-center bg-secondary">
    <div class="fixed-top">
      <q-img 
        src="../assets/temple.jpg"
        style="height: 550px; width:400px"
      />
    </div>
    <div class="absolute-left q-pa-sm">
      <q-btn color="secondary" text-color="black" label="Logga ut" class="submit button" @click="logout('/')"/>
    </div>
    <div class="absolute-right q-pa-sm">
      <h4 class="color: white; q-mr-sm text-center" style="max-width: 210px; color: white; font-family: 'Lucida Handwriting'; text-shadow: 2px 2px #686868;">
        “Den vise bygger inget hopp om framtiden och ångrar ingenting i det förflutna.”
      </h4>
    </div>
    <div class="fixed-bottom q-pa-xl">
      <q-item>
        <q-btn class="q-pa-md q-mx-auto" color="primary" @click="redirect('cakes')">
          <div class="text-h4 text-weight-medium text-center text-capitalize">
            Se bakverk
          </div>
        </q-btn>
      </q-item>
      <q-item>
        <q-btn class="q-mt-md q-mx-auto" color="primary" @click="redirect('about')">
          <div class="text-h5 text-weight-medium text-center text-capitalize">
            Om oss
          </div>
        </q-btn>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import store from "../store"

export default {
  name: 'PageIndex',
  methods: {
        redirect (address) {
            this.$router.push(address)
        },
        logout () {
          store.commit("clearUserInfo")
          store.commit("clearOrder")
          this.$router.push("/")
        }
    }
}
</script>