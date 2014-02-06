Template.adminSection.helpers
	adminAccount: -> isAdmin()
	feedback: -> Feedback.find()
	userNames: -> Meteor.users.find()
	project: -> Session.get("userData").project
	hub: -> Session.get("userData").hub

Template.adminSection.events
	'click .btn-delete': (e, template) ->
		e.preventDefault()

		Meteor.call("remove-feedback", this._id)
	'click #btn-force-project': (e, template) ->
		e.preventDefault()

		data = Session.get("userData")
		data.project = $('#force-project').val()

		Session.set("userData", data)

	'click #btn-force-hub': (e, template) ->
		e.preventDefault()

		data = Session.get("userData")
		data.hub = $('#force-hub').val()

		Session.set("userData", data)