<template>
  <div class="home">
    <br>
    <h1>Lista de Juegos disponibles</h1>
    <br>
    <div>
      <ListadeJuegos>
      </ListadeJuegos>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import axios from "axios";
import ListadeJuegos from '@/components/ListadeJuegos.vue'

export default {
  name: 'home-view',
  data: function(){
    return {
      //key: '5dbe2557b132492aba115b0339bc0300',
      //juegos:[],
    }
  },
  components: {
    ListadeJuegos
  },
  //methods: {},

  
}
</script>
