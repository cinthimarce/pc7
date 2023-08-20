<template>
    <v-container class="text-center font-weight-thin display-3 ma-4">
        <p>Administración</p>
        <template>
            <v-toolbar flat>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-row justify="center" class="mt-4">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on" @click="agregarCurso">
                                Agregar curso
                            </v-btn>
                        </v-row>
                    </template>
                    <agregar-curso v-if="showform == true" @showForm="verForm" @agregarCurso="nuevoCurso" @hideForm="esconderForm" />
                </v-dialog>
            </v-toolbar>
        </template>
        <!-- <agregar-curso v-if="showform == true" @agregarCurso="nuevoCurso" @hideForm="esconderForm" /> -->

        <table-admin />
        <v-row v-for="alert in alerts" :key="alert.color">
            <table-alert :alert="alert" />
        </v-row>

    </v-container>
</template>
<script>
import TableAdmin from '@/components/TableAdmin.vue'
import TableAlert from '@/components/TableAlert.vue'
import AgregarCurso from '@/components/AgregarCurso.vue';

import { mapState, mapActions } from 'vuex';
export default {
    name: 'administracion-view',
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            isActive: false,
            showEdit: false,
            idEdit: null,
            CursoTitle: null,
            idToDelete: null,
            showform: false,

        }
    },

    components: {
        'table-admin': TableAdmin,
        'table-alert': TableAlert,
        'agregar-curso': AgregarCurso
    },

    computed: {
        ...mapState(['cursos']),

        alerts() {
            return [
                {
                    color: 'purple',
                    icon: 'mdi-account-multiple',
                    title: `Cantidad total de alumnos Permitidos: 190 alumnos.`,
                },
                {
                    color: 'blue',
                    icon: 'mdi-account-check',
                    title: `Cantidad total de alumnos inscritos: 103 alumnos.`
                },
                {
                    color: 'red',
                    icon: 'mdi-account-plus',
                    title: `Cantidad total de cupos restantes: 87 alumnos.`
                },
                {
                    color: 'pink',
                    icon: 'mdi-cancel',
                    title: `Cantidad de cursos terminados: 2 cursos.`
                },
                {
                    color: 'light-green-darken-2',
                    icon: 'mdi-bell-ring-outline',
                    title: `Cantidad total de cursos activos: 4 cursos.`
                },
                {
                    color: 'orange',
                    icon: 'mdi-bell-ring-outline',
                    title: `Cantidad total de cursos: 6 cursos.`
                }
            ]
        }
    },
    methods: {
        agregarCurso() {
            this.dialog = true
            this.CursoTitle = 'Agregar Curso'
            this.showform = true
        },
        esconderForm(data) {
            this.showform = data
            this.dialog = false
        },
        ...mapActions(['agrCurso']),

        nuevoCurso(nuevoCurso) {
            this.CursoTitle = null
            this.dialog = false
            this.agrCurso(nuevoCurso)
        },
        verForm(data){
            this.showForm = data
            this.dialog = false 
        }
    }
    // watch: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods

    // -- End Lifecycle Methods
}
</script>


<style scoped></style>