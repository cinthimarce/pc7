<template>
    <v-card class="mx-auto px-6 py-8 font-weight-regular" min-width="600">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="URL de la imagen"
            required
            ></v-text-field>

            <v-text-field
            v-model="cupos"
            :rules="cuposCurso"
            label="Cupos del curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="inscritos"
            :rules="inscritosCurso"
            label="Inscritos en el curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="duracion"
            :rules="duracionCurso"
            label="Inscritos en el curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="registro"
            :rules="fechaRegistro"
            label="Fecha de registro"
            required
            ></v-text-field>

            <v-text-field
            v-model="costo"
            :rules="costoCurso"
            label="Costo del curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="descripcion"
            :rules="descripcionCurso"
            label="Descripcion del curso"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Agregar
            </v-btn>

            <v-btn
            color="warning"
            class="mr-4"
            @click="reset"
            >
            Limpiar Formulario
            </v-btn>

            <v-btn
            color="error"
            @click="resetValidation"
            >
            Cancelar
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
  export default {
    name: 'agregar-curso-view',
    data: () => ({
        nombre: '',
            img:'',
            cupos:undefined,
            inscritos:undefined,
            duracion:'',
            registro:'',
            costo:undefined,
            completado:'false',
            descripcion:'',
            loading:false,
            form: false,

      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
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
      agrCurso(){
            let nuevoCurso ={
                nombre: this.nombre,
                img: this.img,
                cupos: parseInt(this.cupos),
                duracion: this.duracion,
                inscritos: parseInt(this.inscritos),
                completado: this.completado,
                fecha_registro: this.registro,
                costo: parseInt(this.costo),
                descripcion: this.descripcion,
            }
            this.$emit('agregarCurso',nuevoCurso)
        },
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