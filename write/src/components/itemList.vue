<style lang="scss">
	.todoList {
		display: flex;
		flex-direction: column;
		li {
			padding: .4rem .5rem;
			.listHeader {
				display: flex;
				justify-content: space-between;
				.tit {
					flex: 9;
				}
				.more {
					flex: 1;
					text-align: right;
				}
			}
			.listFooter {
				display: flex;
				justify-content: space-between;
				.time {
					flex: 1;
				}
				.markBox {
					flex: 2;
					display: flex;
					text-align: right;
					.tip {
						flex: 2;
					}
					.favorite {
						flex: 1;
						justify-content: flex-end;
					}
				}
			}
		}
	}
</style>

<template>
	<div>
		<slide-nav :list="homeworkTypeList"></slide-nav>
		<ul class="todoList">
			<li v-for="(item, index) in homeworkList">
				<div class="listHeader">
					<div class="tit">{{ item.tit }}</div>
					<div class="more">...</div>
				</div>
				<div class="des">{{ item.description }}</div>
				<div class="listFooter">
					<div class="time">{{ item.time }}</div>
					<div class="markBox">
						<div class="tip" v-if="item.watchType == 0">
							<i class="fa fa-lock"></i>
							仅自己可见
						</div>
						<like-btn @likeToggle="likeToggle(index)" :likeNum="item.likeNum" :bLike="item.bLike" class="favorite"></like-btn>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import 'font-awesome/css/font-awesome.css'
	import slideNav from '@/components/slideNav'
	import likeBtn from '@/components/likeBtn'
	export default {
		name: 'itemList',
		components: {
			slideNav,
			likeBtn
		},
		props: {
			homeworkTypeList: {
				type: Array,
				default: []
			},
			homeworkList: {
				type: Array,
				default: []
			}
		},
		data () {
			return {
			}
		},
		methods: {
			likeToggle (data) {
				let clickItem = this.homeworkList[data]
				clickItem.likeNum = clickItem.bLike ? clickItem.likeNum - 1 : clickItem.likeNum + 1
				clickItem.bLike = !clickItem.bLike
				console.log(clickItem.likeNum);
			}
		}
	}
</script>