Template.feedback.helpers
	name: -> Session.get("userData")?.name
	email: -> Session.get("userData")?.email

Template.feedback.events
	'submit form': (event, template) ->
		event.preventDefault()

		Meteor.call("insert-feedback", $("#txt-feedback").val())
		$("#btn-send").hide('slow')
		$("#alert-feedback").show('slow')