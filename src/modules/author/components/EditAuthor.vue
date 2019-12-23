<template>
  <v-form ref="main" @submit.prevent="updateAuthorData()">
    <v-row>
      <v-col>
        <h1 class="text-center light-blue--text text--darken-3">
          Actualización de autor
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="author.name"
          label="Nombre completo del autor"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="author.country"
          label="País del autor"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-btn type="submit" dark class="light-blue darken-2 mx-auto"
          >Actualizar autor</v-btn
        >
      </v-col>
    </v-row>
    <v-snackbar color="success" v-model="snackbar" top right
      >Autor Modificado!</v-snackbar
    >
  </v-form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EditAuthor",
  data() {
    return {
      name: "",
      country: "",
      snackbar: false
    };
  },
  methods: {
    ...mapActions("author", ["getAuthorById", "updateAuthor"]),
    updateAuthorData() {
      const { id } = this.$route.params;
      this.updateAuthor({ id });
      this.snackbar = true;
    }
  },
  computed: {
    ...mapState("author", ["author"])
  },
  created() {
    const { id } = this.$route.params;
    this.getAuthorById(id);
  }
};
</script>

<style lang="scss" scoped></style>
