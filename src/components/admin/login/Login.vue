<template>
	<v-sheet class="px-4" light color="white" tile height="100%" id="login">
		<div class="mt-8 d-flex flex-column align-center mb-8">
			<v-img width="112px"  src="@/assets/img/logo-fire-stacks.png"></v-img>
			<span class="mt-2 title text-center">Empowered by Fire Stacks</span>
		</div>
		<LoginCard />
	</v-sheet>
</template>

<script>
import LoginCard from './LoginCard.vue'

export default {
	name: 'Login',
	components: { LoginCard }
}
</script>

<style>

</style>