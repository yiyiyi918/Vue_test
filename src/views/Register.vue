<template>
	<TopBar></TopBar>
	<Register></Register>
	<BottomBar></BottomBar>
</template>

<script>
	import Register from '../components/Register.vue'
	import BottomBar from '../components/BottomBar.vue'
	import TopBar from '../components/TopBar.vue'
	export default {
		components:{Register,BottomBar,TopBar},
	}
</script>

<style>
</style>
