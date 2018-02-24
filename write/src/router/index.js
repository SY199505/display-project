import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import newMember from '@/pages/newMember'
import homework from '@/pages/homework'
import article from '@/pages/article'
import mine from '@/pages/userCenter'
import userInfo from '@/pages/userInfo'
import account from '@/pages/account'
import faraway from '@/pages/faraway'
import penpal from '@/pages/penpal'
import question from '@/pages/question'
import invite from '@/pages/invite'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'App',
			redirect: '/sign',
			component: App
		},
		{
			path: '/sign',
			name: 'newMember',
			component: newMember
		},
		{
			path: '/homework',
			name: 'homework',
			component: homework
		},
		{
			path: '/article',
			name: 'article',
			component: article
		},
		{
			path: '/mine',
			name: 'userCenter',
			component: mine,
			children: [,
	    		{
					path: 'userInfo',
					name: 'userInfo',
					components: userInfo
	    		},
	    		{
					path: 'account',
					name: 'account',
					components: account
	    		},
	    		{
					path: 'faraway',
					name: 'faraway',
					components: faraway
	    		},
	    		{
					path: 'penpal',
					name: 'penpal',
					components: penpal
	    		},
	    		{
					path: 'question',
					name: 'question',
					components: question
	    		},
	    		{
					path: 'invite',
					name: 'invite',
					components: invite
	    		}
			]
		}        
	]
})
