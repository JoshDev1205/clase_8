<template>
  <div>
    <h1 class="light-blue--text text--darken-3">
      Bienvenido a la sección de libros
    </h1>
    <p class="font-italic light-blue--text text--accent-4">
      "Aquí podrás gestionar tus libros"
    </p>
    <v-row>
      <v-col cols="6">
        <v-btn class="mr-4" dark color="light-blue darken-3" to="/book/create"
          >Crear Libro</v-btn
        >
        <v-btn dark color="blue darken-1" to="/book/list"
          >Lista de Libros</v-btn
        >
      </v-col>
    </v-row>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "BookPage"
};
</script>
