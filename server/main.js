Records = new Meteor.Collection("records");
Feedback = new Meteor.Collection("feedback");

Meteor.startup(function(){
	
	if (Records.find().count() < 1) {
		
        // Example data
        
        Records.insert({
    "department":"CIV",
    "name":"Asad Jiffry",
    "email":"AMJiffry1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":1,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Henry Morris",
    "email":"HAMorris1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":1,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Jiamin Luo",
    "email":"JLuo9@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":1,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"James Palmer",
    "email":"JEPalmer1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":1,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Christopher Collins",
    "email":"CCollins1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":1,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Christopher Dredge",
    "email":"CDredge1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":1,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Joshua Goulden",
    "email":"JJGoulden1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":2,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Robert Ward",
    "email":"RWard3@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":2,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Abhimanyu Chopra",
    "email":"AChopra1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":2,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Aditi Mathur",
    "email":"AMathur2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":2,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Andrew Whiteside",
    "email":"AWhiteside1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":2,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Caroline Dry",
    "email":"CDry1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":2,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Joseph Briggs",
    "email":"JWBriggs1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":3,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Sukhdev Lota",
    "email":"SLota1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":3,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hanxing Guo",
    "email":"HGuo2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":3,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Nikita Kesharaju",
    "email":"NKesharaju1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":3,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jake Jones",
    "email":"JJones2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":3,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Ahmad Kamal",
    "email":"AMKamal1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":3,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Thomas Brownbill",
    "email":"TGBrownbill1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":4,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"James Nicholson",
    "email":"JWNicholson1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":4,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Jiangchuan Yu",
    "email":"JYu11@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":4,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Kristian Marcus",
    "email":"KLMarcus1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":4,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"ShengHao Zhu",
    "email":"SHZhu1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":4,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Matthew Lister",
    "email":"MLister1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":4,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"AER",
    "name":"George Charnley",
    "email":"GCharnley1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":5,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Kin Chung Chan",
    "email":"KChan5@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":5,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Matthew Scott",
    "email":"MWRScott1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":5,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Daniel Button",
    "email":"DJButton1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":5,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Chenglin Jia",
    "email":"CJia2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":5,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"William Moss",
    "email":"WMoss1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":5,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Weng Hong Chan",
    "email":"WChan4@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Neehal Joshi",
    "email":"NJoshi1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Nicolas Panayiotou",
    "email":"NPanayiotou1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ranran Liu",
    "email":"RLiu6@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Michael Bodie",
    "email":"MBodie1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Matthew Mcgahan",
    "email":"MMcgahan1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Zandile Moyo",
    "email":"zmoyo1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07a",
    "hub":"A",
    "group":6,
    "project":"EYH1-1"
  });
Records.insert({
    "department":"AER",
    "name":"Michael Hibbert",
    "email":"MHibbert2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":1,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Georges Moss",
    "email":"GMoss2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":1,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Bo Wu",
    "email":"BWu5@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":1,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Adam Fairclough",
    "email":"afairclough1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":1,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Alistair Lyle",
    "email":"ALyle1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":1,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Ling Tan",
    "email":"LMTan1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":1,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"AER",
    "name":"Sanghyo Kim",
    "email":"SKim13@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":2,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Callum Evans",
    "email":"CEvans4@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":2,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Cedric Teuchou Kouanga",
    "email":"CVTeuchouKouanga1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":2,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Gareth Richards",
    "email":"GRichards2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":2,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Adewale Adeyosoye",
    "email":"AYAdeyosoye1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":2,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Hugh Clark",
    "email":"HClark3@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":2,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"AER",
    "name":"Zhengda Jiang",
    "email":"ZJiang2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":3,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"David Cooper",
    "email":"DCooper3@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":3,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Daniel Mcgill",
    "email":"DMcgill1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":3,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Muhamad Harith Abd Raub",
    "email":"MAbdRaub1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":3,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Yi Ge",
    "email":"yge2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":3,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Nathan Howard",
    "email":"NJHoward1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":3,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Federico Lumicisi",
    "email":"FLumicisi1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":4,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Xianyi Yu",
    "email":"XYu10@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":4,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Zheng Han",
    "email":"ZHan1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":4,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Richard Berry",
    "email":"RJSBerry1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":4,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Prasanth Gangatharan",
    "email":"PGangatharan1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":4,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Rehan Qaisar",
    "email":"RQaisar1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":4,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Thomas Brown",
    "email":"TBrown7@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":5,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Michael Campbell",
    "email":"MCampbell4@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":5,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Habeeb Syed",
    "email":"HSyed1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":5,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Tracy Amuke",
    "email":"TAmuke1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":5,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Tianshu Guo",
    "email":"TGuo2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":5,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Tong Wu",
    "email":"TWu7@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":5,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Phebe Akinyemi",
    "email":"POAkinyemi1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":6,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Patrick Crane",
    "email":"PCrane1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":6,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Pui Yu Josephine Ng",
    "email":"PYJNg1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":6,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Xueyang Tan",
    "email":"XTan6@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":6,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Michael Guest",
    "email":"MGuest1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":6,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Yu Liu",
    "email":"YLiu96@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"D07b",
    "hub":"B",
    "group":6,
    "project":"EYH1-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Anthony Thomas",
    "email":"AThomas4@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":1,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Adam Caruana",
    "email":"ACaruana1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":1,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Sheila Salvador Abad",
    "email":"SSalvadorAbad1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":1,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Yang Xu",
    "email":"YXu22@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":1,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Connor Pilling",
    "email":"CPilling1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":1,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Changyou Ren",
    "email":"CRen2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":1,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Mehmet Balande",
    "email":"MBalande1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":2,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Adam Lechniak",
    "email":"ALechniak1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":2,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Zhe Li",
    "email":"ZLi32@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":2,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"EEE",
    "name":"ARTHUR TEE LEE FOO",
    "email":"AARTHURFOOTEELEE1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":2,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Harry Meek",
    "email":"HMeek1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":2,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Navintya Susatyo",
    "email":"NCSusatyo1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":2,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Weihao Gao",
    "email":"WGao3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":3,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Grace Holley",
    "email":"GHolley1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":3,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Azamat Orazaliyev",
    "email":"AOrazaliyev1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":3,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"COM",
    "name":"Ivan Dimchev",
    "email":"IDimchev1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":3,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Jinjing Liu",
    "email":"JLiu16@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":3,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Joseph Wookey",
    "email":"JWookey1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":3,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"AER",
    "name":"Jonathan Eyre",
    "email":"JMEyre1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":4,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Jonathan Crossley",
    "email":"JFCrossley1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":4,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Bahnnisikha Misra",
    "email":"BMisra1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":4,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Dominic Le Blanc",
    "email":"DLeBlanc2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":4,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Wing Mak",
    "email":"WLMMak1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":4,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"ROHAN PHILIP",
    "email":"RPHILIP2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":4,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Samuel May",
    "email":"SMay1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":5,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Tsz Chun",
    "email":"THChun1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":5,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Luqman Samiruddin",
    "email":"LSamiruddin1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":5,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"EEE",
    "name":"David Watson",
    "email":"DWatson1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":5,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Jinlong Su",
    "email":"JSu2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":5,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Zu Kuan Tan",
    "email":"ZKTan1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":5,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Jun Chang",
    "email":"CJun1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":6,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Timothy Evans",
    "email":"TEvans2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":6,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Roberto Wraith",
    "email":"RWraith1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":6,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Matthew Fergusson",
    "email":"MJFergusson1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":6,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Rehan Khalid",
    "email":"RKhalid1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":6,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Andrew Tripp",
    "email":"ATripp1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT10 (H Floor)",
    "hub":"V",
    "group":6,
    "project":"EYH10-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Raihan Bahurudeen",
    "email":"RFBahurudeen1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":1,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Austin Lee",
    "email":"AHLee1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":1,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Adetola Orekoya",
    "email":"AOrekoya1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":1,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Mohaned Taha",
    "email":"MTaha1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":1,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Yafeng Zhang",
    "email":"YZhang89@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":1,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Andrew Merson",
    "email":"AMerson1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":1,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Mohsin Manzoor",
    "email":"MManzoor2@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":2,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Jie Xiao",
    "email":"JXiao4@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":2,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Christopher Moore",
    "email":"CDMoore1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":2,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Narcisa-Cela Pinzariu",
    "email":"NCPinzariu1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":2,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ruiyu Li",
    "email":"RLi8@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":2,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"MEC",
    "name":"David Stewart",
    "email":"DSPStewart1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":2,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"AER",
    "name":"Yick Kan Lau",
    "email":"YLau2@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":3,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Georgi Tsvetkov",
    "email":"GTsvetkov1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":3,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Ieuan Colebrook",
    "email":"IColebrook1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":3,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Yiqiao Liang",
    "email":"YLiang5@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":3,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Nur Diyana Nas Tamimi",
    "email":"NNasTamimi1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":3,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hiqmal Bin Hadil",
    "email":"HHadil1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":3,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"King Lam Kwan",
    "email":"KLKwan1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":4,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Yunpeng Zhu",
    "email":"YZhu27@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":4,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Joshua Cooper",
    "email":"JFCooper1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":4,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Oliver Haines",
    "email":"OHaines1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":4,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Bozhong Chen",
    "email":"BChen9@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":4,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Naomi Frazer",
    "email":"NFrazer1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":4,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Keir Loudon",
    "email":"KPLoudon1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":5,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Nai Wee",
    "email":"NKWee1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":5,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"COM",
    "name":"Mahmoud Mohamed",
    "email":"mkmohamed1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":5,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Sophie Freeman",
    "email":"SJFreeman1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":5,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Ming Fung Tse",
    "email":"MFTse1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":5,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Philip Proctor",
    "email":"PProctor1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":5,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"AER",
    "name":"James Ashton",
    "email":"JGAshton1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":6,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Ryan Bains",
    "email":"RBains1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":6,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Rabiatul Rohaidy",
    "email":"RARohaidy1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":6,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Masoud Geramizadeh",
    "email":"MGeramizadeh1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":6,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Wei Min Lee",
    "email":"WLee11@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":6,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Sean Loo",
    "email":"SWJLoo1@sheffield.ac.uk",
    "building":"Enterprise",
    "room":"Main Zone",
    "hub":"T",
    "group":6,
    "project":"EYH11-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Jennifer Howarth",
    "email":"JEHowarth1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":1,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Myurah Nathan",
    "email":"MKNathan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":1,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Adeline Yen",
    "email":"ASYYen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":1,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"COM",
    "name":"Shayan Hassanzadeh",
    "email":"SHassanzadeh1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":1,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Berkant Dilber",
    "email":"BDilber1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":1,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Smeet Doshi",
    "email":"SBDoshi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":1,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Joshua Giles",
    "email":"JGiles1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":2,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Charlotte Maughan",
    "email":"CMaughan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":2,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"COM",
    "name":"Jay Patel",
    "email":"JPatel3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":2,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Bufan Song",
    "email":"BSong1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":2,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Matthew Stroud",
    "email":"MStroud1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":2,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Justin Stinson",
    "email":"JRTStinson1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":2,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Emma Chandler",
    "email":"EChandler1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":3,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"James Johnson",
    "email":"JJohnson6@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":3,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"COM",
    "name":"Lantian Ai",
    "email":"LAi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":3,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Matthew Walton",
    "email":"MWalton1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":3,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Bin Zhao",
    "email":"BZhao7@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":3,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Julia Reinschmidt",
    "email":"JReinschmidt1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":3,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Florence Hayden",
    "email":"FHayden1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":4,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Jeralee Sapaden",
    "email":"JJSapaden1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":4,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Ayan Hujaleh",
    "email":"AHujaleh1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":4,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Shem Jeffs",
    "email":"SJeffs1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":4,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Farooq Saleem",
    "email":"FSaleem1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":4,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Zheng Yao",
    "email":"ZYao3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":4,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Jodie Barber",
    "email":"JLBarber2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":5,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Ghazal Khatibian",
    "email":"GKhatibian1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":5,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Michael Perkins",
    "email":"MPerkins1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":5,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"COM",
    "name":"Andrew Southon",
    "email":"ASouthon1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":5,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ting Huang",
    "email":"THuang2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":5,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hainan Xu",
    "email":"HXu2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":5,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Hawraa Kadhim",
    "email":"HKadhim1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":6,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Matthew Linley",
    "email":"MDLinley1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":6,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"COM",
    "name":"Anil Eyupoglu",
    "email":"AEyupoglu1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":6,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Yunhao Feng",
    "email":"YFeng10@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":6,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Jianyu Hao",
    "email":"JHao1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":6,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Samuel Bahl",
    "email":"SBahl1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT15",
    "hub":"K",
    "group":6,
    "project":"EYH12-1"
  });
Records.insert({
    "department":"AER",
    "name":"Aaron Bagri",
    "email":"ABagri1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":1,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Bijay Aryal",
    "email":"BAryal1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":1,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Mithila Siriwardana",
    "email":"MVMSiriwardena1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":1,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"COM",
    "name":"George Powell",
    "email":"GPowell1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":1,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Amir Aizuddin Jamaludin",
    "email":"AJamaludin1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":1,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Man Li",
    "email":"MLi45@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":1,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"AER",
    "name":"Brandon Glover",
    "email":"BGlover1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":2,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Naman Kedia",
    "email":"NKedia1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":2,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Benjamin Thurgate",
    "email":"BCMThurgate1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":2,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"COM",
    "name":"Chloe Sharp",
    "email":"CSharp1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":2,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Fuzhi Wang",
    "email":"FWang8@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":2,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Peter Briggs",
    "email":"PWBriggs1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":2,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"AER",
    "name":"Chun Hei Leung",
    "email":"CHLeung1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":3,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Olisaemeka Ezeh",
    "email":"OHEzeh1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":3,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Damien Imschoot",
    "email":"DImschoot1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":3,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"COM",
    "name":"Faris Keenan",
    "email":"FKeenan1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":3,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Edward Balmer",
    "email":"EBalmer1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":3,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Richard Mole",
    "email":"RFMole1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":3,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"AER",
    "name":"Macarius Agagah",
    "email":"MEKAgagah1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":4,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Shun Hou",
    "email":"SHDHou1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":4,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Dominik Spirydowicz",
    "email":"DPSpirydowicz1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":4,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"COM",
    "name":"Abdulrahem Al Abri",
    "email":"ASAlAbri1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":4,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Merlin Mathew",
    "email":"MMathew1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":4,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Matthew Baugh",
    "email":"MJBaugh1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":4,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"AER",
    "name":"Siu Lau",
    "email":"SCMLau1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":5,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"James Atkins",
    "email":"JAtkins1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":5,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Rebecca King",
    "email":"RKing3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":5,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"COM",
    "name":"Hang Chi",
    "email":"HChi2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":5,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Nicholas Ashbridge",
    "email":"NAshbridge1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":5,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Oluwatomi Olaiya",
    "email":"OIOlaiya1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":5,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"AER",
    "name":"Thomas Malagodi",
    "email":"TMalagodi1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":6,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Jacob Fogg",
    "email":"JFogg1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":6,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Rajetharan Krishnakumar",
    "email":"RKrishnakumar1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":6,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Thomas Wood",
    "email":"TWood2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":6,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Xiang Guan",
    "email":"XGuan2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":6,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Birju Galaiya",
    "email":"BNGalaiya1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT9 (H Floor, near lifts)",
    "hub":"W",
    "group":6,
    "project":"EYH13-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Samuel Dickinson",
    "email":"SDickinson1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":1,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Alireza Amiri",
    "email":"AAmiri3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":1,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Daniel Cunnington",
    "email":"DCunnington1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":1,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Ripeng Feng",
    "email":"RFeng1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":1,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hao Xu",
    "email":"HXu1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":1,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Chujin Cheng",
    "email":"CCheng6@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":1,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Carolyn Wright",
    "email":"CWright2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":2,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Daniel Harris",
    "email":"DHarris2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":2,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Adam Lewis",
    "email":"ALewis5@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":2,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ikechukwu Abuah",
    "email":"IKAbuah1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":2,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Young In Na",
    "email":"YINa1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":2,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Ishak Bin Osman",
    "email":"IOsman1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":2,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Jack Roberts",
    "email":"JRoberts3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":3,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Timothy Hermida",
    "email":"THermida1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":3,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Dario Panada",
    "email":"DPanada1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":3,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Burak Uzum",
    "email":"BUzum1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":3,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Nurul Raihanah Jamel",
    "email":"NJamel1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":3,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Matthew Wayland",
    "email":"MRWayland1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":3,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Kim Wong",
    "email":"KYWong1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":4,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Christopher Ingram",
    "email":"CIngram1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":4,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Jack Slinger",
    "email":"JMSlinger1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":4,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Qianyu Lin",
    "email":"QLin2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":4,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Yeh Ong",
    "email":"YSOng6@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":4,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Selvi Sahin Altunoz",
    "email":"SSahinAltunoz1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":4,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Michael Huggett",
    "email":"MRHuggett1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":5,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Joshua Brass",
    "email":"JSBrass1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":5,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Chiraag Hegdekar",
    "email":"CNHegdekar1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":5,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Umi Syahirah Binti Azhar",
    "email":"UAzhar1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":5,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Owen Slack",
    "email":"OSlack1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":5,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Onkgopotse Machuka",
    "email":"OMachuka1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":5,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Jordan Slater",
    "email":"JSlater3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":6,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"COM",
    "name":"Christopher Winward",
    "email":"CRWinward1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":6,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Sion Clyant",
    "email":"SClyant1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":6,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Victoria Ngow",
    "email":"VYNgow1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":6,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Ruofan Wang",
    "email":"RWang12@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":6,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Zuhair Crossley",
    "email":"ZCrossley1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B51",
    "hub":"R",
    "group":6,
    "project":"EYH14-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Hanan Sheikh",
    "email":"HSheikh1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":1,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"AER",
    "name":"Amelia Ayesh-Meagher",
    "email":"AAyesh-Meagher1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":1,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"COM",
    "name":"Alexander Millward",
    "email":"AMillward1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":1,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Adrian-Cristian Nicolaescu",
    "email":"ACNicolaescu1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":1,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Thatoyaone Bogopa",
    "email":"TBogopa1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":1,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Edward Lazell",
    "email":"ELazell1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":1,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Yibing Guo",
    "email":"YGuo8@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":2,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"AER",
    "name":"Perrum Rehal",
    "email":"PSRehal1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":2,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"COM",
    "name":"David Lowndes",
    "email":"DLowndes1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":2,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Yixuan Li",
    "email":"YLi30@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":2,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Dylan Shah",
    "email":"DShah1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":2,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MEC",
    "name":"William Milligan-Manby",
    "email":"WAMilligan-Manby1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":2,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Andrew Godley",
    "email":"AJGodley1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":3,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"AER",
    "name":"Bernice Ayeni",
    "email":"ABAyeni1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":3,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"COM",
    "name":"Sheena Jackson",
    "email":"SJackson3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":3,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Yuchuan Dong",
    "email":"YDong3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":3,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Gregory Mason",
    "email":"GMason1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":3,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Felicia Lee",
    "email":"FPXLee1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":3,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Christopher Mackellar",
    "email":"CMackellar1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":4,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"AER",
    "name":"Romilly Close",
    "email":"RClose1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":4,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"COM",
    "name":"Sean O'Neill",
    "email":"SMONeill1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":4,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Yash Kumar",
    "email":"YKumar1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":4,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Mingxiao Xi",
    "email":"MXi1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":4,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Denny Alexander Tarigan",
    "email":"DTarigan1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":4,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Shaun Humphreys",
    "email":"SRHumphreys1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":5,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"COM",
    "name":"Vanessa Macha",
    "email":"VMMacha1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":5,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Chuan Ling",
    "email":"CLing2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":5,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Muhammad Zainal Abidin",
    "email":"MHZainalAbidin1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":5,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Sze Yeung",
    "email":"SWYeung1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":5,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Matthew Kirkland",
    "email":"MKirkland1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":5,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Daniel Rumsey",
    "email":"DRumsey1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":6,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"COM",
    "name":"Yifan Liu",
    "email":"YLiu39@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":6,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Alexandra Papaconstantinou",
    "email":"APapaconstantinou1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":6,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Fatin Binti Saad",
    "email":"FABintiSaad1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":6,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Sean Roche",
    "email":"SRoche1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":6,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Muhammad Dell Hakim Zulbahari",
    "email":"MZulbahari1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B59",
    "hub":"S",
    "group":6,
    "project":"EYH14-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Rachael Rix",
    "email":"RSRix1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Atilay Ayrez Boz",
    "email":"ABoz1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Jack Stanion",
    "email":"JStanion1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Joel Fashoro",
    "email":"OFashoro1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Wenbin Chen",
    "email":"WChen22@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Yi Gong",
    "email":"YGong3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Abdelkhafe Kawafi",
    "email":"AKawafi1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":1,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Ali Can Cebi",
    "email":"ACebi1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":2,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Salma Dwikartika",
    "email":"SDwikartika1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":2,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Antonio Palombo",
    "email":"AEPalombo1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":2,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Aymon Collins",
    "email":"ACollins2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":2,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Chenyu Gao",
    "email":"CGao2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":2,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Eadwyne Henry",
    "email":"EDTHenry1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":2,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Svetoslav Georgiev",
    "email":"SNGeorgiev1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":3,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Chuk Shing Jones Law",
    "email":"CLaw1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":3,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Alexander Simpson",
    "email":"AMSimpson1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":3,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Edi Herman",
    "email":"EHerman1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":3,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Liam Pegram",
    "email":"LGPegram1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":3,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Gin Khai Poh",
    "email":"GKPoh1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":3,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Ho Long Cheung",
    "email":"HLCheung1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":4,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Thomas Hill",
    "email":"TLHill1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":4,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Chad Swaby",
    "email":"CLSwaby1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":4,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ian Hannaford",
    "email":"IHannaford1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":4,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Hoi Cheung",
    "email":"HKCheung2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":4,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jozef Quinn",
    "email":"JFDQuinn1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":4,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Christopher Rush",
    "email":"CRush2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":5,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Xin Wu",
    "email":"XWu33@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":5,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Abdullah Zohair A Albakri",
    "email":"AAlbakri1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":5,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Gilvary",
    "email":"TAGilvary1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":5,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Morgan",
    "email":"TOMorgan1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":5,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Rui Yang",
    "email":"RYang6@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":5,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"ACS",
    "name":"David Miller",
    "email":"DMiller2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":6,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Joseph Bird",
    "email":"JMBird2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":6,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Andrew Edward",
    "email":"EAWells1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":6,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"COM",
    "name":"Jin Seo",
    "email":"JHSeo1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":6,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Sijin He",
    "email":"SHe7@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":6,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Uday Puri",
    "email":"UPuri1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"John Carr Design Suite",
    "hub":"0",
    "group":6,
    "project":"EYH15-1"
  });
Records.insert({
    "department":"AER",
    "name":"Arthur Halsey",
    "email":"AHalsey1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":1,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Michael Lakeland",
    "email":"MLakeland1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":1,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"COM",
    "name":"James Hall",
    "email":"JHall5@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":1,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"James Douglas",
    "email":"JWDouglas1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":1,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Muhamad Farid Muhamad Khosim",
    "email":"MMuhamadKhosim1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":1,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Matthew Brown",
    "email":"MOBrown1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":2,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Thomas Fantham",
    "email":"TFantham1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":2,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Kar Hao Joel Yew",
    "email":"KHJYew1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":2,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"COM",
    "name":"Stephan Broek",
    "email":"sabroek1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":2,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Muhd Fadhlan Omar",
    "email":"MOmar1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":2,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Harry Popplewell",
    "email":"HPopplewell1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":2,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Rohan Takale",
    "email":"RTakale1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":3,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Owen Hackett",
    "email":"OHackett1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":3,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MAT",
    "name":"Ieuan Watkins",
    "email":"ITWatkins1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":3,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Muhammad Abdul Rashid",
    "email":"MZBAbdulRashid1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":3,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Zhaohua Zhang",
    "email":"ZZhang11@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":3,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Bhavika Koliyabandara",
    "email":"BTKoliyabandara1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":4,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"David Minn",
    "email":"DMinn1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":4,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Thomas Sims",
    "email":"TASims1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":4,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"EEE",
    "name":"George Bingham",
    "email":"GBingham1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":4,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Rajat Gattani",
    "email":"RGattani1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":4,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Jingwei Zhao",
    "email":"JZhao15@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":4,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"James Booth",
    "email":"JABooth1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":5,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Quentin Spottiswoode",
    "email":"QSpottiswoode1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":5,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Rael Sasiak-Rushby",
    "email":"RSasiak-Rushby1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":5,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MAT",
    "name":"David Brown",
    "email":"DCBrown1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":5,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Taiyu Guo",
    "email":"TGuo4@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":5,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Ken Hua Lim",
    "email":"KLim1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":5,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Oliver Jones",
    "email":"OPHJones1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Jack Sands",
    "email":"JSands1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Samuel Williams",
    "email":"SRWilliams1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"COM",
    "name":"Jeonghoe Goo",
    "email":"JGoo1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Hugh Garrett-Allen",
    "email":"HGarrett-Allen1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Rodrigo Lopez Escobedo",
    "email":"mea07rl@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Zhi Ren Yeoh",
    "email":"ZYeoh1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"Portobello Centre -Design Suite ",
    "hub":"P",
    "group":6,
    "project":"EYH15-2"
  });
Records.insert({
    "department":"AER",
    "name":"Matthew Barrett",
    "email":"MJBarrett1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":1,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Aleks Iliev",
    "email":"AIIliev1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":1,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Callum Wilson",
    "email":"CWilson2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":1,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Ammar Jamil",
    "email":"AJamil2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":1,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Behzad Bagheribidhendi",
    "email":"BBagheribidhendi1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":1,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Xavier Joseph Dessin",
    "email":"XAJosephDessin1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":1,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Nicholas Brown",
    "email":"NABrown2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":2,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Heather Leung",
    "email":"HLeung3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":2,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Wan Ting Chan",
    "email":"WTChan1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":2,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Benjamin Trevett",
    "email":"BTrevett1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":2,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Chuzy Ikpe",
    "email":"CVIkpe1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":2,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Zhaoyi Liu",
    "email":"ZLiu14@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":2,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Jack Saxon",
    "email":"JSaxon1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":3,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Nicholas Walters",
    "email":"NJWalters1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":3,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Guangyu Wang",
    "email":"GWang7@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":3,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Donald Hobbs",
    "email":"DHobbs1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":3,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Marcus Losty",
    "email":"MLosty1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":3,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Hanyi Zou",
    "email":"HYZou1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":3,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Simon Moseley",
    "email":"SMoseley1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":4,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Karan Shah",
    "email":"KShah3@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":4,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Jamie Stanyer",
    "email":"JStanyer1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":4,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Jack Needham",
    "email":"JNeedham1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":4,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Peter Champneys",
    "email":"PChampneys1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":4,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Kelachi Omehia",
    "email":"KOmehia1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":4,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Matthew Kavanagh",
    "email":"MKavanagh1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":5,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Luke Cowan",
    "email":"LCowan1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":5,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Marcus Tan",
    "email":"MCHTan1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":5,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Maciej Janik",
    "email":"MJanik1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":5,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Samuel Hughes",
    "email":"SOHughes1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":5,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Kershan Jude Saba Ramesh",
    "email":"KSabaRamesh1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":5,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Yohahn Ribeiro",
    "email":"YRibeiro1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":6,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Zak Hodgson",
    "email":"ZHodgson1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":6,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Mazin Ibrahim",
    "email":"MAIbrahim2@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":6,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Rhydian Williams",
    "email":"RSWilliams1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":6,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MAT",
    "name":"George Kennedy",
    "email":"GKennedy1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":6,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Song Ling Leng",
    "email":"SLeng1@sheffield.ac.uk",
    "building":"Portobello",
    "room":"B57b",
    "hub":"Q",
    "group":6,
    "project":"EYH15-3"
  });
Records.insert({
    "department":"AER",
    "name":"Kuan Hui Chia",
    "email":"KHChia1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":1,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Adelina Angelova",
    "email":"AAAngelova1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":1,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Sebastien Doumeng",
    "email":"SDoumeng1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":1,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Ruoyu Zhang",
    "email":"RZhang3@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":1,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Tsing Ng",
    "email":"TYNg1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":1,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jamie Urwin",
    "email":"JUrwin1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":1,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"AER",
    "name":"Kareem Lewis",
    "email":"KLewis3@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":2,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Kwok Lin Chiu",
    "email":"KLChiu1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":2,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Leo Hawthorne",
    "email":"LHawthorne1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":2,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Brianne Jason",
    "email":"BHJason1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":2,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Michaela Tracy",
    "email":"MTracy1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":2,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Toon Jie Ang",
    "email":"TJAng1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":2,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"AER",
    "name":"Kai Zhang",
    "email":"KZhang8@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":3,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Adam Fidler",
    "email":"AFidler1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":3,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Cheuk Hong Lo",
    "email":"CLo2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":3,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"COM",
    "name":"Arlina Eftimova",
    "email":"AEftimova1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":3,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Ayush Sood",
    "email":"ASood1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":3,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Andrew Scriven",
    "email":"AScriven1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":3,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"AER",
    "name":"Muhamad Mat Yazik",
    "email":"MHBMatYazik1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":4,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Florence Browning",
    "email":"FBrowning1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":4,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Amy Lambourne",
    "email":"ALambourne1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":4,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Panyue Zhang",
    "email":"PZhang2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":4,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Edoardo Mantheakis",
    "email":"EMantheakis1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":4,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Christopher Owens",
    "email":"COwens1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":4,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Michael Fraser",
    "email":"MFraser2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":5,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Ka Yu Kong",
    "email":"KKong1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":5,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Mohamad Syahmi Bin Abdul Rahman",
    "email":"MAbdulRahman1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":5,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Wei Zhu",
    "email":"WZhu5@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":5,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jack Poole",
    "email":"JPoole2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":5,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"David Westcough",
    "email":"DJWestcough1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":5,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Steffan Carey",
    "email":"SACarey1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":6,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Ka Kiu Kwok",
    "email":"KKwok1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":6,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Noor Mohd Shukri",
    "email":"NAMohdShukri1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":6,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Runan Chen",
    "email":"RChen5@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":6,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Ailsa Kiely",
    "email":"AAKiely1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":6,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jack Simpson",
    "email":"JSimpson4@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05a",
    "hub":"C",
    "group":6,
    "project":"EYH2-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Muhammad Ali",
    "email":"MAli6@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":1,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"BIO",
    "name":"Jonathan Tew",
    "email":"JTew1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":1,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Hannah Smith",
    "email":"HSmith8@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":1,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Hoi Leng Ung",
    "email":"HLUng1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":1,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Vanessa Khainza Nataka",
    "email":"VKhainzaNataka1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":1,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Yunan Qiu",
    "email":"YQiu2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":1,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Sarah Hj Abd Mutalif",
    "email":"SHajiAbdulMutalif1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":2,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Joseph Currie",
    "email":"JFCurrie1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":2,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Isabel Lambert",
    "email":"IALambert1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":2,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Yue Xuan",
    "email":"YXuan1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":2,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"James Byrne",
    "email":"JByrne1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":2,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Youssef Fawzy",
    "email":"yfawzy1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":2,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"AER",
    "name":"Jonathan Karimian",
    "email":"JKarimian1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":3,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Christina Alderson",
    "email":"CAlderson1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":3,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Amirah Jalaluddin",
    "email":"AJalaluddin1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":3,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Yunhai Lu",
    "email":"YLu33@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":3,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Michael Jones",
    "email":"MJSJones1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":3,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Yu Lei",
    "email":"YLei5@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":3,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"AER",
    "name":"Jun Hong",
    "email":"JMHong1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":4,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Natasha Cleaver",
    "email":"NCleaver1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":4,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Norbert Farkas",
    "email":"NFarkas1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":4,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Saqib Moosa",
    "email":"SHMoosa1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":4,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Olusola Banjo",
    "email":"OBanjo1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":4,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Jonathan Leigh",
    "email":"JRLeigh1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":4,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Jennifer Howarth",
    "email":"JHowarth2@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":5,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Ishita Ranasinghe",
    "email":"IPRanasinghe1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":5,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Katherine Wade",
    "email":"KWade1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":5,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Qijun Yuan",
    "email":"QYuan4@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":5,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Hazel Dearson",
    "email":"HDearson1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":5,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Xihao Huang",
    "email":"XHuang10@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":5,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Max Bohannon",
    "email":"MBohannon1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":6,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Selena Jan",
    "email":"SJan1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":6,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"CIV",
    "name":"Samuel Mbatia",
    "email":"SMbatia1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":6,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Andrea Corrado",
    "email":"ACorrado1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":6,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Uchechukwu Ohanebo",
    "email":"UJOhanebo1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":6,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Sophia Rawlins",
    "email":"SEIRawlins1@sheffield.ac.uk",
    "building":"Eng Grad School",
    "room":"E05b",
    "hub":"D",
    "group":6,
    "project":"EYH2-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Xia Xiao",
    "email":"XXiao2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":1,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Muhammad Bin Md Jaki",
    "email":"MFMdJaki1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":1,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Ziya Gokmen",
    "email":"ZGokmen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":1,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Clara Jordan",
    "email":"CZMJordan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":1,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Fernando Camacho Hunt",
    "email":"FTCamacho1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":1,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Gary Nicholas",
    "email":"GNicholas1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":1,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"AER",
    "name":"Basil Ng",
    "email":"BJNg1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":2,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"BIO",
    "name":"Louise Tarleton",
    "email":"LTarleton1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":2,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Olateju Kuye",
    "email":"OEKuye1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":2,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Hannah Roberts",
    "email":"HRoberts5@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":2,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Jack Millar",
    "email":"JNMillar1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":2,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Mohd Roslan",
    "email":"MARoslan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":2,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"AER",
    "name":"Rudraksh Mangrola",
    "email":"RMangrola1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":3,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"James Claridge",
    "email":"JJClaridge1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":3,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Omar Maniyani",
    "email":"OManiyani1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":3,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Emma Parkin",
    "email":"EFParkin1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":3,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Najian Lokman",
    "email":"NBLokman1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":3,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Joseph Regan",
    "email":"JRegan2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":3,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"AER",
    "name":"Yan Zhang",
    "email":"YZhang88@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":4,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Sophie Ombregt",
    "email":"SAOmbregt1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":4,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Jack Wright",
    "email":"JRWright2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":4,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Katherine Oxley",
    "email":"KOxley1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":4,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"James Skaife",
    "email":"JSkaife1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":4,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Jiecheng Tang",
    "email":"JTang4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":4,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Khalid Al-Ali",
    "email":"KAlali1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":5,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Xinyu Cai",
    "email":"XYCai1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":5,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Lyuben Stoev",
    "email":"LBStoev1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":5,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Markus Still",
    "email":"MStill1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":5,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Menghan Liu",
    "email":"MLiu13@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":5,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Tingxuan Song",
    "email":"TSong1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":5,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"BIO",
    "name":"Nabeel Kushi-Mohammed",
    "email":"NKushi-Mohammed1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":6,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Krushna Gorasia",
    "email":"KRGorasia1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":6,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Laura Jamieson",
    "email":"LJamieson1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":6,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Tshepo Tshambane",
    "email":"TCTshambane1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":6,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Jackson",
    "email":"TIJackson1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":6,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Mohamed Mohd Rafik",
    "email":"MSBMohdRafik1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"CIV Workrooms 2 & 3",
    "hub":"E",
    "group":6,
    "project":"EYH2-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Mandhar Al Bahri",
    "email":"MSRAlBahri1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":1,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Damilola Adekanye",
    "email":"DAAdekanye1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":1,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Mohd Amirul Izzat Bin Zainuddin",
    "email":"MZainuddin1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":1,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Abdullah Alotaibi",
    "email":"AAlotaibi3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":1,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Douglas Aitchison",
    "email":"DAitchison1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":1,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Connor Brown",
    "email":"CBrown3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":1,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Noor Azni Noor",
    "email":"NAAzniNoor1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":2,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Yicheng Wang",
    "email":"YWang100@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":2,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Joseph Kanja",
    "email":"JKanja1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":2,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Ang Li",
    "email":"ALi7@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":2,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"James Hockey",
    "email":"JEHockey1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":2,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Harry Morgan",
    "email":"HJMorgan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":2,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"AER",
    "name":"Joseph Thiruchelvan",
    "email":"JAThiruchelvan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":3,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Sheryl Ng",
    "email":"SNg1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":3,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Tynos Elijah",
    "email":"TAElijah1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":3,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"David Tweddle",
    "email":"DTweddle2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":3,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jiasheng Lai",
    "email":"JLai5@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":3,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Luke Sweeney",
    "email":"LSweeney2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":3,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Maha Khan",
    "email":"MKhan8@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":4,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Nur Hashim",
    "email":"NSHashim1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":4,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Gift Mothibi",
    "email":"GMothibi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":4,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Roderick Ramsdale-Capper",
    "email":"RTRamsdale-Capper1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":4,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Marc Daly",
    "email":"MDaly1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":4,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Munir Afnan Mukhtar",
    "email":"MMUKHTAR1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":4,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Patrick Marshall",
    "email":"PMPMarshall1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":5,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Amirul Rafiq Baharul Razi",
    "email":"ABaharulRazi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":5,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Heng Zhou",
    "email":"HZhou10@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":5,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Tochi Emenike",
    "email":"TNEmenike1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":5,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Oladayo Ogunyinka",
    "email":"OQOgunyinka1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":5,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Max Roberts",
    "email":"mroberts3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":5,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Ki Ming Terrence Yip",
    "email":"KMTYip1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Michael Gormley",
    "email":"MJGormley1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Jessica Andrews",
    "email":"JAndrews2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Lai Wei",
    "email":"LWei5@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Saiful Ahmad Adni",
    "email":"SABAhmadAdni1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Rebecca Ede",
    "email":"RJEde1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Robert Gibson",
    "email":"RDMGibson1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"IPO Workrooms",
    "hub":"L",
    "group":6,
    "project":"EYH3-1"
  });
Records.insert({
    "department":"AER",
    "name":"Tharshan Umasuthan",
    "email":"TUmasuthan1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":1,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"COM",
    "name":"Dong Huh",
    "email":"DHHuh1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":1,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"CPE",
    "name":"Anthony Garnett",
    "email":"ARGarnett1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":1,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Aiman Che Razani",
    "email":"ANBCheRazani1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":1,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Andrew Quarmby",
    "email":"AQuarmby1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":1,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Softley",
    "email":"TBSoftley1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":1,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"David Maiden",
    "email":"DMaiden1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":2,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"COM",
    "name":"Adam Houghton",
    "email":"AJHoughton1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":2,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"CPE",
    "name":"Eleanor Lockett",
    "email":"ELockett1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":2,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Zhiyuan Feng",
    "email":"ZFeng2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":2,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Alexander Marsden",
    "email":"ARMarsden1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":2,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MAT",
    "name":"Effah Adanan",
    "email":"EAAdanan1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":2,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Areum Kang",
    "email":"AKang1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":3,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Dario Piccirillo",
    "email":"DPiccirillo1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":3,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"COM",
    "name":"Arman Yaraee",
    "email":"AYaraee1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":3,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"David Baughan",
    "email":"DRBaughan1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":3,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Zhicai Chen",
    "email":"ZChen7@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":3,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Nicholas Smith",
    "email":"NSmith3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":3,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Ellis Bisset",
    "email":"ECBisset1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":4,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"COM",
    "name":"Joseph Richardson",
    "email":"JRichardson3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":4,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"CPE",
    "name":"Nicole Joann Toolseram",
    "email":"NJToolseram1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":4,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Mohamed Almannai",
    "email":"MTAlmannai1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":4,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Lauren Kerslake",
    "email":"LCKerslake1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":4,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Matthew Smith",
    "email":"MSmith15@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":4,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Marcus Hutchinson",
    "email":"MHHutchinson1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":5,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Gabriel Njoku",
    "email":"GNjoku1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":5,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"COM",
    "name":"Matthew Leach",
    "email":"MILeach1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":5,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Rana Zikryya",
    "email":"RAZikryya1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":5,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MAT",
    "name":"Wan Haji Hamidon",
    "email":"WMNHajiHamidon1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":5,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Isabel Brown",
    "email":"IBrown2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":5,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Jonathan Butler",
    "email":"JDButler1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":6,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"AER",
    "name":"Luqman Mohamad Zahari",
    "email":"LHMohamadZahari1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":6,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"BIO",
    "name":"Francesca Atkinson",
    "email":"FAtkinson1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":6,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"COM",
    "name":"Thomas Miller",
    "email":"TMiller2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":6,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Ruichao Wang",
    "email":"RWang4@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":6,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Jessica Batty",
    "email":"JMBatty1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F24",
    "hub":"X",
    "group":6,
    "project":"EYH4-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Christiaan Knaup",
    "email":"CJKnaup1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":1,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Bahman Mirheidari",
    "email":"BMirheidari1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":1,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Gurjit Sangha",
    "email":"GSangha1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":1,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Tianli Chen",
    "email":"TChen7@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":1,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Aiman Awaludin",
    "email":"ABAwaludin1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":1,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Samuel Hunting",
    "email":"SAHunting1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":1,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Haydn Morris",
    "email":"HMorris2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":2,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Henry Jackson",
    "email":"HJackson3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":2,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Joshua Mills",
    "email":"JMills1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":2,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Sourabh Jain",
    "email":"SJain5@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":2,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Mo Chen",
    "email":"MChen1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":2,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Steven Turner",
    "email":"STurner1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":2,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohammad Abdul Adib Bin Talib",
    "email":"MAATalib1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":3,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Lee Booth",
    "email":"LBooth2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":3,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Jake Snow",
    "email":"JSnow1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":3,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Nan Jiang",
    "email":"NJiang1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":3,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Cracknell",
    "email":"TACracknell1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":3,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Lee Vassallo",
    "email":"LVassallo1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":3,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Jose Poyan Rodriguez",
    "email":"JPoyanRodriguez1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":4,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Matthew Jung",
    "email":"MJung4@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":4,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Max Riley",
    "email":"MRiley1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":4,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Kai Wong",
    "email":"KHWong2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":4,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Lulwa Almahmeed",
    "email":"LEAlmahmeed1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":4,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Jake Stothard",
    "email":"JStothard1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":4,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Richard Astwick",
    "email":"RJAstwick1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":5,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Mansimran Singh",
    "email":"MSingh1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":5,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Xiaoke Xu",
    "email":"XXu14@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":5,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Bokamoso Phuthego",
    "email":"BKPhuthego1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":5,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Joseph Richardson",
    "email":"JMRichardson1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":5,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Dominic Port",
    "email":"DPort1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":5,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"AER",
    "name":"John Evison",
    "email":"JEvison1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":6,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Stefan Blaginov",
    "email":"SBlaginov1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":6,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"Ugochukwu Eze",
    "email":"UKEze1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":6,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"COM",
    "name":"William Hughes",
    "email":"WHughes1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":6,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Jinyuan Zhang",
    "email":"JZhang23@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":6,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"MEC",
    "name":"James Jones",
    "email":"JOJones2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"F28",
    "hub":"Y",
    "group":6,
    "project":"EYH4-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Andrew Metcalfe",
    "email":"ARMetcalfe1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":1,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Anupama Nanayakkara",
    "email":"AGNanayakkara1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":1,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"AER",
    "name":"Zihao Zhu",
    "email":"ZZhu10@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":1,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Xin Yi",
    "email":"XYi4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":1,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Amrita Kang",
    "email":"AKKang2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":1,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Rachel Morecroft",
    "email":"mea08rm@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":1,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohamed Marei",
    "email":"MMarei1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":2,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Fredrick Moyo",
    "email":"FMoyo1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":2,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"AER",
    "name":"Owen Burgum",
    "email":"OBurgum1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":2,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"COM",
    "name":"Amy Brereton",
    "email":"AMBrereton1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":2,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Dhruv Gandhi",
    "email":"dgandhi3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":2,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Christianna Goes",
    "email":"CGoes1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":2,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Sa'ad Kamal-Deen",
    "email":"SKamal-Deen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":3,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Yaseen Noorani",
    "email":"YMKNoorani1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":3,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"AER",
    "name":"Thomas King",
    "email":"TRKing1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":3,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"COM",
    "name":"Alexandru Florea",
    "email":"AMFlorea1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":3,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Mohamed Wazni Mohamed Bazeer",
    "email":"MWMohamedBazeer1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":3,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Edward Whately-Smith",
    "email":"EAWhately-Smith1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":3,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Umang Arora",
    "email":"uarora1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":4,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Yinka Yemidale",
    "email":"YJAYemidale1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":4,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"COM",
    "name":"Sharon Simatwo",
    "email":"SCSimatwo1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":4,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Michael Allen",
    "email":"MJAllen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":4,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jeffrey Bong Wei Sian",
    "email":"JBong1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":4,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Eric Ngendahayo",
    "email":"ENgendahayo1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":4,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Yuzhou Lin",
    "email":"YLin20@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":5,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Yun Lu",
    "email":"YLu27@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":5,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"AER",
    "name":"Matthew Harvey",
    "email":"MHarvey2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":5,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"COM",
    "name":"Mathew Whillans",
    "email":"MWhillans1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":5,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jessica Chinchen",
    "email":"JLChinchen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":5,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jialiang Lin",
    "email":"JLin13@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":5,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Timothy Baker",
    "email":"TBaker1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":6,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Yian Ren",
    "email":"YRen3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":6,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"AER",
    "name":"Joseph Green",
    "email":"JGreen10@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":6,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Kee Beom Nam",
    "email":"KBNam1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":6,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Kamran Adl",
    "email":"KAdl1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":6,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Junqi Zhang",
    "email":"JZhang59@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 1",
    "hub":"F",
    "group":6,
    "project":"EYH5-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Simon Allen",
    "email":"SAllen4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":1,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Afiq Anuar",
    "email":"AAnuar2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":1,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"COM",
    "name":"Qianying Wu",
    "email":"QWu10@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":1,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"CPE",
    "name":"Mailun Deng",
    "email":"MDeng1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":1,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Elaine Livera",
    "email":"ERLivera1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":1,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"William Skipper",
    "email":"WASkipper1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":1,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Eltun Mirzazada",
    "email":"EMirzazada1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":2,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Awangku Pg Haji Baharuddin",
    "email":"AMZPgHajiBaharuddin1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":2,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"AER",
    "name":"Ilya Robbins",
    "email":"IRobbins1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":2,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"COM",
    "name":"James Foster",
    "email":"JAFoster1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":2,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Kelvin Cai",
    "email":"KLCai1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":2,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Harry Parker",
    "email":"HGParker1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":2,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Muhammad Haji Abd Rahman",
    "email":"MAHHajiAbdRahman1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":3,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Hong Wee Young",
    "email":"HWYoung2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":3,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"AER",
    "name":"Siu Lun Yeung",
    "email":"SYeung1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":3,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"COM",
    "name":"Jack Harvey",
    "email":"JHarvey1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":3,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"EEE",
    "name":"William Ruddick",
    "email":"WJRuddick1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":3,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Kieran Feeley",
    "email":"KFeeley1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":3,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohamed Hijji",
    "email":"MAHijji1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":4,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Jianxing Qin",
    "email":"JQin3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":4,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"AER",
    "name":"Robert Corkill",
    "email":"RWCorkill1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":4,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"COM",
    "name":"Joseph Macmahon",
    "email":"JMacmahon1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":4,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Wenbo Zhai",
    "email":"WZhai1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":4,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Matthew Jeffery",
    "email":"MJJeffery1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":4,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Muhammad Abdul Rahman",
    "email":"MZAbdulRahman1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":5,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohammad Mohd Jefri",
    "email":"MAQMohdJefri1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":5,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"AER",
    "name":"Siti Mahamad Zahir",
    "email":"SABMahamadZahir1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":5,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"COM",
    "name":"Jonathan Kilpatrick",
    "email":"JPWKilpatrick1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":5,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Priyanka Aswani",
    "email":"PAAswani1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":5,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Philip Beauchamp",
    "email":"PHBeauchamp1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":5,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohamed Al Sidairi",
    "email":"MASAlSidairi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":6,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Xinyu Hu",
    "email":"XHu16@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":6,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"AER",
    "name":"Jethro Pryke",
    "email":"JJPryke1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":6,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"COM",
    "name":"Stephen Rostanti",
    "email":"SRostanti1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":6,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"EEE",
    "name":"Ye Geng",
    "email":"YGeng2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":6,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"MEC",
    "name":"Scott Beamish",
    "email":"sbeamish1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"Civil Workroom 4",
    "hub":"G",
    "group":6,
    "project":"EYH5-2"
  });
Records.insert({
    "department":"ACS",
    "name":"Azrin Bin Awang Azahrin",
    "email":"AAZBinAwangAzahrin1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":1,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohamad Mohmad Akil",
    "email":"MAMohmadAkil1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":1,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Yipeng Wang",
    "email":"YWang99@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":1,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Diogenis Panagidis",
    "email":"DPanagidis1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":1,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"COM",
    "name":"Nicholas Giles",
    "email":"NGiles1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":1,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Alexander Agar",
    "email":"abrown7@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":1,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Lizhu Li",
    "email":"LLi14@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":2,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Matei Moldoveanu",
    "email":"mcmoldoveanu1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":2,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Zhe Shen",
    "email":"ZShen7@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":2,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Mohammad Khalid",
    "email":"MHBKhalid1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":2,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Chengzhi Wu",
    "email":"CWu13@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":2,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Angus Brockie",
    "email":"ACBrockie1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":2,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Ashraf Al-Hinaai",
    "email":"ASMAl-Hinaai1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":3,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Mohammad Anai",
    "email":"MNAnai1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":3,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"AER",
    "name":"Antony Lucas",
    "email":"ALucas1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":3,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"COM",
    "name":"Andrei-Cornel Sorbun",
    "email":"ACSorbun1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":3,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Heqing Lu",
    "email":"HLu9@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":3,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Chander Parshad",
    "email":"CSParshad1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":3,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Boon Kai Lim",
    "email":"BKLim1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":4,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Matthew Smith",
    "email":"MSmith12@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":4,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"AER",
    "name":"Bowen Guo",
    "email":"BWGuo1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":4,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"COM",
    "name":"Jonathon Pringle",
    "email":"JAPringle1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":4,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Umair Iqbal",
    "email":"UIqbal1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":4,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Erikas Kamaitis",
    "email":"EKamaitis1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":4,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Hamidiniy Hamdan",
    "email":"HHamdan2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":5,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Mingkai Su",
    "email":"MSu2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":5,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"AER",
    "name":"Christopher Georgiou",
    "email":"CGeorgiou1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":5,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"COM",
    "name":"Jeremy Christian",
    "email":"JChristian1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":5,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Cong Liu",
    "email":"CLiu25@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":5,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Sam Davison",
    "email":"SDavison1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":5,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Annastasios Marambos",
    "email":"ACMarambos1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":6,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"ACS",
    "name":"Quang Tuan Vu",
    "email":"QTVu1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":6,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"AER",
    "name":"Qijian Liu",
    "email":"QLiu4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":6,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"COM",
    "name":"James Mcilveen",
    "email":"JMcilveen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":6,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Otis Rook-Grignon",
    "email":"ORook-Grignon1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":6,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Xin Yan Ching",
    "email":"XYChing1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"LT9",
    "hub":"H",
    "group":6,
    "project":"EYH5-3"
  });
Records.insert({
    "department":"BIO",
    "name":"Richard Ackroyd",
    "email":"RFAckroyd1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":1,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Alexander Bolger",
    "email":"ABolger1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":1,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Danielle O'Loughlin",
    "email":"DOLoughlin1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":1,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Ethan Noy",
    "email":"ENoy1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":1,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Daud Sikander",
    "email":"DSikander1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":1,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Alexandra Agbu",
    "email":"ACAgbu1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":1,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Adam Derradji",
    "email":"ADerradji1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":2,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Hristo Dimitrov",
    "email":"HDimitrov1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":2,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Ricardo Pereira De Araujo",
    "email":"RPereiraDeAraujo1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":2,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Dennis Dennis",
    "email":"DDennis1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":2,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hong Shen LIM",
    "email":"HLIM4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":2,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Ambroise Laurent",
    "email":"AGRLaurent1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":2,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"AER",
    "name":"Man Ken Michael Cheung",
    "email":"MCheung2@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":3,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Arsham Khayatpoor",
    "email":"AKhayatpoor1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":3,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Hira Nayyar",
    "email":"HNayyar1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":3,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Ioana Pristoleanu",
    "email":"IPristoleanu1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":3,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Yuxi Wang",
    "email":"YWang86@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":3,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Helena Livesey",
    "email":"HMLivesey1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":3,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Jack Rutter",
    "email":"JWRutter1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":4,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Fatimah Shogbeni",
    "email":"AShogbeni1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":4,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Yiu Choi",
    "email":"YYKChoi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":4,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Liviu-Adrian Mihalcea",
    "email":"LAMihalcea1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":4,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Lok Won",
    "email":"LJWon1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":4,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jake Atkinson",
    "email":"JRAtkinson1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":4,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Ross Burdis",
    "email":"RBurdis1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":5,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Adam Sherratt",
    "email":"AWFSherratt1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":5,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Wan Chiu",
    "email":"WHTChiu1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":5,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Robert Dale",
    "email":"RKDale1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":5,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Wanxiao Hu",
    "email":"WHu3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":5,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Oliver Phipps",
    "email":"OPhipps1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":5,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Rony Schulte",
    "email":"RDSchulte1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":6,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Bethany Thomas",
    "email":"BThomas3@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":6,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"COM",
    "name":"Vasily Shelkov",
    "email":"VDShelkov1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":6,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Aaron Sawyer",
    "email":"ASawyer1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":6,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Binxun Chen",
    "email":"BChen4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":6,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Raajkamal Dhanjal",
    "email":"RSDDhanjal1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"RD14",
    "hub":"J",
    "group":6,
    "project":"EYH6-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Chris Smith",
    "email":"CSmith13@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":1,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Ashleigh Calderwood",
    "email":"ACalderwood1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":1,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Menglin Duan",
    "email":"MLDuan1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":1,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Laura Kennedy",
    "email":"LEKennedy1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":1,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Erika Firdaus Quah",
    "email":"EFirdausQuah1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":1,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Adam Karakoc",
    "email":"AKarakoc1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":1,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Jared Charles",
    "email":"JACharles1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":2,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Adam Canner",
    "email":"ACanner1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":2,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Muhammad Dzulkifli",
    "email":"MKBDzulkifli1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":2,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Samuel Trotter",
    "email":"SJTrotter1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":2,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Sum Sum Chan",
    "email":"SSChan1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":2,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Amir Usman",
    "email":"AUsman1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":2,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Daniar Maref",
    "email":"DMaref1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":3,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Amr Saleh",
    "email":"ASaleh1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":3,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Timothy Walker",
    "email":"TWalker2@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":3,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hao Wang",
    "email":"HWang43@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":3,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Benjamin Clarke",
    "email":"BClarke2@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":3,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Sarthak Khandelwal",
    "email":"SKhandelwal1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":3,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Balazs Suhajda",
    "email":"BSuhajda1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":4,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Ben Clark",
    "email":"BClark1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":4,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Mohamad Mohd Ridza",
    "email":"MMMohdRidza1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":4,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Long Ngai",
    "email":"LTHNgai1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":4,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Matthew Way",
    "email":"MWay1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":4,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Christopher Vickers",
    "email":"CSVickers1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":4,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Jake Askew",
    "email":"JWAskew1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":5,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Jessica Alce",
    "email":"JAlce1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":5,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Francis Hammond",
    "email":"FHammond1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":5,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Yijia Li",
    "email":"YLi62@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":5,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Samuel Robinson",
    "email":"SRobinson6@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":5,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Diwei Shi",
    "email":"DShi1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":5,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"AER",
    "name":"Amit Samuel",
    "email":"ASamuel1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":6,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Thomas Horton",
    "email":"THorton1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":6,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Rebecca Fairclough",
    "email":"RAFairclough1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":6,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Muhammad Naim Bin Mustafa",
    "email":"MMustafa1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":6,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Honglun Fu",
    "email":"HFu2@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":6,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Jeremiasz Podgorski",
    "email":"JPodgorski1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space1",
    "hub":"M",
    "group":6,
    "project":"EYH7-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Naomi Pimblett",
    "email":"NEPimblett1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":1,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Aaron Louis",
    "email":"AJSLouis1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":1,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Matthew Royle",
    "email":"MSRoyle1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":1,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Hon Nin Chan",
    "email":"HChan3@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":1,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Cong Peng",
    "email":"CPeng4@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":1,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Alexander Doey",
    "email":"ADoey1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":1,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"AER",
    "name":"Thomas Robb",
    "email":"TERobb1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":2,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Pak Ki Tsang",
    "email":"PKTsang1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":2,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Marvellous Khala",
    "email":"MJKhala1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":2,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Adrian Kraemer",
    "email":"ALKraemer1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":2,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Siming Liu",
    "email":"SLiu32@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":2,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Calvin Rossington",
    "email":"CRossington1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":2,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Kritin Gupta",
    "email":"KGupta1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":3,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Callum Jolley",
    "email":"CJolley1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":3,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Sara Ortiz De Landazuri",
    "email":"SOrtizDeLandazuri1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":3,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Abdullah Al Kalbani",
    "email":"AMHAlKalbani1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":3,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Edward Rackley",
    "email":"EJRackley1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":3,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MEC",
    "name":"George Wright",
    "email":"GSWright1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":3,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"AER",
    "name":"Stephen Waugh",
    "email":"SWaugh1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":4,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Nishit Goel",
    "email":"NGoel1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":4,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Kafel Tewolde",
    "email":"KGTewolde1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":4,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"EEE",
    "name":"Yongyu Gao",
    "email":"YGao15@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":4,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"James Ferriday",
    "email":"JFerriday1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":4,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MEC",
    "name":"Rui Li",
    "email":"RLi9@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":4,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"AER",
    "name":"Luke Mitchell",
    "email":"LMitchell3@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":5,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CIV",
    "name":"Xiang Zhu",
    "email":"XZhu12@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":5,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Sonal Shah",
    "email":"SKShah1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":5,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Liberty Taylor",
    "email":"LTaylor7@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":5,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Michelle Moore",
    "email":"MMoore2@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":5,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MEC",
    "name":"William Rowley",
    "email":"WRowley1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":5,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"AER",
    "name":"Kasun Rajapakse",
    "email":"KORajapakse1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Songyang Guan",
    "email":"SGuan1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Megan Hayer",
    "email":"MHayer1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"CPE",
    "name":"Warren Whitley",
    "email":"WWhitley1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Victoria Brown",
    "email":"VBrown1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MAT",
    "name":"Xueqian Geng",
    "email":"XGeng2@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"MEC",
    "name":"George Emmerson",
    "email":"GEmmerson1@sheffield.ac.uk",
    "building":"Hadfield",
    "room":"Ideas Space2",
    "hub":"N",
    "group":6,
    "project":"EYH7-3"
  });
Records.insert({
    "department":"AER",
    "name":"Daniel Gonzalez Pena",
    "email":"DEGonzalezPena1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":1,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Abitha Balashanmugam",
    "email":"ABalashanmugam1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":1,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Bradley Perry",
    "email":"BPerry1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":1,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Ola Mathisrud",
    "email":"OBMathisrud1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":1,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Connor Mcmahon",
    "email":"CMcmahon1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":1,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Robiquet",
    "email":"trobiquet1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":1,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"COM",
    "name":"Victoria Hawthorn",
    "email":"VMHawthorn1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":2,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Wai Hong Ong",
    "email":"AWHOng1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":2,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Matthew Allen",
    "email":"MOTAllen1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":2,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Gabriel Bracken",
    "email":"GBracken1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":2,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Daniel Luke",
    "email":"DTJLuke1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":2,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Wei-Zhong Tan",
    "email":"WZTan1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":2,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"ACS",
    "name":"Jacob Ngome",
    "email":"JMNgome1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":3,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Samuel Mear",
    "email":"SMear1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":3,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Edmund Koh",
    "email":"EJAKoh1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":3,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Joshua Chandler",
    "email":"JWGChandler1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":3,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Guy Pearson",
    "email":"GPearson1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":3,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Monika Taneska",
    "email":"MATaneska1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":3,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Stephen Twentyman",
    "email":"STwentyman1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":4,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"COM",
    "name":"Shihao Shen",
    "email":"SShen4@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":4,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Edward Greenall",
    "email":"ELGreenall1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":4,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Jacob Ikeleng",
    "email":"JIkeleng1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":4,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Michael Caley",
    "email":"MCaley1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":4,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Robert Spencer",
    "email":"RASpencer1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":4,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Chen Lee",
    "email":"CYLee1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":5,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"COM",
    "name":"Nicola Willis",
    "email":"NWillis1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":5,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"IVAN MAN JUN TAN",
    "email":"ITAN1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":5,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Thomas Drew",
    "email":"TDrew1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":5,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Sean Parle",
    "email":"SParle1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":5,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Hugh Wessel",
    "email":"HWWessel1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":5,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CIV",
    "name":"Muhammad Nazemi",
    "email":"MHNNazemi1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":6,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"COM",
    "name":"Alexandros Megalemos",
    "email":"AMegalemos1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":6,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Man Lei",
    "email":"MCLei1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":6,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MAT",
    "name":"Zak Lomas",
    "email":"ZLomas1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":6,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Lawrence Bull",
    "email":"LBull1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":6,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Thomas Inglis",
    "email":"TInglis1@sheffield.ac.uk",
    "building":"Mappin",
    "room":"E132",
    "hub":"I",
    "group":6,
    "project":"EYH8-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Dulanji Abeysuriya",
    "email":"DAbeysuriya1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":1,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Aden Precious",
    "email":"APrecious1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":1,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Hassan Shah",
    "email":"HAShah1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":1,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Adam Cross",
    "email":"ACross1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":1,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Joseph Hicks",
    "email":"JHicks2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":1,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Mehrzad Peyvandi",
    "email":"MPeyvandi1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":1,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Jordan Lee",
    "email":"JLee41@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":2,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Keon Ji Moon",
    "email":"KMoon1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":2,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Longguangrui Yu",
    "email":"LYu3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":2,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ahmad Zainual",
    "email":"AZBZainual1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":2,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Bradley Glass",
    "email":"BGlass1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":2,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Sotirios Kopatsaris",
    "email":"SKopatsaris1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":2,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Thomas Rahman",
    "email":"TRahman2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":3,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Luke Maitra",
    "email":"LSMaitra1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":3,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Sonay Babaoglu",
    "email":"SBabaoglu1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":3,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ammar Hassan",
    "email":"AHassan2@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":3,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Abdul A Jamil",
    "email":"AWAJamil1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":3,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"James Morgan",
    "email":"JPMorgan1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":3,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"BIO",
    "name":"Vaidehi Patil",
    "email":"VPatil1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":4,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Nouh Abukar",
    "email":"NAbukar1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":4,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Ahmad Albustami",
    "email":"AAlbustami1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":4,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Shirui Gu",
    "email":"SGu3@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":4,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Luke Boswell",
    "email":"LBoswell1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":4,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Benjamin Norman",
    "email":"BJNorman1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":4,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"COM",
    "name":"Karan Sood",
    "email":"KSood1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":5,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Sanduni Pathiraja Mudalige Dona",
    "email":"STPMDona1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":5,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Bakytnur Kassenbay",
    "email":"BKassenbay1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":5,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Tianyue Zou",
    "email":"TZou1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":5,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"David Freary",
    "email":"DRFreary1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":5,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Rachel Yehezkel",
    "email":"RAYehezkel1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":5,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"COM",
    "name":"Lyes Bouakaz",
    "email":"LBouakaz1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":6,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"CPE",
    "name":"Tamara Hijazi",
    "email":"THijazi1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":6,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Xiaohang Li",
    "email":"XLi54@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":6,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"EEE",
    "name":"Chenming Zhang",
    "email":"CZhang20@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":6,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Shaunak Acharya",
    "email":"SAcharya1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":6,
    "project":"EYH9-1"
  });
Records.insert({
    "department":"MEC",
    "name":"Edward Marston",
    "email":"EJMarston1@sheffield.ac.uk",
    "building":"Hicks",
    "room":"LT D (SE Entrance)",
    "hub":"U",
    "group":6,
    "project":"EYH9-1"
  });

	};


})