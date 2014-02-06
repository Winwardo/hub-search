Template.my_hub.helpers
	searchItems: ->
		Records.find({project: Session.get("userData").project}, {sort: Session.get("currentSort")})
	name: ->
		result = @name
		if isAdmin()
			result += " #{@_id} #{@hub}"
		result

Template.my_hub.events
	'click #th-department': (e, template) -> Session.set("currentSort", {department: 1, name: 1})
	'click #th-name': (e, template) -> Session.set("currentSort", {name: 1})
	'click #th-email': (e, template) -> Session.set("currentSort", {email: 1})
	'click #th-group': (e, template) -> Session.set("currentSort", {group: 1, name: 1})

Template.hub_main.helpers
	chat_hub: -> Session.set("chat_hub", Session.get("userData").hub); Session.set("chat_group", "all")
	hub_letter: -> Session.get("userData").hub