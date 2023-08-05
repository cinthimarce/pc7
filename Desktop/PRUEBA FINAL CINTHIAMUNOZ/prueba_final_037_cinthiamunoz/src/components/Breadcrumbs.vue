<template>
    
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
</template>

<script>
export default {
    name: 'breadcrumbs-view',
    props: {
      crumbs: {
        type: Array,
        required: true
      }
    },
    data: function(){
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
    methods: {
      isLast(index){
        return index === this.crumbs.length -1;
      },
      selected(crumb){
        this.$emit('selected', crumb);
      }
    }
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