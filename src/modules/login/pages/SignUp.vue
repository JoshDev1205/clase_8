<template>
	<v-container
		fluid
		class="fill-height"
	>
		<v-row
			align="center"
			justify="center"
		>
			<v-col cols="6">
				<v-card class="elevation-12">
					<v-form @submit.prevent="signUp()">
						<v-toolbar
							flat
							color="light-blue darken-2"
							dark
						>
							<v-toolbar-title class="mx-auto">Registrate en EDBookstore</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-text-field
								v-model="email"
								label="email"
								name="email"
								prepend-icon="person"
								type="text"
							></v-text-field>
							<v-text-field
								v-model="password"
								label="password"
								name="password"
								prepend-icon="lock"
								type="password"
							></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-btn
								color="light-blue darken-2"
								dark
								to="/signin"
							>
								Ingresar
							</v-btn>
							<v-spacer></v-spacer>
							<v-btn
								type="submit"
								color="light-blue darken-2"
								dark
							>Registrarse</v-btn>
						</v-card-actions>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	name: 'SignUp',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signUp () {
			const user = { email: this.email, password: this.password }
			this.$store.dispatch('login/signUp', user)
			this.$router.push('/')
		}
	}
}
</script>