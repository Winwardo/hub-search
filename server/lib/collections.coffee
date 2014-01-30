Meteor.startup ->
	Meteor.publish "users", ->
		user = Meteor.users.findOne(@userId)

		if user? && isAdmin1(user.services.google.email)
			Meteor.users.find({}, {sort: {email: 1}})
		else
			Meteor.users.find({}, {fields: {_id: 1}})

	Meteor.publish "userData", ->
	    Meteor.users.find {_id: this.userId}, {fields: {_id: 1, "services.google.email": 1}}

	Meteor.publish "currentRecord", ->
		user = Meteor.users.findOne({_id: @userId})
		email = user.services?.google?.email

		record = Records.findOne({email: new RegExp(email, 'i')})

		if record? then record = Records.findOne({email: new RegExp("crwinward1@sheffield.ac.uk", 'i')})

	Meteor.publish "records", ->
		user = Meteor.users.findOne(@userId)

		if user?
			email = user.services?.google?.email

			currentRecord = Records.findOne({email: new RegExp(email, 'i')})
			project = if currentRecord? then currentRecord.project else ""

			Records.find({project: project})
		else
			null

	Meteor.publish "feedback", ->
		user = Meteor.users.findOne(@userId)
		if user? && isAdmin1(user.services.google.email)
			return Feedback.find({}, {sort: {date: -1}})
		else
			null