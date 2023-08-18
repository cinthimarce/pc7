<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dense dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="redirectToHome">
                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn icon @click="redirectTo">
                <v-icon>mdi-wrench</v-icon>
            </v-btn>

            
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'navbar-view',
    // props: {},
    data: function () {
        return {}
    },
    // computed: {},
    methods: {
        redirectTo() {
            if (this.$route.path == '/administracion') {
                return
            }
            this.$router.push('/administracion')
        },
        redirectToHome() {
            if (this.$route.path == '/') {
                return
            }
            this.$router.push('/')
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

<style scoped></style>