console.log("gReEtInG foRm thE sOuRcE cOdE");

console.log("   ^---^  ");
console.log("  ( . . ) ");
console.log("    ---    n   ");
console.log(" (       ) \\\\   ");
console.log("   O   O   //   ");

$('.page-link').click(function() {


	$this = $(this);
	$id = $this.attr("href");

	$('section.active').removeClass('active');
	$($id).addClass('active');
});

$(window).scroll(function(){

});

$(document).ready(function(){
	$url = "https://www.facebook.com/pg/cakefact/events/";
	console.log($.get($url));
});
