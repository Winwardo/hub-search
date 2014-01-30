Router.configure
	layoutTemplate: 'layout'

Router.map ->
	@route 'home',
		path: '/'
		template: 'home'

	@route 'feedback',
		path: '/feedback'
		template: 'feedback'

	@route 'admin',
		path: '/admin'
		template: 'adminSection'