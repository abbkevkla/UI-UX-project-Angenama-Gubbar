<template>
    <q-card style="width: 95%">
        <q-card-section class="row justify-center">
        <div class="text-center">
            <h4>Är du säker att du vill ta bort denna vara?</h4>
        </div>
        </q-card-section>
        <q-card-actions class="row justify-evenly q-mb-md">
            <q-btn class="q-pa-sm" rounded label="Ta bort" color="grey" size="lg" v-close-popup @click="RemoveItem(ItemIndex)"/>
            <q-btn class="q-pa-sm" rounded label="Tillbaka" color="primary" size="lg" v-close-popup/>
        </q-card-actions>
    </q-card>
</template>

<script>
import store from "../store"

export default {
    props: {
        ItemIndex: Number
    },
    methods: {
        RemoveItem (index) {
            store.commit("removeItem", index)
        }
    }
}
</script>