Meteor.autosubscribe ->
    Meteor.subscribe("users")
    Meteor.subscribe("userData")
    Meteor.subscribe("feedback")
	Meteor.subscribe("records")

@Records = new Meteor.Collection("records")
@Feedback = new Meteor.Collection("feedback")