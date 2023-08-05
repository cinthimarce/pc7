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
                                    Nombre departamento
                                </th>
                                <th class="text-left font-weight-bold">
                                    Grupo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="departments in departments" v-bind:key="departments.DepartmentID">
                                <td>{{ departments.DepartmentID }}</td>
                                <td>{{ departments.Name }}</td>
                                <td>{{ departments.GroupName }}</td>
                                <td><v-btn depressed color="primary" @click="verEmpleados(id)">{{ departments.employee }}Ver empleados</v-btn></td>
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

import {mapState, mapActions} from 'vuex'
export default {
    name: 'departamentos-view',
    //props: {},
    data: function () {
        return {
            pcurrentPage: 4,
            totalItems: 5,
            itemsPerPage: 10
        }
    },
    computed: {
        ...mapState(['departments']),

        paginatedData(itemsPerPage) {
            return itemsPerPage;
    }

    },
    
    methods:{
        ...mapActions(['fetchDepartments']),
        verEmpleados(id){
            this.$router.push(`/empleadosdepartamento/${id}`)
        }
    },
    
    
    //watch: {},
    //components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
    this.fetchDepartment()
  }
    // -- End Lifecycle Methods

}
</script>

<style scoped>
.space {
    height: 60vh;
}
</style>