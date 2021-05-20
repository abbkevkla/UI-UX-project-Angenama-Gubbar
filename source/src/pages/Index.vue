<template>
  <q-page class="flex flex-center">
    <div class="fixed-top">
      <h4 style="text-align: right"> “Den vise bygger inget hopp om framtiden och ångrar ingenting i det förflutna.”</h4>
      <q-img 
        src="../assets/temple.jpg"
        style="height: 550px; width:400px"
      />
      <q-item class="q-ma-md" >
        <q-btn color="primary">
          <div style="width: 100%" class="text-center text-capitalize">
            <div class="text-h5 text-weight-medium">
              Se bakverk
            </div>
          </div>
        </q-btn>
      </q-item>
      <q-item class="q-ma-md">
        <q-btn color="primary">
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
  name: 'PageIndex'
}
</script>