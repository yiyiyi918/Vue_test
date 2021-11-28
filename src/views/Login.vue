<template>
	<TopBar></TopBar>
	<Login></Login>
	<BottomBar></BottomBar>
</template>

<script>
	import Login from '../components/Login.vue'
	import BottomBar from '../components/BottomBar.vue'
	import TopBar from '../components/TopBar.vue'
	export default {
		components:{Login,BottomBar,TopBar},
	}
</script>
<style>

</style>
