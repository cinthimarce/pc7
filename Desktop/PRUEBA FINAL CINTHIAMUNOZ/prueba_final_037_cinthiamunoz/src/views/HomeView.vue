<template>
  <v-container fluid>
    <!-- BREADCRUMBS -->
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <!-- IMAGENES -->

    <v-row justify="space-around" align="center" class="img-dptos">
      <!-- DPTOS -->
      <v-col class="d-flex justify-content-center">
        <v-card>
          <v-img max-height="355" max-width="570" src="@/assets/img/departamentos.jpg">
          </v-img>
        </v-card>
      </v-col>
      <!-- EMPLEADOS -->
      <v-col class="d-flex justify-content-center">
        <v-card>
          <v-img max-height="355" max-width="570" src="@/assets/img/empleados.jpg">
          </v-img>
        </v-card>
      </v-col>
      <!-- TURNOS -->
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
    return {
      items: [
        {
          text: 'Inicio',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },

      ],
    }

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
.img-dptos {
  height: 60vh;
}
</style>

