<template>
	<v-app>
		<v-content>
			<v-app-bar
				dark
				class="light-blue darken-2"
			>
				<v-toolbar-title>EdBookstore</v-toolbar-title>
				<v-spacer />
				<v-toolbar-items>
					<v-btn text>Inicio</v-btn>
					<v-btn text>Autores</v-btn>
					<v-btn text>Libros</v-btn>
				</v-toolbar-items>
			</v-app-bar>
			<v-container>
				<router-view />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>

export default {
	name: 'App',
};
</script>
