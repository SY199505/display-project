<style lang="scss" scoped>
	.nav-container {
		color: #3c3c3c;
		border-top: 0.05rem solid #d9d9d9;	
		.nav-box {
			display: flex;
			flex-direction: row;
			justify-content: space-around;	
           	height: 1.45rem;
			align-items: flex-end;
			transition-duration: time;
			.nav-item {
				display: flex;
				flex-direction: column;
				font-size: .35rem;
				i {
					font-size: .7rem;
					color: grey;
				}
				&.on {
					color: #000;
					i {
						color: #000;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="nav-container">
		<ul class="nav-box">
			<router-link v-for="(item, index) in navList" tag="li" :to="item.link" active-class="on" :key="index" class="nav-item">
				<i class="fa" :class="item.iconName"></i>
				<span>{{ item.name }}</span>
			</router-link>
		</ul>
	</div>
</template>
				
<script>
	import 'font-awesome/css/font-awesome.css'
	export default {
		data () {
			return {
				navList: [
					{
						link: 'sign',
						name: '报名',
						iconName: 'fa-home'
					},
					{
						link: 'homework',
						name: '作业',
						iconName: 'fa-bars'
					},
					{
						link: 'article',
						name: '文章',
						iconName: 'fa-pencil-square'
					},
					{
						link: 'mine',
						name: '我的',
						iconName: 'fa-user'
					}
				]
			}
		},
		methods: {

		}
	}
</script>