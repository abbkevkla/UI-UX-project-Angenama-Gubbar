<template>
    <q-page class="bg-secondary">
        <q-btn style="margin-top: 10vh;" class="fixed-top-left q-mx-xs" round dense flat icon="arrow_left" size="md" @click="redirect('home')"/>
        <div style="padding-top: 3.5vh;" class="row">
            <div class="q-mx-auto text-h4 text-center text-weight-medium">
                Vår vision
            </div>
        </div>
        <div class="row text-h6 text-center text-weight-light q-py-md q-px-xl q-mx-auto" style="border-bottom-style: solid; max-width: 600px;">
            Vi på Café Karma brinner för hållbarhet och inkludering. Alla våra bakverk är ekologiska och gjorda av närproducerade råvaror från Västmanland.
            Vi vet att vi har lyckats när du som kund finner en inre frid under ditt besök hos oss.
        </div>
        <div class="q-my-lg text-h5 text-center text-weight-medium">
                Våra medarbetare
        </div>
        <div style="max-width: 400px;" class="items-start q-mx-auto q-pt-sm q-pb-xl q-px-lg q-gutter-md">
            <div v-for="member in this.staff" :key="member.id">
                <employee-component :employee="member"></employee-component>
            </div>    
        </div>
    </q-page>
</template>

<script>
import axios from 'axios';
import EmployeeComponent from '../components/EmployeeComponent.vue'

export default {
    name: 'About',

    components: {
        EmployeeComponent,
    },

    data () {
        return {
            staff: null,
        }
    },
    
    mounted () {
        axios
            .get('http://localhost:3000/staff')
            .then(response => (this.staff = response.data.sort((a, b) => {
                return a.id - b.id;
            })))
    },

    methods: {
        redirect (address) {
            this.$router.push(address)
        }
    }
}
</script>