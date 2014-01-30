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