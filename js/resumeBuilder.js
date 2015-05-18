var bio={
    "Name": "CodeColossus19",
    "Role": "Director of Clandestine Operations",
    "Contacts": {
        "Mobile": "123-4655",
        "Morse Code": "Vun Zero",
        "Cell": "8675-309",
        "Email": "jibberish@aol.com"
    },
    "PictureUrl": "C:/Git/frontend-nanodegree-resume/images/subzero.jpg",
    "WelcomeMessage": "Welcome to my fantabulous site!",
    "Skills": "Chess, Eating, Chipotle, Awesomeness"
};

var work= {
    "jobposition": "Commander",
    "employer": "Lin Quai Dojo",
    "years": 4,
    "City": "Phoenix"
};


var education = {
    "schools": [
        {
            "name": "Arizona State University",
            "city": "Tempe, Arizona",
            "degree": "BA",
            "major": "Computer Information Systems"
        },
        {
            "name": "Arcadia High School",
            "city": "Phoenix, Arizona",
            "degree": "Diploma",
            "major": "High School"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/course/viewer#!/c-ud804"
        }
    ]
};

var projects = {
    "project": [
        {
            "title": "Javascript Course",
            "CourseFormat": "Online",
            "dates": 2015,
            "description": "Javascript Basics"
        },
        {
            "title": "C# Course",
            "CourseFormat": "Self Study",
            "dates": 2015,
            "description": "C# expert skills"
        }
    ]
};

// var awesomeThoughts="I am "+yourName+" and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts=awesomeThoughts.replace("AWESOME","fun");

// $("#main").append(funThoughts);
//var contactKeys=Object.getOwnPropertyNames(bio.Contacts);
/*
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

var formattedUniversity=HTMLschoolName.replace("%data%",education.onlineCourses[0].title);
var formattedWorkPosition=HTMLworkTitle.replace("%data%",work.jobposition);


//header
$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedPic);
$('#header').append(formattedWelcomeMessage);


//projects


//work experience
$('#workExperience').append(formattedWorkPosition);

//education
$('#education').append(formattedUniversity);

//mapDiv
*/

if(bio.skills!="")
{
var formattedSkills=HTMLskills.replace("%data%", bio.Skills);
$('#header').append(formattedSkills);
$('#skills').append(formattedSkills);
}


