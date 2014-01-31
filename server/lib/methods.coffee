Meteor.startup ->
	Meteor.methods
		"insert-feedback": (message) ->
			Feedback.insert
				user: @userId
				name: Meteor.user().profile.name
				email: Meteor.user().services?.google?.email
				message: message
				date: new Date().toISOString()
		"remove-feedback": (id) ->
			Feedback.remove(id)
		"chat-insert": (hub, group, message) ->
			date = new Date()
			hour = date.getHours().toString()
			minute = date.getMinutes().toString()

			hour = '0' + hour if hour.length is 1
			minute = '0' + minute if minute.length is 1

			Chat.insert
				hub: hub
				group: group
				user: @userId
				name: Meteor.user().profile.name
				message: message
				date: date.toISOString()
				time_short: hour + ':' + minute