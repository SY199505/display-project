<style lang="scss">
	.on {
		color: #f00;
	}
</style>

<template>
	<div @click="likeToggle">
		<i class="fa fa-heart" :class="{ on: isLike }" aria-hidden="true"></i>
		<span class="num">{{ likeNum }}</span>
	</div>
</template>

<script>
	export default {
		name: 'likeBtn',
		props: {
			likeNum: {
				type: Number,
				default: 0
			},
			bLike: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				isLike: false
			}
		},
		methods: {
			likeToggle () {
				this.isLike = !this.isLike
				this.$emit('likeToggle')
			}
		},
		created () {
			this.isLike = this.bLike
		}
	}
</script>