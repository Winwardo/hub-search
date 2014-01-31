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

	@route 'me',
		path: '/me'
		template: 'me'

	@route 'hub',
		path: '/hub'
		template: 'hub_main'

	@route 'group',
		path: '/group'
		template: 'group_main'

	@route 'chat',
		path: '/chat'
		template: 'chat_all'