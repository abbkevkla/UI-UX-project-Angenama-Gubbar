<template>
    <q-card style="width: 95%">
        <q-card-section class="row justify-center">
        <div class="text-center">
            <h4 v-if="Success == true">Betalningen lyckades!</h4>
            <h4 v-else>Något gick  fel...!</h4>
        </div>
        </q-card-section>
        <q-card-actions class="row justify-evenly q-mb-md">
        <q-btn v-if="Success == true" class="q-pa-sm" rounded label="Till startsidan" color="primary" size="lg" v-close-popup @click="redirect('home')"/>
        <q-btn v-else class="q-pa-sm" rounded label="Gå tillbaka" color="primary" size="lg" v-close-popup/>
        </q-card-actions>
    </q-card>
</template>

<script>
import store from "../store"

export default {
    props: {
      Success: Boolean
    },
    methods: {
        redirect (address) {
            store.commit("clearOrder")
            this.$router.push(address)
        }
    }
}
</script>