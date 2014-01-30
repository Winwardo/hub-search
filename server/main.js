Records = new Meteor.Collection("records");
Feedback = new Meteor.Collection("feedback");

Meteor.startup(function(){
	
	if (Records.find().count() < 1) {
		
        // Example data
        
        Records.insert({
            "department":"CIV",
            "name":"John Smith",
            "email":"jsmith@sheffield.ac.uk",
            "building":"Octagon",
            "room": "D7",
            "hub": "R",
            "group": 3,
            "project":"EYH15-2"
        });

	};


})