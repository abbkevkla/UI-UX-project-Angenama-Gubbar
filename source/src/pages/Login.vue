<template>
    <q-page class="bg-secondary">
        <img style="object-fit: cover; height: 100vh; width: 100vw; opacity: 0.8" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-s-msn-com.akamaized.net%2Ftenant%2Famp%2Fentityid%2FAACFQlr.img&f=1&nofb=1">   
        <div class="flex absolute-top q-my-xl q-mx-auto" style="width: 70vw;">
            <div class="q-gutter-lg q-mx-auto">
                <h2 class="q-py-lg q-ml-none text-center text-white text-weight-medium" style="font-family: 'Lucida Handwriting';">Café Karma</h2>
                <div v-if="failedLogIn" class="row items-start q-ml-none">
                    <q-card class="my-card text-negative bg-red-1" style="width: 100%;">
                    <q-card-section>
                        Felaktiga inloggningsuppgifter
                    </q-card-section>
                    </q-card>
                </div>
                <q-input class="q-ml-none" bg-color="secondary" v-model="email" filled type="email" label="Email"/>
                <q-input class="q-ml-none" bg-color="secondary" v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Lösenord">
                    <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                    </template>
                </q-input>
                <q-btn class="q-ml-none" color="primary" label="Logga in" @click="login" style="width: 100%; height: 50px;"/>
            </div>
        </div>
        <p class="q-px-sm text-white absolute-bottom-right">© Copyright Angenäma Gubbar 2021</p>
    </q-page>
</template>

<script>
import axios from 'axios';
import store from '../store'

export default {
  name: 'Login',
  data () {
    return {
        email: null,
        password: null,
        customers: null,
        accountDetails: null,
        failedLogIn: false,
        isPwd: true,
    }
  },

  mounted() {
      axios
        .get('http://localhost:3000/customers')
        .then(response => (this.customers = response.data))
  },
  
  methods: {
    credentialsAreValid() {
        var isValid = false;
        for(var customer of this.customers){
            if (this.email == customer.email) {
                if (this.password == customer.password) {
                    this.accountDetails = customer
                    isValid = true;
                    break;
                }
            } 

            if (!isValid) {
                this.failedLogIn = true;
            }
        };
        return isValid;
    },

    login() {
        if (this.credentialsAreValid()){
            store.commit("updateUserInfo", this.accountDetails)
            //console.log("logged in");
            this.$router.push('/home')
        }
    }
  }
}
</script>