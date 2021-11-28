<template>
	<TwoTopBar></TwoTopBar>
	<TwoSearchBar></TwoSearchBar>
	<HouseBar></HouseBar>
	<TwoBottomBar></TwoBottomBar>
</template>

<script>
	import TwoTopBar from '../components/TwoTopBar.vue'
	import TwoSearchBar from '../components/TwoSearchBar.vue'
	import TwoBottomBar from '../components/TwoBottomBar.vue'
	import HouseBar from '../components/HouseBar.vue'
	export default{
		components:{TwoTopBar,TwoSearchBar,TwoBottomBar,HouseBar},
		data(){
			return{
				
			}
		},
		methods:{
			
		},
	}
</script>

<style>
	
</style>
