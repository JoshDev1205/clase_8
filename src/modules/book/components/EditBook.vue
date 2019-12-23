<template>
  <v-form ref="main" @submit.prevent="updateBookData()">
    <v-row>
      <v-col>
        <h1 class="text-center light-blue--text text--darken-3">
          Actualización de Libros
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="book.title"
          label="Tituló del libro"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="book.description"
          label="Descripción del libro"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="book.quantity"
          label="Cantidad de libros"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="book.price"
          label="Preció del libro"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="book.author._id"
          :items="authors"
          item-text="name"
          item-value="_id"
          label="Autor del libro"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-btn type="submit" dark class="light-blue darken-2 mx-auto"
          >Actualizar libro</v-btn
        >
      </v-col>
    </v-row>
    <v-snackbar color="success" v-model="snackbar" top right
      >Libro Modificado!</v-snackbar
    >
  </v-form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EditBook",
  data() {
    return {
      title: "",
      description: "",
      quantity: 0,
      price: 0,
      authorid: "",
      snackbar: false
    };
  },
  computed: {
    ...mapState("author", ["authors"]),
    ...mapState("book", ["book"])
  },
  created() {
    const { id } = this.$route.params;
    this.getAllAuthors();
    this.getBookById(id);
  },
  methods: {
    ...mapActions("author", ["getAllAuthors"]),
    ...mapActions("book", ["updateBook", "getBookById"]),
    updateBookData() {
      const { id } = this.$route.params;
      this.updateBook({ id });
      this.snackbar = true;
    }
  }
};
</script>
