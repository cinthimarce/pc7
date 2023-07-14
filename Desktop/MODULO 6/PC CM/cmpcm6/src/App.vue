<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-icon
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-icon>mdiheadphones</v-icon>
        
        <span class="mr-2">Games opinion</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target=""
        text
      >
        <v-icon>mdihome</v-icon>
        <span class="mr-2 "> Home</span>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
