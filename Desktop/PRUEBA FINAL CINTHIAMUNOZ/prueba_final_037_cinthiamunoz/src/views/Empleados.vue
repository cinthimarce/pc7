<template>
    <v-container>
        <h1 class="justify-center">Empleados departamento</h1>
        <v-row>
            <v-col class="space">
                <v-form>
                    <v-container>
                        <v-row class="justify-center">
                            <v-col cols="12" sm="6" md="3">
                                Identificador (BusinessEntityID)
                                <v-text-field label="" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                Fecha contratación (inicio rango)
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                    :return-value.sync="date" transition="scale-transition" offset-y max-width="290px"
                                    min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="date" label="dd-mm-aaaa" prepend-icon="mdi-calendar"
                                            readonly v-bind="attrs" v-on="on" outlined></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" type="month" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="menu = false">
                                            Cancel
                                        </v-btn>
                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    Fecha contratación (fin rango)
                                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent
                                        width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="date" label="dd-mm-aaaa"
                                                prepend-icon="mdi-calendar" readonly v-bind="attrs"
                                                v-on="on" outlined></v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" type="month" scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="modal = false">
                                                Cancel
                                            </v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                                OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-col>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn depressed color="primary" @click.prevent="infoEmpleados(id)">{{ departments.employee}}Filtrar</v-btn>
                        </v-row>
                        
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'empleados-view',
    // props: {},
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