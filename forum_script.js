$(document).ready(function(){
    $("#add").click(function(){
		
		var content = $("#forum").html();
		var pseudos = localStorage.getItem("pseudos");
		var questions = localStorage.getItem("questions");
		var reponses = localStorage.getItem("reponses");

		if (pseudos == null) {
			var pseudos = [];
			var questions = [];
			var reponses = [];
			pseudos.push($("#pseudo").val());
			questions.push($("#question").val());
			reponses.push(null);
		}
		else {
			pseudos = JSON.parse(pseudos);
			pseudos.push($("#pseudo").val());
			questions = JSON.parse(questions);
			questions.push($("#question").val());
			reponses = JSON.parse(reponses);
			reponses.push(null);
		}

		localStorage.setItem("pseudos", JSON.stringify(pseudos));	
		localStorage.setItem("questions", JSON.stringify(questions));
		localStorage.setItem("reponses", JSON.stringify(reponses));
		affichage_questions();
		location.reload();
    });
    
    $('.scroll').on('click', function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, speed);
		return false;
	});
});

function affichage_questions() {
	
	 var pseudos = localStorage.getItem("pseudos");
	 var questions = localStorage.getItem("questions");
	 var reponses = localStorage.getItem("reponses");
	 var array_pseudo = JSON.parse(pseudos);
	 var array_question = JSON.parse(questions);
	 var array_reponse = JSON.parse(reponses);
	 
	for (var i in array_pseudo) {
		var pseudo = array_pseudo[i];
		var question = array_question[i];
		var reponse = array_reponse[i];
		
		if (reponse == null) {
			var texte = "<div id='posts'><span id= '" + i + "'> Question posee par : " + pseudo + "<br/> " + question + " <br/> Postez votre reponse ici :<br/> <textarea id='reponse_"+ i + "' placeholder='Rédiger votre réponse ici.'></textarea> <br/> <button onclick='reponse("+ i +")'>Repondre</button></span> </div><br/><br/>";
		} else {
			var texte = "<div id='posts'><span id= '" + i + "'> Question posee par : " + pseudo + "<br/> " + question + " <br/> La reponse apportee est : " + reponse + "</span> </div><br/><br/>";
		}
		document.getElementById("forum").innerHTML += texte;
	}	
}

function reponse(id) {
	
	var texte = document.getElementById("reponse_"+id).value;
	var reponses = localStorage.getItem("reponses");
	var array_reponse = JSON.parse(reponses);
	array_reponse[id] = texte;
	localStorage.setItem("reponses", JSON.stringify(array_reponse));
	location.reload();
}


	

