<template>
	<TopBar></TopBar>
	<History></History>
	<BottomBar></BottomBar>
</template>

<script>
	import History from '../components/History.vue'
	import BottomBar from '../components/BottomBar.vue'
	import TopBar from '../components/TopBar.vue'
	export default {
		components:{History,BottomBar,TopBar},
	}
</script>

<style>
</style>
