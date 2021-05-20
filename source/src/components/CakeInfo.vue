<template>
  <q-dialog
  v-model="prompt"
        persistent
      >
        <q-card style="width: 95%">
          <q-card-section class="col-auto justify-center">
            <div class="text-center">
              <h4>Genomför betalning med Swish</h4>
            </div>
          </q-card-section>
          <q-card-actions class="row justify-evenly q-mb-md">
            <q-btn
              class="q-pa-sm"
              rounded
              label="Betala"
              color="green"
              size="lg"
              v-close-popup
            />
            <q-btn
              class="q-pa-sm"
              rounded
              label="Avbryt"
              color="red"
              size="lg"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
</template>

<script>
export default {
    
}
</script>

<style>

</style>