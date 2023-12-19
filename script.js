
var number = 1;
var yourName = "Cris";
var friendsName = "Diego";
$(".sent").show();
$(".received").css("background-color", "orange");

$(".me").click(function(){
 	var message = $(".your-input").val();
    $(".sent").append("<p>" + message + "</p>");
});

$(".friend").click(function(){
 	var message = $(".friend-input").val();
    $(".received").append("<p>" + message + "</p>");
	number += 1; 
	$(".nuber").text("Number of messages recieved: " + number);
});

//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}