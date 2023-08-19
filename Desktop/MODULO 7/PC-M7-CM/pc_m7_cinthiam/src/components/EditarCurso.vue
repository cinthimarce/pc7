<template>
    <v-card class="mx-auto px-6 py-8 font-weight-regular" min-width="600">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="nombre"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
            ></v-text-field>

            <v-text-field
            v-model="img"
            label="URL de la imagen"
            required
            ></v-text-field>

            <v-text-field
            v-model="cupos"
            label="Cupos del curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="inscritos"
            label="Inscritos en el curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="duracion"
            label="Inscritos en el curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="registro"
            label="Fecha de registro"
            required
            ></v-text-field>

            <v-text-field
            v-model="terminado"
            label="Terminado"
            required
            ></v-text-field>

            <v-text-field
            v-model="costo"
            label="Costo del curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="descripcion"
            label="Curso con las nuevas actualizaciones de Javascript"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Editar
            </v-btn>

            <v-btn
            color="error"
            @click="resetValidation"
            >
            Cerrar
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'editar-curso-view',
    data: () => ({
      valid: true,
      nombre: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>

<style scoped>
    
</style>