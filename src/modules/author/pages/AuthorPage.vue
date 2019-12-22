<template>
	<div>
		<v-row>
			<v-col cols="6">
				<v-btn
					class="mr-4"
					dark
					color="light-blue darken-3"
					to="/author/create"
				>Crear Autor</v-btn>
				<v-btn
					dark
					color="cyan accent-4"
					to="/author/list"
				>Lista de Autores</v-btn>
			</v-col>
		</v-row>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'AuthorPage',
}
</script>

<style lang="scss" scoped>
</style>