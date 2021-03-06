	$("#newplaysubmit").prop("disabled", true);					//	start with newplaysubmit button disabled
	
	$("#signinlabel").click(function() {						//	start with Sign In button available
		displayLogin();
	});

	$("#signuplabel").click(function() {						//	if Sign Up button is clicked, hide buttons and show Sign Up form
		$("#signinlabel").slideUp();
		$("#signuplabel").slideUp();
		displayNewPlayer();
	});

	$("#sublogodiv").click(function() {							//	the "Making a Smarter Ghost" text is a hidden switch to show the story
		if($("#story").is(":hidden")) {
			$("#story").show("slow");
		} else {
			$("#story").slideUp();
		}
	});
	


function displayInitial() {
	$("#loginformdiv").fadeOut("slow");
	$("#loginerrormsg").fadeOut("slow");
	$("#newplayerformdiv").fadeOut("slow");
	$("#newpalyererrormsg").fadeOut("slow");
	$("#loggedindiv").fadeOut("slow");
	
/* 			menudiv.removeChild(document.getElementById("loginformdiv"));
			menudiv.removeChild(document.getElementById("loginerrormsg"));
			menudiv.removeChild(document.getElementById("newplayerformdiv"));
			menudiv.removeChild(document.getElementById("newplayererrormsg"));
			menudiv.removeChild(document.getElementById("loggedindiv"));			 */
	
	var DAHlogodiv = document.createElement("div");
	var sublogodiv = document.createElement("div");
	var signindiv = document.createElement("div");
	var signupdiv = document.createElement("div");
	var hr = document.createElement("hr");
	
	menudiv.appendChild(DAHlogodiv);
	menudiv.appendChild(sublogodiv);
	menudiv.appendChild(signindiv);
	menudiv.appendChild(signupdiv);
	menudiv.appendChild(hr);
	
	DAHlogodiv.setAttribute(	"id", 		"DAHLogo");
	DAHlogodiv.setAttribute(	"name", 	"DAHLogo");
	DAHlogodiv.setAttribute(	"class", 	"DAHLogo");
	DAHlogodiv.innerHTML = 		"Developers Against Humanity (DAH)!";
	
	sublogodiv.setAttribute(	"id", 		"subLogo");
	sublogodiv.setAttribute(	"name", 	"subLogo");
	sublogodiv.setAttribute(	"class", 	"subLogo");
	sublogodiv.innerHTML = 		"Making a smarter ghost...";
	
	signindiv.setAttribute(		"id", 		"signinlabel");
	signindiv.setAttribute(		"name", 	"signinlabel");
	signindiv.setAttribute(		"class", 	"labelbtn");
	signindiv.innerHTML = 		"Sign In";
	
	signupdiv.setAttribute(		"id", 		"signuplabel");
	signupdiv.setAttribute(		"name", 	"signuplabel");
	signupdiv.setAttribute(		"class", 	"labelbtn");
	signupdiv.innerHTML = 		"Sign Up";
	
	hr.setAttribute(			"id", 		"seperator");
	hr.setAttribute(			"name", 	"seperator");
	hr.setAttribute(			"class", 	"seperator");
}

function displayLogin() {
	$("#signinlabel").fadeOut("slow");
	$("#signuplabel").fadeOut("slow");
	menudiv.removeChild(document.getElementById("signinlabel"));
	menudiv.removeChild(document.getElementById("signuplabel"));
	
	var loginformdiv = document.createElement("div");
	var loginerrormsg = document.createElement("div");
	
	menudiv.appendChild(loginformdiv);
	menudiv.appendChild(loginerrormsg);
	
	loginformdiv.setAttribute(		"id", 		"loginformdiv");
	loginformdiv.setAttribute(		"name", 	"loginformdiv");
	loginformdiv.setAttribute(		"class", 	"loginformdiv");
	var loginform = document.createElement("form");
		loginform.setAttribute(		"id", 		"loginform");
		loginform.setAttribute(		"name", 	"loginform");
		loginform.setAttribute(		"class", 	"inputform");
		loginform.setAttribute(		"action", 	"Login");
		loginform.setAttribute(		"method", 	"POST");
		var loginUNdiv = document.createElement("div");
		loginUNdiv.setAttribute(	"id", 		"loginUNdiv");
		loginUNdiv.setAttribute(	"name", 	"loginUNdiv");
		loginUNdiv.setAttribute(	"class", 	"UNdiv");
			var loginUNlbl = document.createElement("label");
			loginUNlbl.setAttribute("id", 		"usernamelbl");
			loginUNlbl.setAttribute("name", 	"usernamelbl");
			loginUNlbl.setAttribute("class", 	"label");
			loginUNlbl.innerHTML = "Username:"
			var loginUNbox = document.createElement("input");
			loginUNbox.setAttribute("id", 		"username");
			loginUNbox.setAttribute("name", 	"username");
			loginUNbox.setAttribute("class", 	"inputbox");
		loginUNdiv.appendChild(loginUNlbl);
		loginUNdiv.appendChild(loginUNbox);
		var loginPWdiv = document.createElement("div");
		loginPWdiv.setAttribute(	"id", 		"loginPWdiv");
		loginPWdiv.setAttribute(	"name", 	"loginPWdiv");
		loginPWdiv.setAttribute(	"class", 	"loginPWdiv");
			var loginPWlbl = document.createElement("label");
			loginPWlbl.setAttribute("id", 		"passwordlbl");
			loginPWlbl.setAttribute("name", 	"passwordlbl");
			loginPWlbl.setAttribute("class", 	"label");
			loginPWlbl.innerHTML = "Password:"
			var loginPWbox = document.createElement("input");
			loginPWbox.setAttribute("id", 		"password");
			loginPWbox.setAttribute("name", 	"password");
			loginPWbox.setAttribute("class", 	"inputbox");
		loginPWdiv.appendChild(loginPWlbl);
		loginPWdiv.appendChild(loginPWbox);
		var loginsubmitbtn = document.createElement("div");
		loginsubmitbtn.setAttribute("id",		"loginsubmitbtn");
		loginsubmitbtn.setAttribute("name",		"loginsubmitbtn");
		loginsubmitbtn.setAttribute("class", 	"labelbtn");
		loginsubmitbtn.innerHTML = "Login";
		var loginGuestbtn = document.createElement("div");
		loginGuestbtn.setAttribute("id",		"loginGuestbtn");
		loginGuestbtn.setAttribute("name",		"loginGuestbtn");
		loginGuestbtn.setAttribute("class", 	"labelbtn");
		loginGuestbtn.innerHTML = "Play as Guest";
		var loginBack = document.createElement("div");
		loginBack.setAttribute(		"id",		"loginBack");
		loginBack.setAttribute(		"name",		"loginBack");
		loginBack.setAttribute(		"class",	"labelbtn");
		loginBack.innerHTML = "Back";
		
	loginformdiv.appendChild(loginform);
	loginform.appendChild(loginUNdiv);	
	loginform.appendChild(loginPWdiv);
	loginform.appendChild(loginsubmitbtn);	
	loginform.appendChild(loginGuestbtn);	
	loginform.appendChild(loginBack);
}

$("#loginsubmitbtn").click(function(evt) {
	console.log($("#loginform").serialize());
	$.ajax({											//	process login 
		url: "REST/login",								//	CONTROLLER: LoginController.java/on Submit(String u, String p, session)
		method: "POST",									//	return: LocalPlayer (from findPlayer(u, p) in LoginController)
		dataType: "json",
		data: $("#loginform").serialize(),
		success: (function(returnedData, status) {	
			console.log("Back from LoginController" + returnedData);
			localplayer = returnedData;
			document.getElementById("nick").innerHTML 			= returnedData.nickname;
			document.getElementById("playeravatar").setAttribute("src", returnedData.avatar);
			document.getElementById("playergames").innerHTML 	= returnedData.gamesPlayed;
			document.getElementById("playerhandswon").innerHTML	= returnedData.handsWon;
			document.getElementById("playerhorrible").innerHTML = returnedData.horriblePoints;
			
			$("#loginformdiv").slideUp();				//	hide loginformdiv
			$("#loggedindiv").slideDown();				//	show loggedindiv
			$("#playrecordframe").slideDown();			//	show playrecordframe
			$("#gameoptionsframe").slideDown();			//	show gameoptionsframe
		}),
		error: function(xmlhttp, status) {
			console.error("DEBUG... index.jsp/login().ajax.failure: " + status);
		}
	})
})

$("#loginGuestbtn").click(function(evt) {
	console.log("playasguest...");
	document.getElementById("username").value = "guest";
	document.getElementById("password").value= "pass";
	$("#loginsubmitbtn").click();
})

$("loginBack").click(function() {
	displayInitial();
});

function displayNewPlayer() {
	$("#signindiv").fadeOut("slow");
	$("#signupdiv").fadeOut("slow");
	menudiv.removeChild(document.getElementById("signinlabel"));
	menudiv.removeChild(document.getElementById("signuplabel"));
	
	var newplformdiv = document.createElement("div");
	var newplerrormsg = document.createElement("div");
	
	menudiv.appendChild(newplformdiv);
	menudiv.appendChild(newplerrormsg);
	
	newplformdiv.setAttribute(		"id", 		"newplformdiv");
	newplformdiv.setAttribute(		"name", 	"newplformdiv");
	newplformdiv.setAttribute(		"class", 	"newplformdiv");
	var newplform = document.createElement("form");
		newplform.setAttribute(		"id", 		"newplform");
		newplform.setAttribute(		"name", 	"newplform");
		newplform.setAttribute(		"class", 	"newplform");
		newplform.setAttribute(		"action", 	"NewPlayer");
		newplform.setAttribute(		"method", 	"POST");
		var newplUNdiv = document.createElement("div");
		newplUNdiv.setAttribute(	"id", 		"newplUNdiv");
		newplUNdiv.setAttribute(	"name", 	"newplUNdiv");
		newplUNdiv.setAttribute(	"class", 	"newplUNdiv");
			var newplUNlbl = document.createElement("label");
			newplUNlbl.setAttribute("id", 		"usernamelbl");
			newplUNlbl.setAttribute("name", 	"usernamelbl");
			newplUNlbl.setAttribute("class", 	"label");
			newplUNlbl.innerHTML = "Username:"
			var newplUNbox = document.createElement("input");
			newplUNbox.setAttribute("id", 		"username");
			newplUNbox.setAttribute("name", 	"username");
			newplUNbox.setAttribute("class", 	"inputbox");
		newplUNdiv.appendChild(newplUNlbl);
		newplUNdiv.appendChild(newplUNbox);
		var newplPWdiv = document.createElement("div");
		newplPWdiv.setAttribute(	"id", 		"newplPWdiv");
		newplPWdiv.setAttribute(	"name", 	"newplPWdiv");
		newplPWdiv.setAttribute(	"class", 	"newplPWdiv");
			var newplPWlbl = document.createElement("label");
			newplPWlbl.setAttribute("id", 		"passwordlbl");
			newplPWlbl.setAttribute("name", 	"passwordlbl");
			newplPWlbl.setAttribute("class", 	"label");
			newplPWlbl.innerHTML = "Password:"
			var newplPWbox = document.createElement("input");
			newplPWbox.setAttribute("id", 		"password");
			newplPWbox.setAttribute("name", 	"password");
			newplPWbox.setAttribute("class", 	"inputbox");
		newplPWdiv.appendChild(newplPWlbl);
		newplPWdiv.appendChild(newplPWbox);
		var newplsubmitbtn = document.createElement("div");
		newplsubmitbtn.setAttribute("id",		"newplsubmitbtn");
		newplsubmitbtn.setAttribute("name",		"newplsubmitbtn");
		newplsubmitbtn.setAttribute("class", 	"labelbtn");
		newplsubmitbtn.innerHTML = "Create New Account";
		var newplBack = document.createElement("div");
		newplBack.setAttribute(		"id",		"newplBack");
		newplBack.setAttribute(		"name",		"newplBack");
		newplBack.setAttribute(		"class",	"labelbtn");
		newplBack.innerHTML = "Back";
		
	newplformdiv.appendChild(newplform);
	newplform.appendChild(newplUNdiv);	
	newplform.appendChild(newplPWdiv);
	newplform.appendChild(newplsubmitbtn);	
	newplform.appendChild(newplBack);
}

$("#newplayerform").change(function() {						//	when anything changes in Sign Up form, re-verify 
	verifyproceed();
});

$("#newplayUserbox").focusout(function() {					//	when the user tabs out of the username box, check if username is available
	console.log(document.getElementById("newplayername").value);
	if(document.getElementById("newplayername").value.length > 3) {
		checkUsername(document.getElementById("newplayername").value);
		verifyproceed();
	}
});

function checkUsername(username) {							//	send username to REST_AJAX Controller checkusername
	console.log("in code.js checkUsername() function.")		//	returns true if the username is already in database (prevents use of button until fixed)
	var myurl = "REST/checkUsername?username=" + username;
	$.ajax({								
		url: myurl,											//	CONTROLLER: REST_AJAXController.java/checkUsernameJSON(String u)
		data: "",											//	return: boolean (if ElementList.isEmpty())
		type: "GET",
		dataType: "json",
		success: (function(returnedData, status) {
			var mydiv = document.getElementById("newplayUserbox");
			var msg = document.getElementById("msg");
			var stat = document.getElementById("statU");
			console.log("DEBUG... /DAH/REST/checkUsername Datacheck: " + msg);
				stat.style.height = "25px";
				stat.style.width = "25px";
				stat.style.display = "block";
				stat.setAttribute("class", "staticon");
				stat.setAttribute("alt", "staticon");
				stat.setAttribute("src", "/DAH/images/status/ellipse.png")
				msg.setAttribute("class", "error");
			if(returnedData == false) {
				stat.setAttribute("src", "/DAH/images/status/check.png");
				msg.innerHTML = "Username is available.";
				msg.style.color = "green";
				msg.style.display = "block";
				mydiv.setAttribute("check", "yes");
				verifyproceed();
				console.log("in code.js checkUsername() function - returnedData is false : " + stat);
			} else {
				stat.setAttribute("src", "/DAH/images/status/nope.png");
				msg.innerHTML = "Username is already taken. Please enter new username.";
				msg.style.color = "red";
				msg.style.display = "block";
				mydiv.setAttribute("check", "no");
				verifyproceed();
				console.log("in code.js checkUsername() function - returnedData is true : " + stat);
			}
		}),
		error: function(xmlhttp, status) {
			console.error("DEBUG... index.jsp/checkUsername().ajax.failure: " + status);
		}
	})
}

$("#newplaysubmit").click(function(evt) {
	console.log($("#newplayerform").serialize());
	$.ajax({
		url: "REST/NewPlayer",
		method: "POST",
		dataType: "json",
		data: $("#newplayerform").serialize(),
		success: (function(returnedData, status) {
			console.log("Back from NewPlayerController" + returnedData);
			localplayer = returnedData;
			document.getElementById("nick").innerHTML 			= returnedData.nickname;
			document.getElementById("playeravatar").setAttribute("src", returnedData.avatar);
			document.getElementById("playergames").innerHTML 	= returnedData.gamesPlayed;
			document.getElementById("playerhandswon").innerHTML	= returnedData.handsWon;
			document.getElementById("playerhorrible").innerHTML = returnedData.horriblePoints;
			
			$("#newplayerformdiv").slideUp();				//	hide loginformdiv
			$("#loggedindiv").slideDown();				//	show loggedindiv
			$("#playrecordframe").slideDown();			//	show playrecordframe
			$("#gameoptionsframe").slideDown();			//	show gameoptionsframe
		}),
		error: function(xmlhttp, status) {
			console.error("DEBUG... index.jsp.newplaysubmit().ajax.failure: " + status);
		}
	})
})

$("#confirmPassbox").keyup(function(evt) {
	var c = evt.target.value;
	var conf = document.getElementById("confirmPassbox");
	var orig = document.getElementById("newplayerpass").value;
	var stat = document.getElementById("statP");

	console.log("in #confirmPassbox.keypress. " + c.length + " " + orig.length);
		stat.setAttribute("src", "/DAH/images/status/nope.png");
		stat.setAttribute("height", "25px");
		stat.setAttribute("width", "25px");
		stat.setAttribute("class", "staticon");
		stat.setAttribute("alt", "staticon");
		stat.setAttribute("display", "block");						
	if(c.length > 3 && c.length <= orig.length) {
		if(c == orig.substr(0, c.length)) {
			stat.setAttribute("src", "/DAH/images/status/ellipse.png");
			if(c == orig.substr(conf.length)) {
				stat.setAttribute("src", "/DAH/images/status/check.png")
				conf.setAttribute("check", "yes");
			}
		}
		else { 
			stat.setAttribute("src", "/DAH/images/status/nope.png"); 
			conf.setAttribute("check", "no");
		}
	}
});

function verifyproceed() {
	var goodusername = document.getElementById("newplayUserbox").getAttribute("check");
	var goodpassword = document.getElementById("confirmPassbox").getAttribute("check");
	console.log("to activate button username and password must be checked: " + goodusername + " " + goodpassword);
	if(goodusername == "yes" && goodpassword == "yes") {
		$("#newplaysubmit").prop("disabled", false);
	} else {
		$("#newplaysubmit").prop("disabled", true);
	}
	console.log("in verifyproceed(). status of submit button: " + document.getElementById("newplaysubmit").hasAttribute("disabled"));
}

$("newplPWBack").click(function() {
	displayInitial();
});

function displayLoggedIn() {
	$("#loginformdiv").fadeOut("slow");
	$("#loginerrormsg").fadeOut("slow");
	$("#newplayerformdiv").fadeOut("slow");
	$("#newpalyererrormsg").fadeOut("slow");
	
	menudiv.removeChild(document.getElementById("loginformdiv"));
	menudiv.removeChild(document.getElementById("loginerrormsg"));
	menudiv.removeChild(document.getElementById("newplayerformdiv"));
	menudiv.removeChild(document.getElementById("newplayererrormsg"));
	
	var loggedindiv = document.createElement("div");
	
	menudiv.appendChild(loggedindiv);
	
	var welcomediv = document.createElement("div");
	var settingsdiv = document.createElement("div");
	var avatardiv = document.createElement("div");
	
	menudiv.appendChild(welcomediv);
	menudiv.appendChild(settingsdiv);
	menudiv.appendChild(avatardiv);
	
	welcomediv.setAttribute(		"id",		"welcomediv");
	welcomediv.setAttribute(		"name",		"welcomediv");
	welcomediv.setAttribute(		"class",	"welcomediv");
	welcomediv.innerHTML = "Welcome";
	var nicknamespan = document.createElement("span");
		nicknamespan.setAttribute(	"id",		"nick");
		nicknamespan.setAttribute(	"name",		"nick");
	welcomediv.appendChild(nicknamespan);
	
	settingsdiv.setAttribute(		"id",		"settingsdiv");
	settingsdiv.setAttribute(		"name",		"settingsdiv");
	settingsdiv.setAttribute(		"class",	"settingsdiv");
	var menusettings = document.createElement("img");
		menusettings.setAttribute(	"id",		"menusettings");
		menusettings.setAttribute(	"name",		"menusettings");
		menusettings.setAttribute(	"class",	"menusettings");
		menusettings.setAttribute(	"alt",		"menusettings");
		menusettings.setAttribute(	"src",		"/images/settings.png");
		menusettings.setAttribute(	"height",	"30px");
		menusettings.setAttribute(	"width",	"30px");
	settingsdiv.appendChild(menusettings);
	
	avatardiv.setAttribute(		"id",		"avatardiv");
	avatardiv.setAttribute(		"name",		"avatardiv");
	avatardiv.setAttribute(		"class",	"avatardiv");
	var playeravatar = document.createElement("img");
		playeravatar.setAttribute(	"id",		"playeravatar");
		playeravatar.setAttribute(	"name",		"playeravatar");
		playeravatar.setAttribute(	"class",	"playeravatar");
		playeravatar.setAttribute(	"alt",		"playeravatar");
		menusettings.setAttribute(	"src",		"");
		playeravatar.setAttribute(	"height",	"140px");
		playeravatar.setAttribute(	"width",	"128px");
	avatardiv.appendChild(playeravatar);
}