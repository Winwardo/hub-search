Template.adminSection.helpers
	adminAccount: -> isAdmin()
	feedback: -> Feedback.find()
	userNames: -> Meteor.users.find()

Template.adminSection.events
	'click .btn-delete': (e, template) ->
		e.preventDefault()

		Meteor.call("remove-feedback", this._id)