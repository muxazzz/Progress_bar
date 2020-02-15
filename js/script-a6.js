
// const maxAllowedChecks = 2;
const a = 20;
var valeur = 0;
var newprogress = 0;
//function init () {
//	if (valeur >= 100) {
//		window.alert("Статус-Бар заполнен");
//	$("#total").html("100")
//	$("input[type=checkbox]").change(trackChecks);
//	$("input[type=radio]").change(trackRadios);
//	console.log("скрипт подгрузился");
//	  trackChecks();
  //trackRadios();
  	//$("#carouselWithIndicators").carousel({
  	//	wrap:false
  	//});
//}

//function trackChecks () {
//	let checkCount = $("input[type=checkbox]:checked").length;
//	console.log(`Выбрано флажков: ${checkCount}`);
//	$("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
//}

//function trackRadios () {
//	let checkRadios = $("input[type=radio]:checked").length;
//	console.log(`Выбрано кнопок: ${checkRadios}`);
//	$("input[type=radio]").prop("disabled",false)
//}

	function btn1_change () {
		if (valeur < 100) {
		oldvalue = document.getElementById("my-progress-bar").style.width;
		valeur = parseInt(oldvalue) + 1;
	newprogress++
 $("#my-progress-bar").attr('aria-valuenow', newprogress).css('width', valeur+"%" );  
$("#total").html(valeur)
} else {
	window.alert("Статус-Бар заполнен");
	$("#total").html("100")
}
}

function btn2_change () {
	if (valeur < 100) {
		oldvalue = document.getElementById("my-progress-bar").style.width;
		valeur = parseInt(oldvalue) + 3;
	newprogress++
 $("#my-progress-bar").attr('aria-valuenow', newprogress).css('width', valeur+"%" );  
$("#total").html(valeur)
} else {
	window.alert("Статус-Бар заполнен");
	$("#total").html("100")
}
}

function btn3_change () {
	if (valeur < 100) {
		oldvalue = document.getElementById("my-progress-bar").style.width;
		valeur = parseInt(oldvalue) + 7;
	newprogress++
 $("#my-progress-bar").attr('aria-valuenow', newprogress).css('width', valeur+"%" );  
$("#total").html(valeur)
} else {
	window.alert("Статус-Бар заполнен");
	$("#total").html("100")
}
}



$(document).ready(init)