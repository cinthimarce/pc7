<template>
  <v-container fluid>
    <breadcr></breadcr>
    <v-row justify="space-around" align="center" class="img-dptos">
      <!-- DPTOS -->
      <v-col class="d-flex justify-content-center" >
        <v-card>
          <a href="departamentos">
            <v-img max-height="355" max-width="570" src="@/assets/img/departamentos.jpg" alt="img"></v-img>
          </a>
        </v-card>
      </v-col>
      <!-- EMPLOYER -->
      <v-col class="d-flex justify-content-center" >
        <v-card>
          <a href="empleados">
            <v-img max-height="355" max-width="570" src="@/assets/img/empleados.jpg" alt="img">
            </v-img>
          </a>
        </v-card>
      </v-col>
      <!-- TURNOS -->
      <v-col class="d-flex justify-content-center" >
        <v-card>
          <a href="turnos">
            <v-img max-height="355" max-width="570" src="@/assets/img/turnos.jpg" alt="img">
            </v-img>
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  name: 'home-view',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    'breadcr': Breadcrumbs
  },
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