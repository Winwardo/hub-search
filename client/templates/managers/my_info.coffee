Template.my_info.helpers
	currentRecord: -> Session.get("userData")

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