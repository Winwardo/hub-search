Template.my_group.helpers
	members: ->
		Records.find({group: Session.get("userData")?.group, project: Session.get("userData")?.project}, {sort: Session.get("currentSort")})

Template.my_group.events
	'click #th-department': (e, template) -> Session.set("currentSort", {department: 1, name: 1})
	'click #th-name': (e, template) -> Session.set("currentSort", {name: 1})
	'click #th-email': (e, template) -> Session.set("currentSort", {email: 1})
	'click #th-group': (e, template) -> Session.set("currentSort", {group: 1, name: 1})

Template.group_main.helpers
	chat_group: -> Session.set("chat_hub", Session.get("userData").hub); Session.set("chat_group", Session.get("userData").group)
	group_number: -> Session.get("userData").group