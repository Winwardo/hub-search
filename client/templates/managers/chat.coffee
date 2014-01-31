Template.chat_all.helpers
	chat_all: -> Session.set("chat_hub", "all"); Session.set("chat_group", "all")

Template.chat.helpers
	messages: ->
		Chat.find({hub: Session.get("chat_hub"), group: Session.get("chat_group")}, {sort: {date: -1}, limit: 20})

Template.chat.events
	'submit form': (event, template) ->
		event.preventDefault()
		message = $('#chat-message').val().trim()
		$('#chat-message').val("")

		return null if message.length is 0

		Meteor.call("chat-insert", Session.get("chat_hub"), Session.get("chat_group"), message)