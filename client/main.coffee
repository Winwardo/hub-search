Meteor.autorun ->
	if Meteor.user()
		data = Records.findOne({email: new RegExp(userEmail(), 'i')})
		if (data?)
			Session.set("userData", data)
		else
			Session.set("userData", Records.findOne({email: new RegExp("crwinward1@sheffield.ac.uk", 'i')}))

	