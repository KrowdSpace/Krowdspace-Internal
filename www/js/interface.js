/*CHANGES THE TABS*/
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

/*INSERT JSON INFORMATION INTO #REGISTER TAB (TAB 1)*/
$(document).ready(function () {
	var json = [
	{"FNAME":"Mason","LNAME":"Halstead","EMAIL":"mason@krowdspace.com","KSUSER":"Masonkickstarter","IGUSER":"Masonindiegogo","PROJECT":"Yes"},
	{"FNAME":"Mason","LNAME":"Halstead","EMAIL":"mason@krowdspace.com","KSUSER":"Masonkickstarter","IGUSER":"Masonindiegogo","PROJECT":"Yes"},
	{"FNAME":"Mason","LNAME":"Halstead","EMAIL":"mason@krowdspace.com","KSUSER":"Masonkickstarter","IGUSER":"Masonindiegogo","PROJECT":"Yes"},
	];
		var tr;
		for (var i = 0; i < json.length; i++) {
			tr = $('<tr/>');
			tr.append("<td>" + json[i].FNAME + "</td>");
			tr.append("<td>" + json[i].LNAME + "</td>");
			tr.append("<td>" + json[i].EMAIL + "</td>");
	tr.append("<td>" + json[i].KSUSER + "</td>");
	tr.append("<td>" + json[i].IGUSER + "</td>");
	tr.append("<td>" + json[i].PROJECT + "</td>");
			$('#register').append(tr);
		}
	
	});

/*INSERT JSON INFORMATION INTO #CONTACT TAB (TAB 2)*/
$(document).ready(function () {
	var json = [
	{"FNAME":"Mason","LNAME":"Halstead","EMAIL":"mason@krowdspace.com","MESSAGE":"10% off for all Krowdspace member"},
	{"FNAME":"Mason","LNAME":"Halstead","EMAIL":"mason@krowdspace.com","MESSAGE":"Hi you guys have made a cool website. I want to join and boost my project"},
	{"FNAME":"Mason","LNAME":"Halstead","EMAIL":"mason@krowdspace.com","MESSAGE":"Hi you guys have made a cool website. I want to join and boost my project"},
	];
		var tr;
		for (var i = 0; i < json.length; i++) {
			tr = $('<tr/>');
			tr.append("<td>" + json[i].FNAME + "</td>");
			tr.append("<td>" + json[i].LNAME + "</td>");
			tr.append("<td>" + json[i].EMAIL + "</td>");
	tr.append("<td>" + json[i].MESSAGE + "</td>");
			$('#contact').append(tr);
		}
	});
			
/*INSERT JSON INFORMATION INTO #APPROVE TAB (TAB 3)*/
$(document).ready(function () {
	var x = "Yes"
	var y = "No"
	var json = [
	{"FNAME":"Mason","LNAME":"Halstead","PROJECTURL":"mason@krowdspace.com","REWARD":"Hi you guys have made a cool website. I want to join and boost my project","REWARD":"Hi you guys have made a cool website. I want to join and boost my project",},
	{"FNAME":"Mason","LNAME":"Halstead","PROJECTURL":"mason@krowdspace.com","REWARD":"Hi you guys have made a cool website. I want to join and boost my project","REWARD":"Hi you guys have made a cool website. I want to join and boost my project",},
	{"FNAME":"Mason","LNAME":"Halstead","PROJECTURL":"mason@krowdspace.com","REWARD":"Hi you guys have made a cool website. I want to join and boost my project","REWARD":"Hi you guys have made a cool website. I want to join and boost my project",},
	];
		var tr;
		for (var i = 0; i < json.length; i++) {
			tr = $('<tr/>');
			tr.append("<td>" + json[i].FNAME + "</td>");
			tr.append("<td>" + json[i].LNAME + "</td>");
			tr.append("<td>" + json[i].PROJECTURL + "</td>");
	tr.append("<td>" + json[i].REWARD + "</td>");
	tr.append("<td><select>" + "<option>" + x + "</option>" + "<option>" + y + "</option>" + "</select></td>");
			$('#approve').append(tr);
		}
	});
