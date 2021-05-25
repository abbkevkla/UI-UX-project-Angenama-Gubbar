<template>
    <q-card style="background-color: rgba(255, 255, 255, 0.7)" class="my-card" flat bordered>
        <q-card-section horizontal>
            <q-card-section class="col-3">
                <q-avatar size="10vh">
                    <img
                    :src="employee.avatar"
                    />
                </q-avatar>
            </q-card-section>
            
            <q-card-section class="col-9">
                <div style="font-size: 18px;" class="text-right text-weight-bold">{{ employee.name }}</div>
                <div style="font-size: 12px; text-transform: capitalize;" class="text-right">{{ employee.role }}</div>
                <div style="font-size: 9px;" class="q-py-sm text-right">{{ employee.email }} <q-icon name="email" /></div>
                <div style="font-size: 11px;" class="text-right">{{ employee.phone }} <q-icon name="phone" /></div>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    props: {
        employee: Object
    }
}
</script>