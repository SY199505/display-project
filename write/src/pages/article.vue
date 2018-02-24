<style lang="scss" scoped>
	
</style>

<template>
	<item-list :homeworkTypeList="homeworkTypeList" :homeworkList="homeworkList"></item-list>
</template>

<script>
	import itemList from '@/components/itemList'
	export default {
		name: 'articlePage',
		components: {
			itemList
		},
		data () {
			return {
				homeworkTypeList: [
					{
						name: '优秀金句'
					},
					{
						name: '全部金句'
					},
					{
						name: '我的金句'
					}
				],
				homeworkList: [
					{
						tit: 'first',
						description: 'description',
						time: '2018-2-4',
						// watchType: 0,
						likeNum: 143,
						bLike: true
					},
					{
						tit: 'second',
						description: 'description',
						time: '2018-2-4',
						watchType: 1,
						likeNum: 0,
						bLike: false
					}
				]
			}			
		}
	}
</script>