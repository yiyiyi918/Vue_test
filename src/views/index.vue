<template>
	<TopBar></TopBar>
	<CarouselBar></CarouselBar>
	<SearchBar></SearchBar>
	<House></House>
	<BottomBar></BottomBar>
</template>

<script>
	import TopBar from '../components/TopBar.vue'
	import CarouselBar from '../components/CarouselBar.vue'
	import House from '../components/house.vue'
	import BottomBar from '../components/BottomBar.vue'
	import SearchBar from '../components/SearchBar.vue'
	export default {
		components:{TopBar,CarouselBar,House,BottomBar,SearchBar},
	}
</script>

<style>
</style>
