<template>
  <v-container fluid>
    <v-row justify="space-around" align="center" class="img-dptos">


      <v-col class="d-flex justify-content-center">
        <v-card>
          <v-img max-height="355" max-width="570" src="@/assets/img/departamentos.jpg">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-content-center">
        <v-card>
          <v-img max-height="355" max-width="570" src="@/assets/img/empleados.jpg">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-content-center">
        <v-card>
          <v-img max-height="355" max-width="570" src="@/assets/img/turnos.jpg">
          </v-img>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>

export default {
  name: 'Home-view',
  // props: {},
  data: function () {
    return {}
    
  },
  // computed: {},
  //methods: {}
  // watch: {},
  //components: {
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
.img-dptos{
  height: 60vh;
}
</style>

