<template>
  <v-container class="text-center font-weight-thin display-3 ma-4">
      <p>Lista de Cursos</p>
      <v-divider class="ma-8"></v-divider>
    <v-row justify-content="center">
      <v-col cols="12" md="4" lg="4"  v-for= "curso in cursos" :key="curso.id">
        <card :curso="curso" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Card from '@/components/Card.vue'
  import { mapState } from 'vuex';
  export default {
    name: 'Home-view',
    
    data: function(){
    return {
            model: null,
            classes: [
                ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
                ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
                ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
                ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
                ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
                ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
            ]
    }
    },
    components: {
      'card':Card,
    },
    computed: {
    ...mapState(['cursos']),
    },
  }
</script>
