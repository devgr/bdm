(() => {
	'use strict';
	const Home = {
		template: '<p class="one-liner">{{attentionGetter}}</p>',
		data() {
			return {
				attentionGetter: 'Awesome musician and stuff'
			};
		}
	};
	const Bio = {
		template: '<p>bio bio bio bio bio</p>'
	};

	const routes = [
		{
			path: '/home',
			component: Home
		},
		{
			path: '/bio',
			component: Bio
		}
	];

	const router = new VueRouter({
		routes
	});

	const app = new Vue({
		router
	}).$mount('#app');
})();