<template>
	<footer>
		<h2>{{ footer }}</h2>
	</footer>
</template>

<script>
	export default {
		data () {
			return {
				footer: "FOOTER"
			}
		}
	}
</script>

<style scoped>
	footer {
		background: #222;
	}

	h1 {
		text-align: center;
	}
</style>