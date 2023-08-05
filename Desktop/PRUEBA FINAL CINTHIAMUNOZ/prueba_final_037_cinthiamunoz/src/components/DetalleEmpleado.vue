<template>
        <v-container>
        <v-row justify="center">
            <v-col class="space">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr >
                                <th class="text-left font-weight-bold dark">
                                    Identificador
                                </th>
                                <th class="text-left font-weight-bold">
                                    Cédula (Número nacional)
                                </th>
                                <th class="text-left font-weight-bold">
                                    Fecha contratación
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employees in employees" v-bind:key="employees.businessentityid">
                                <td>{{ employees.businessentityid }}</td>
                                <td>{{ employees.nationalidnumber }}</td>
                                <td>{{ employees.hiredate }}</td>
                                
                                <v-btn depressed color="primary" >Ver detalle</v-btn>
                            </tr>
                            
                            <!-- <tr>
                                <td><v-btn depressed color="primary">Primary</v-btn></td>
                            </tr> -->
                        </tbody>
                        <div class="text-center">
                            <v-pagination justify-center
                            v-model="currentPage"
                            :length="totalItems"
                            :items-per-page="itemsPerPage"
                            circle
                            ></v-pagination>
                        </div>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'detalle-empleado-view',
    // props: {},
    data: function(){
        return {}
    },
    /* computed: {
        ...mapState(['employee']),
    }, */
    /* methods: {
        
    }, */
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
    this.fetchEmployees()
  }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>