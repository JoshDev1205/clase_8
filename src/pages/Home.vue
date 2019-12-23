<template>
  <v-container>
    <h1 class="light-blue--text text--darken-3">Bienvenido a EdBookstore</h1>
    <p class="font-italic light-blue--text text--accent-4">
      "La libreria digital de EdTeam"
    </p>
    <v-row>
      <v-btn dark color="blue lighten-1" to="/author" class="mr-4"
        >Gestión de Autores</v-btn
      >
      <v-btn dark color="indigo lighten-1" to="/book">Gestión de Libros</v-btn>
    </v-row>
  </v-container>
</template>
