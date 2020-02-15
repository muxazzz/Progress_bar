
// const maxAllowedChecks = 2;
const a = 20;
var valeur = 0;
var newprogress = 0;
//function init () {
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

		oldvalue = document.getElementById("my-progress-bar").style.width;
		valeur = parseInt(oldvalue) + 1;
	newprogress++
 $("#my-progress-bar").attr('aria-valuenow', newprogress).css('width', valeur+"%" );  

}

function btn2_change () {

		oldvalue = document.getElementById("my-progress-bar").style.width;
		valeur = parseInt(oldvalue) + 3;
	newprogress = newprogress + 3;
 $("#my-progress-bar").attr('aria-valuenow', newprogress).css('width', valeur+"%");  

}

function btn3_change () {

		oldvalue = document.getElementById("my-progress-bar").style.width;
		valeur = parseInt(oldvalue) + 7;
	newprogress = newprogress + 7;
 $("#my-progress-bar").attr('aria-valuenow', newprogress).css('width', valeur+"%");  

}



$(document).ready(init)