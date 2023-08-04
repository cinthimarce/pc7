<template>
    <div class="card" style="width: 18rem;">
        <img :src="src" class="card-img-top" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title"></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: </li>
            <li class="list-group-item">Release:</li>
            <li class="list-group-item">Update:</li>
        </ul>
        <div class="card-body">
            <button class="btn btn-primary" type="submit">Opinar</button>
            <span class="mdi mdi-heart"></span>
        </div>
    </div>
</template>

  <script>
  export default {
    name: 'ListadeJuegos',
    props: {
        name: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        release: {
            type: String,
            required: true
        },
        update: {
            type: String,
            required: true
        },
  
  
    },
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
  }
  </script>
  
  <style scoped>
  .mdi {
    color: red;
    padding: 5px;
    font-size: 25px;
  }
  </style>