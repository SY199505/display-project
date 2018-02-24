<style lang="scss" scoped>
	.img-list {
		width: 100%;
		li {
			.item {
				width: 100%;
				height: 100%;
			}
		}
	}
	#scrollStage {
		// display: flex;
		// align-items: center;
		// flex-direction: column;
		// justify-content: space-between;
		position: absolute;
		width: 100%;
		height: 100%;
		transform-origin: center center;
		perspective: 500;
		perspective-origin: 50% 50%;
		li {
			position: absolute;
			left: 50%;
			top: 50%;
		    transform: translate(-50%, -50%);
			width: 6rem;
			height: 4rem;
			background-color: #0f0;
			.scrollImg {
				width: 100%;
				height: 100%;
			}
			&.red {
				background-color: red;
				transform: rotateX(60deg);
				transform-style: preserve-3d;
			}
			.black {
				background-color: black;
			}
			.blue {
				background-color: blue;
			}
			.pink {
				background-color: pink;
			}
			.purple {
				background-color: purple;
			}
			.yellow {
				background-color: yellow;
			}
		}
	}
</style>

<template>
	<div>
		<ul class="img-list">
			<li v-for="(item, index) in imgList" :key="item.index">
				<img class="item" :src="item.src">
			</li>
		</ul>
		<!-- <ul id="scrollStage">
			<li class="red">
				<div class="scrollImg"></div>
			</li>
			<li>
				<div class="scrollImg black"></div>
			</li>
			<li>
				<div class="scrollImg blue"></div>
			</li>
			<li>
				<div class="scrollImg pink"></div>
			</li>
			<li>
				<div class="scrollImg purple"></div>
			</li>
			<li>
				<div class="scrollImg yellow"></div>
			</li>
		</ul> -->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				imgList: {
					type: Array,
					default: []
				}
			}
		},
		components: {
	
		},
		mounted () {
			this.imgList = [
				{
					src: 'https://cdn.uis.cc/img/2016/3/29/react-lifecycle.png'
				},
				{
					src: 'https://cn.vuejs.org/images/lifecycle.png'
				}
			]
		}
	}
</script>