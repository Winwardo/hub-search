Meteor.autosubscribe ->
    Meteor.subscribe("users")
    Meteor.subscribe("userData")
    Meteor.subscribe("feedback")
	Meteor.subscribe("records")
	Meteor.subscribe("chat")

@Records = new Meteor.Collection("records")
@Feedback = new Meteor.Collection("feedback")
@Chat = new Meteor.Collection("chat")