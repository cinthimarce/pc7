<template>
    <div>
        <v-app-bar color="grey darken-4" dark >
            <v-toolbar-title class="toolbarTitle font-weight-bold">COMPAÑIA</v-toolbar-title>
            <v-layout row justify-start>
                <v-toolbar app color="grey darken-4" dark class="hidden-xs-and-down">
                    <v-toolbar-items  class="hidden-sm-and-down">
                        <!-- <v-btn text class="m1-2" to="/">Inicio</v-btn>
                        <v-btn text class="m1-2">Departamentos</v-btn>
                        <v-btn text class="m1-2">Empleados</v-btn>
                        <v-btn text class="m1-2">Turnos</v-btn> -->
                        
                            <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)" :disabled="currentRoute==route.name">
                                <v-list-item-icon>
                                    <v-icon class="w-icon">{{route.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title >{{route.title}}</v-list-item-title>
                            </v-list-item>
                        
                    </v-toolbar-items>
                </v-toolbar>
            </v-layout>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'navbar-view',
    // props: {},
    data: function () {
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:'mdi-home',
                    title:'Inicio',
                    name:'home'
                },
                {
                    icon:'mdi-domain',
                    title:'Departamentos',
                    name:'departamentos'
                },
                {
                    icon:'mdi-account-group',
                    title:'Empleados',
                    name:'empleados'
                },
                {
                    icon:'mdi-timer',
                    title:'Turnos',
                    name:'turnos'
                },
            ]
        }
    },
    computed: {
        currentRoute(){
            return this.$route.name

        }
    },
    methods: {
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.toolbarTitle{
    width: 120px;
}
.w-icon{
    margin-left: 12px;
}
</style>

