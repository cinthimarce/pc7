<template>
    <v-container class="text-center">
        <!-- <p>Administración</p> -->
<!--         <template>
            <v-toolbar flat>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-row justify="center" class="mt-4">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            Agregar curso
                            </v-btn>
                        </v-row>
                    </template>
                </v-dialog>     
            </v-toolbar>        
        </template> -->
        <v-data-table :headers="headers" :items="cursos" sort-by="calories" class="elevation-1 font-weight-light">
            <template v-slot:[`item.costo`]="{item}">
                <v-chip :color="getColor(item.costo)" dark>
                    {{item.costo}}
                </v-chip>
            </template>
            <template v-slot:[`item.fecha_registro`]="{item}">
                <v-chip :color="getColor(item.fecha_registro)" dark>
                    {{item.fecha_registro}}
                </v-chip>
            </template>
            <template v-slot:[`item.completado`]="{ item }">
                <v-chip :color="getColor(item.completado)" dark>
                    {{item.completado}}
                </v-chip>
            </template>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span class="text-h3">{{formTitle}}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row class="elevation-1 font-weight-regular">
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="Curso"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.cupos" label="Cupos"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.inscritos" label="Inscritos"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.duracion" label="Duración"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.costo" label="Costo"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancelar
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">¿Quieres eliminar este item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">No</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">Si</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon color="amber" small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon color="red" small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
            
    </v-container>
</template>

<script>
/* export default {
    name: 'table-ad-view',
    // props: {},
    data: function () {
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
} */
export default {
    name: 'table-admin-view',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Curso',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Cupos', value: 'cupos' },
            { text: 'Inscritos', value: 'inscritos' },
            { text: 'Duración', value: 'duracion' },
            { text: 'Costo', value: 'costo' },
            { text: 'Terminado', value: 'completado' },
            { text: 'Fecha', value: 'fecha_registro' },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        cursos: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            cupos: 0,
            inscritos: 0,
            duracion: '',
            costo: 0,
            completado: '',
            fecha_registro: ''
        },
        defaultItem: {
            name: '',
            cupos: 0,
            inscritos: 0,
            duracion: '',
            costo: 0,
            completado: '',
            fecha_registro: ''
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? '' : 'Editar Curso'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.cursos = [
                {
                    name: 'JavaScript Avanzado',
                    cupos: 20,
                    inscritos: 10,
                    duracion: '2 meses',
                    costo: 30000,
                    completado: 'Si',
                    fecha_registro: '06/03/2022'
                },
                {
                    name: 'CSS para principiantes',
                    cupos: 35,
                    inscritos: 23,
                    duracion: '1 mes',
                    costo: 10000,
                    completado: 'Si',
                    fecha_registro: '05/03/2022'
                },
                {
                    name: 'JavaScript Básico de 0 a 100',
                    cupos: 25,
                    inscritos: 0,
                    duracion: '2 meses',
                    costo: 20000,
                    completado: 'Si',
                    fecha_registro: '05/03/2022'
                },
                {
                    name: 'HTML Básico',
                    cupos: 35,
                    inscritos: 0,
                    duracion: '1 mes',
                    costo: 10000,
                    completado: 'Si',
                    fecha_registro: '31/01/2022'
                },
                {
                    name: 'Vue JS de 0 a 100',
                    cupos: 35,
                    inscritos: 35,
                    duracion: '5 meses',
                    costo: 85500,
                    completado: 'Si',
                    fecha_registro: '06/03/2022'
                },
                {
                    name: 'Estilos con SASS',
                    cupos: 40,
                    inscritos: 35,
                    duracion: '1 mes',
                    costo: 45000,
                    completado: 'Si',
                    fecha_registro: '06/03/2022'
                },
            ]
        },
        getColor(costo) {
            if (costo > 400) return 'green accent-4'
            else if (costo > 200) return 'orange'
            else return 'green'
        },
        getColor2(fecha_registro) {
            if (fecha_registro > 400) return 'green accent-3'
            else if (fecha_registro > 200) return 'orange'
            else return 'green'
        },
        getColor3(completado) {
            if (completado > 400) return 'light-blue accent-3'
            else if (completado > 200) return 'grey lighten-1'
            else return 'green'
        },

        editItem(item) {
            this.editedIndex = this.cursos.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.cursos.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.cursos.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.cursos[this.editedIndex], this.editedItem)
            } else {
                this.cursos.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style scoped></style>