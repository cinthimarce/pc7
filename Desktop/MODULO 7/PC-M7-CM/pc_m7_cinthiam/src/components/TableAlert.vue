<template>
    <v-container class=" font-weight-light pa-2">
        <v-alert outlined :color="alert.color">
            <v-row justify="left" >
                <v-icon class="ml-3 mr-2">{{ alert.icon }}</v-icon>
                <p class="mb-0 ">{{ alert.title }}</p>
            </v-row>
        </v-alert>
    </v-container>
</template>

<script>
export default {
    name: 'table-alert-view',
    props: {
        alert:{
            type:Object,
            required:true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>