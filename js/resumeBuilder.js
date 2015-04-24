var yourName="CodeColossus19";
var role="Director of Clandestine Operations";

// var awesomeThoughts="I am "+yourName+" and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts=awesomeThoughts.replace("AWESOME","fun");

// $("#main").append(funThoughts);

var formattedName=HTMLheaderName.replace('%data%',yourName);
var formattedRole=HTMLheaderRole.replace('%data%',role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);