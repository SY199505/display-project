<style lang="scss" scoped>
	.sign-container {
		width: 10rem;
		height: 1rem;
		display: flex;
		justify-content: space-around;
		.ask {
			width: 1rem;
			height: 100%;
			background: #f95862;
		}
		.signBtn {
			width: 4rem;
			height: 100%;
			background: #f95862;
			padding: 0 1rem 0 2rem;
		}
	}
</style>

<template>
	<div class="sign-container" v-if="ifShowBtn">
		<div class="ask"></div>
		<div class="signBtn">
			<a href="javascript:void(0);">点击报名</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			ifShowBtn: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			toggleBtn (data) {
				this.ifShowBtn = data
			}
		}
	}
</script>