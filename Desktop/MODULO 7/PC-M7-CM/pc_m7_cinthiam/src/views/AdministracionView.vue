<template>
    <v-container class="text-center font-weight-thin display-3 ma-4">
        <p>Administración</p>
        <template>
            <v-toolbar flat>
                <v-dialog v-model="dialog" max-width="700px">
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

import { mapState, mapActions, mapGetters } from 'vuex';
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
        ...mapGetters(['alumnosPermitidos']),
        ...mapGetters(['alumnosInscritos']),
        ...mapGetters(['cursosTerminados']),
        ...mapGetters(['totalCursos']),
        cuposRestantes() {
            return this.alumnosPermitidos - this.alumnosInscritos;
        },
        cursosActivos() {
            return this.totalCursos - this.cursosTerminados;
        },

        alerts() {
            return [
                {
                    color: 'purple',
                    icon: 'mdi-account-multiple',
                    title: `Cantidad total de alumnos Permitidos: `,
                    number: `${this.alumnosPermitidos} alumnos.`
                },
                {
                    color: 'blue',
                    icon: 'mdi-account-check',
                    title: `Cantidad total de alumnos inscritos: `,
                    number: `${this.alumnosInscritos} alumnos.`
                },
                {
                    color: 'red',
                    icon: 'mdi-account-plus',
                    title: `Cantidad total de cupos restantes: `,
                    number: `${this.cuposRestantes} alumnos.`
                },
                {
                    color: 'pink',
                    icon: 'mdi-cancel',
                    title: `Cantidad de cursos terminados: `,
                    number: `${this.cursosTerminados} cursos.`
                },
                {
                    color: 'light-green-darken-2',
                    icon: 'mdi-bell-ring-outline',
                    title: `Cantidad total de cursos activos: `,
                    number: `${this.cursosActivos} cursos.`
                },
                {
                    color: 'orange',
                    icon: 'mdi-bell-ring-outline',
                    title: `Cantidad total de cursos: `,
                    number: `${this.totalCursos} cursos.`
                }
            ]
        }
    },
    created() {
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


<style scoped>
number{
    font:100;
}
</style>