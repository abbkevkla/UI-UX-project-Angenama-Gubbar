<template>
    <q-card style="width: 95%">
        <q-card-section class="row justify-center">
        <div class="text-center">
            <h4>Betalningen lyckades!</h4>
        </div>
        </q-card-section>
        <q-card-actions class="row justify-evenly q-mb-md">
        <q-btn
            class="q-pa-sm"
            rounded
            label="Till startsidan"
            color="primary"
            size="lg"
            v-close-popup
            @click="redirect('home')"
        />
        </q-card-actions>
    </q-card>
</template>

<script>
import store from "../store"

export default {
    methods: {
        redirect (address) {
            store.commit("clearOrder")
            this.$router.push(address)
        }
    }
}
</script>