<template>
	<v-form>
		<v-row>
			<v-col>
				<h1 class="text-center light-blue--text text--darken-3">Registro de Autores</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="6">
				<v-text-field label="Nombre completo del autor"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field label="País del autor"></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="d-flex">
				<v-btn
					dark
					class="light-blue darken-2 mx-auto"
				>Crear autor</v-btn>
			</v-col>
		</v-row>
		<v-snackbar
			v-model="snackbar"
			top
			right
		>
	</v-form>
</template>

<script>
export default {
	name: 'CreateAuthor',
	data () {
		return {
			name: '',
			country: '',
			snackbar: false
		}
	}
}
</script>

<style lang="scss" scoped>
</style>