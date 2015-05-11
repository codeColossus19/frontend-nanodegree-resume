var yourName="CodeColossus19";
var role="Director of Clandestine Operations";
var bio={
	"Name":yourName,
	"Role":role,
	"Contacts":{
		"Mobile": "123-4655",
		"Morse Code" : "Vun Zero",
		"Cell"  : "867-309",
		"Email" : "jibberish@aol.com"
	},
	"PictureUrl": "C:/Git/frontend-nanodegree-resume/images/subzero.jpg",
	"WelcomeMessage":"Welcome to my fantabulous site!",
	"Skills":"Chess, Eating, Chipotle, Awesomeness"	
}

// var awesomeThoughts="I am "+yourName+" and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts=awesomeThoughts.replace("AWESOME","fun");

// $("#main").append(funThoughts);
//var contactKeys=Object.getOwnPropertyNames(bio.Contacts);

var formattedName=HTMLheaderName.replace('%data%',bio.Name);
var formattedRole=HTMLheaderRole.replace('%data%',bio.Role);

var formattedContacts;

for(var key in bio.Contacts)
{
	formattedContacts=HTMLcontactGeneric.replace("%contact%",key+":").replace("%data%",bio.Contacts[key]);
	
	$('#footerContacts').append(formattedContacts);
}

var formattedPic=HTMLbioPic.replace("%data%",bio.PictureUrl);
var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage)
var formattedSkills=HTMLskills.replace("%data%", bio.Skills);


$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedPic);
$('#header').append(formattedWelcomeMessage);
$('#header').append(formattedSkills);


