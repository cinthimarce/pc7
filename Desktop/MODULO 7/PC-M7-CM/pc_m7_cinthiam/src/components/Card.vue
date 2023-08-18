<template>
    <v-container>
        <v-row justify="space-around">
            <v-card width="300">

                <v-img min-height="300" min-width="300" :src="curso.img"></v-img>

                <v-card-text>

                    <div class="font-weight-bold ml-8 mb-2 title text-left">
                        <strong>{{ curso.nombre }}</strong>
                    </div>
                    <div class="font-weight-bold ml-8 mb-2 text-left">Información</div>

                    <v-timeline density="compact" align="start" align-top dense>
                        
                        <v-timeline-item color="deep-purple lighten-1">
                            <div>
                                <div class="font-weight-normal">
                                    <strong>Costo: {{ curso.costo.toLocaleString('es-CL') }}</strong>
                                </div>
                                <div>Duración: {{ curso.duracion }}</div>
                            </div>
                        </v-timeline-item>
                        
                        <v-timeline-item color="green">
                            <div class="font-weight-normal">
                                <strong>Cupos: {{ curso.cupos }}</strong>
                            </div>
                            <div>Completado: {{ curso.completado }}</div>
                            
                        </v-timeline-item>
                        
                        <v-timeline-item color="deep-purple lighten-1">
                            <div>
                                <div class="font-weight-normal">
                                    <strong>Fecha de registro:</strong>
                                </div>
                                <div>{{ curso.fecha_registro }}</div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item color="green">
                            <div class="font-weight-normal">
                                <strong>Descripción:</strong>
                            </div>
                            <div>{{ curso.descripcion }}</div>
                            
                        </v-timeline-item>

                    </v-timeline>
                </v-card-text>
            </v-card>

        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'card-view',
    props: {
        curso: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {

        }
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

<style scoped></style>