<style lang="scss">
	.navList {
		width: 10rem;
		height: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		color: #969696;
		.on {
			color: #000;
		}
	}
</style>

<template>
	<div>
		<ul class="navList">
			<li v-for="(item, index) in list" @click="select(index)" :class="[item.iconName, { on: selected == index }]">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'slideNav',
		data () {
			return {
				selected: 1
			}
		},
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		methods: {
			select (data) {
				this.selected = data
			}
		}
	}
</script>