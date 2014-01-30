@hasValidEmail = ->
	new RegExp("^.*@shef(field)?.ac.uk", 'i').test(Meteor.user().services?.google?.email)
	
@isCurrentStudent = ->
	Records.findOne({email: new RegExp(Meteor.user().services?.google?.email, 'i')})?

@isAdmin = ->
	user = Meteor.user()
	if user
		user.services?.google?.email is "crwinward1@sheffield.ac.uk"
	else
		null

@isAdmin1 = (email) ->
	email.toLowerCase() is "crwinward1@sheffield.ac.uk"

@userEmail = ->
	if Meteor.user()
		Meteor.user().services?.google?.email
	else
		"this"