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
    "skills": ["Chess","Eating","Chipotle","Awesomeness","C#", "Javascript", "SQL", "Jade Templating", "Bootstrap", "Tennis","Running","Darts", "Extremely Strong", "Kung Fu"],
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
    "description": "Bagged groceries."
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
            "description": "In this course, you'll explore the JavaScript programming language by creating an interactive version of your résumé. You’ll learn the JavaScript programming fundamentals you need while building new elements and sections to enhance your résumé. "
        },
        {
            "title": "C# Course",
            "CourseFormat": "Self Study",
            "dates": "2014-2015",
            "description": "C# expert skills learned while taking practice tests, the 70-483 C# exam, and materials from PluralSight."
        }
    ]
};

var formattedName=HTMLheaderName.replace('%data%',bio.name);
var formattedRole=HTMLheaderRole.replace('%data%',bio.role);
var formattedContacts;

for(var key in bio.contacts)
{
	formattedContacts=HTMLcontactGeneric.replace("%contact%",key+":").replace("%data%",bio.contacts[key]);
	
	$('#topContacts').append(formattedContacts);
}

var formattedPic=HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage)
var formattedUniversity=HTMLschoolName.replace("%data%",education.onlineCourses[0].title);



//header
$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedPic);
$('#header').append(formattedWelcomeMessage);


//projects

//education
$('#education').append(formattedUniversity);

//mapDiv


if( bio.skills.length> 0){
$('#header').append(HTMLskillsStart);
    for(var item in bio.skills){
        var formattedSkill=HTMLskills.replace("%data%", bio.skills[item]);
        $('#skills').append(formattedSkill);
    }
}

if(work!="")
{
populateWork();
}

$('#main').append(internationalizeButton);
//Functions
function inName(name) {
    var splitName=name.trim().split(" ");
    var lastName=splitName[1].toUpperCase();
    var firstName=splitName[0].slice(0,1).toUpperCase()+splitName[0].slice(1).toLowerCase();
    return firstName.concat(" "+lastName);
}

$(document).click(function(loc){
var x= loc.pageX;
var y= loc.pageY;

logClick(x,y);
});

function logClick(x,y){
    console.log("x-loc:"+x+" y-loc:"+y)
}

function populateWork()
{
    for(var item in work.jobs)
    {
        //work experience
        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[item].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
        var formateedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployer +formattedTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formateedWorkLocation);
        $('.work-entry:last').append(formattedWorkDescription);
    }
}

