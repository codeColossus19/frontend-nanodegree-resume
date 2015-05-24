var bio={
    "name": "CodeColossus19",
    "role": "Director of Clandestine Operations",
    "contacts": {
        "mobile": "123-4655",
        "email": "jibberish@aol.com",
        "github": "https://github.com/",
        "twitter": "exampletwitter@twitter.com",
        "location": "Arizona"
    },
    "welcomeMessage": "Welcome to my fantabulous site!",
    "skills": ["Chess","Eating","Chipotle","Awesomeness"],
    "biopic": "C:/Git/frontend-nanodegree-resume/images/subzero.jpg"
};

var work= {
"jobs":[{
    "employer": "Lin Quai Dojo",
    "title": "Commander",
    "location": "Phoenix",
    "dates": "2014-2015",
    "description": "In charge of day to day Mortal Kombat operations"
},{
    "employer": "Ajs",
    "title": "bagboy",
    "location": "Phoenix",
    "dates": "2004-2005",
    "description": "Bagged"
}]
};


var education = {
    "schools": [
        {
            "name": "Arizona State University",
            "location": "Tempe, Arizona",
            "degree": "BA",
            "major": "Computer Information Systems",
            "dates":2011,
            "url":"asu.edu"
        },
        {
            "name": "Arcadia High School",
            "location": "Phoenix, Arizona",
            "degree": "Diploma",
            "major": "High School",
            "dates":2007,
            "url":"http://susd.arcadia.schoolfusion.us/"
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
            "dates": "2015",
            "description": "Javascript Basics"
        },
        {
            "title": "C# Course",
            "CourseFormat": "Self Study",
            "dates": "2014-2015",
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

if( bio.skills.length> 0){
$('#header').append(HTMLskillsStart);
    for(var item in bio.skills){
        var formattedSkill=HTMLskills.replace("%data%", bio.skills[item]);
        $('#skills').append(formattedSkill);
    }
}

if(work!="")
{
    for(var item in work.jobs)
    {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[item].title);
        $('.work-entry:last').append(formattedEmployer +formattedTitle);
    }
}



