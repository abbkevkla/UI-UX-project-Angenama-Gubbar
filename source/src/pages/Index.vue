<template>
  <q-page class="flex flex-center">
    <div class="fixed-top">
      <q-img 
        src="../assets/temple.jpg"
        style="height: 550px; width:400px"
      />
    </div>
    <div class="absolute-right q-pa-sm">
      <q-btn color="white" text-color="black" label="Logga ut" class="submit button" @click="redirect('/')"/>
      <h5 style="text-align: right"> “Den vise bygger inget hopp om framtiden och ångrar ingenting i det förflutna.”</h5>
    </div>
    <div class="fixed-bottom">
      <q-item class="q-ma-md">
        <q-btn color="primary" @click="redirect('cakes')">
          <div style="width: 100%" class="text-center text-capitalize">
            <div class="text-h5 text-weight-medium">
              Se bakverk
            </div>
          </div>
        </q-btn>
      </q-item>
      <q-item class="q-ma-md">
        <q-btn color="primary" @click="redirect('about')">
          <div style="width: 100%" class="text-center text-capitalize">
            <div class="text-h5 text-weight-medium">
              Om oss
            </div>
          </div>
        </q-btn>
      </q-item>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
        redirect (address) {
            this.$router.push(address)
        }
    }
}
</script>