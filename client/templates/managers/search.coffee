
Template.search.events
	'click #th-department': (e, template) -> Session.set("currentSort", {department: 1, name: 1})
	'click #th-name': (e, template) -> Session.set("currentSort", {name: 1})
	'click #th-email': (e, template) -> Session.set("currentSort", {email: 1})
	'click #th-group': (e, template) -> Session.set("currentSort", {group: 1, name: 1})
	'click .a-project': (e, template) ->
		Session.set("search-term", $(e.target).html())
		Session.set("currentSort", {group: 1, name: 1})
		Session.set("search-by", "project")

Template.search.helpers
	searchItems: ->
		# First get the project
		project = Session.get("userData").project

		# Now return all the other students
		Records.find(
			{	
				"project": project
			},
			{
				limit: 50
				sort: Session.get("currentSort")
			}
		)

	email_trunc: ->
		this.email.split("@")[0] + "@"

	buildingMap: ->
		switch @building
			when "Portobello" then "https://goo.gl/maps/FvMbi"
			when "Hicks" then "https://goo.gl/maps/Rj7EA"
			when "Eng Grad School" then "https://goo.gl/maps/kV5Mm"
			when "Enterprise" then "https://goo.gl/maps/LhJpO"
			when "Mappin" then "https://goo.gl/maps/1Esqm"
			when "Hadfield" then "https://goo.gl/maps/jgqn1"
			else "#"
	projNum: ->
		match = new RegExp("EYH(.*)-").exec(this.project)
		if match? then match[1] else ""

	myUser: ->
		if Meteor.user()
			data = Records.findOne({email: new RegExp(Meteor.user().services.google.email, 'i')})
			if (data?)
				Session.set("userData", data)
			else
				Session.set("userData", Records.findOne({email: new RegExp("crwinward1@sheffield.ac.uk", 'i')}))

		Session.get("userData")

	hasAccount: -> Records.findOne({email: new RegExp(Meteor.user()?.services?.google?.email, 'i')})?
	currentEmail: -> Meteor.user()?.services?.google?.email
	hasValidAccount: -> new RegExp("^.*@shef(field)?.ac.uk").exec(Meteor.user()?.services?.google?.email)