Template.search.events
	'click #th-department': (e, template) -> Session.set("currentSort", {department: 1, name: 1})
	'click #th-name': (e, template) -> Session.set("currentSort", {name: 1})
	'click #th-email': (e, template) -> Session.set("currentSort", {email: 1})
	'click #th-group': (e, template) -> Session.set("currentSort", {group: 1, name: 1})

Template.search.helpers
	searchItems: ->
		Records.find({}, {sort: Session.get("currentSort")})

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

	currentRecord: -> Session.get("userData")

	isCurrentStudent: -> isCurrentStudent()