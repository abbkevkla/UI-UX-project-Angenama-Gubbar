<template>
    <q-layout>
        <q-page class="flex absolute-center" style="width: 60%;">
            <div class="q-py-xl">
                <div class="q-gutter-lg">
                    <h2 class="q-py-xl text-center">Cafe Karma</h2>
                    <div v-if="failedLogIn" class="row items-start">
                        <q-card class="my-card text-negative bg-red-1" style="width: 100%;">
                        <q-card-section>
                            Felaktiga inloggningsuppgifter
                        </q-card-section>
                        </q-card>
                    </div>
                    <q-input  v-model="email" filled type="email" label="Email"/>
                    <q-input  v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Lösenord">
                        <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                        </template>
                    </q-input>
                    <q-btn color="primary" label="Logga in" @click="login" style="width: 91%; height: 50px;"/>
                </div>
            </div>
        </q-page>
    </q-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data () {
    return {
        email: null,
        password: null,
        customers: null,
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
            console.log("logged in");
            this.$router.push('/home')
        }
    }
  }
}
</script>