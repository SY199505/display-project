<style lang="scss" scoped>
	.container {
		display: flex;
		background-color: #efeff4;
		.containerBlock {
			margin-bottom: .4rem;
			background-color: #fff;
		}
		.lineColumn {
			width: 1px;
			background-color: #d9d9d9;
		}
		.lineRow {
			margin: .3rem 0;
			height: 1px;
			background-color: #d9d9d9;
		}
		.userDetail {
			.detailBox {
				padding: .5rem;
				display: flex;
				flex-direction: row;
				flex: 1;
				align-items: center;
				border-bottom: 1px solid #d9d9d9;
				img {
					width: 2rem;
					height: 2rem;
					flex: 2;
				}
				.nameBox {
					flex: 5;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					text-align: center;
				}
				.lastDay {
					flex: 2;
					font-size: .35rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					width: .5rem;
					height: 1.5rem;
					background-color: #ad8a54;
					border-radius: .13rem;
					color: #fff;
					.dayNum {
						font-size: .5rem;
					}
				}
				.more {
					flex: 1;
					text-align: right;
					color: #999;
				}
			}
			.achieventmentBox {
				display: flex;
				flex-direction: row;
				text-align: center;
				.achieventmentBlock {
					flex: 1;
					display: flex;
					flex-direction: column;
					padding: .1rem 0;
					.count {
						font-weight: bold;
						font-size: 1rem;
						font-size: .7rem;
					}
					.blockName {
						color: #333;
						opacity: .6;
						filter: alpha(opacity=60);
						font-size: .4rem;
					}
				}
			}
		}
		.lastWeeks {
			.lastWeeksTit {
				font-size: .4rem;
				font-weight: bolder;
				text-indent: .5rem;
				padding: .3rem 0;				
				border-bottom: 1px solid #d9d9d9;
			}
			.lastWeeksDetail {
				padding: .4rem .5rem;
				.weekNum {
					position: relative;
					z-index: 2;
					color: #fff;
					height: .7rem;
				}
				.weekNum::after {
					content: '5周';
					display: block;
					position: absolute;
					left: 0;
					top: 0;
					width: 1.5rem;
					height: .7rem;
					background-color: #f00;
					border-radius: 1rem;
					background-color: rgba(173, 138, 84, 0.2);
					text-align: center;
					color: #9c7843;
				}
				.progressBar {
					position: relative;
					width: 100%;
					height: .3rem;
					background-color: #000;
					border-radius: .25rem;
					margin: .35rem 0 .15rem;
				}
				.progressBar::after {
					content: '';
					display: block;
					position: absolute;
					left: 0;
					top: 0;
					width: 15%;
					height: .3rem;
					background-color: #f00;
					border-radius: .25rem;
				}
				.timeStamp {
					font-size: .32rem;
					color: #878787;
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.charge, .activity, .tips {
			padding: .3rem 0 .3rem .5rem;
		}
		.arrow {
			// color: #f00;
		}
		.arrow .routerItem::after {
			// content: '\25AE'
			// font-family: sans-serif;
		}
	}
</style>

<template>
	<div class="container">
		<div class="containerBlock userDetail">
			<div class="detailBox">
				<img src="../assets/logo.png" alt="">
				<div class="nameBox">
					<div class="name">name</div>
					<div class="school">class</div>
				</div>
				<div class="lastDay">
					<span class="dayNum">245</span>
					<span>坚持天数</span>
				</div>
				<div class="more" @click="more">
					<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
				</div>	
			</div>
			<div class="achieventmentBox">
				<div class="achieventmentBlock">
					<span class="count">20</span>
					<span class="blockName">我的作业</span>
				</div>
				<div class="lineColumn"></div>
				<div class="achieventmentBlock">
					<span class="count">20</span>
					<span class="blockName">我的作业</span>
				</div>
				<div class="lineColumn"></div>
				<div class="achieventmentBlock">
					<span class="count">20</span>
					<span class="blockName">我的作业</span>
				</div>
			</div>
		</div>
		<div class="containerBlock lastWeeks">
			<div class="lastWeeksTit">坚持周长</div>
			<div class="lastWeeksDetail">
				<div class="weekNum">ff</div>
				<div class="progressBar"></div>
				<div class="timeStamp">
					<span class="startTime">2018/01/06</span>
					<span class="endTime">2019/01/05</span>
				</div>
			</div>
		</div>
		<div class="containerBlock charge arrow">
			<div class="routerItem">我的账户</div>
			<div class="lineRow"></div>
			<div class="routerItem">我的远方</div>
			<div class="lineRow"></div>
			<div class="routerItem">我的笔友</div>
		</div>
		<div class="containerBlock activity arrow">
			<div class="routerItem">问题咨询</div>
			<div class="lineRow"></div>
			<div class="routerItem">有奖邀请</div>
		</div>
		<div class="containerBlock tips">
			<div class="routerItem">11111</div>
			<div class="lineRow"></div>
			<div class="routerItem">11111</div>
			<div class="lineRow"></div>
			<div class="routerItem">11111</div>
		</div>
	</div>
</template>

<script>
	import 'font-awesome/css/font-awesome.css'
	export default {
		name: 'userCenter',
		methods: {
			more () {
				console.log(this.$router);
				this.$router.push({
					name: 'mine/userInfo'
				})
				console.log(this.$router);
			}
		}
	}
</script>