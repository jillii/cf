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

// $(document).ready(function(){
// 	const proxyurl = "https://cors-anywhere.herokuapp.com/";
// 	const url = "https://www.facebook.com/pg/cakefact/events/"; // site that doesn’t send Access-Control-*

// 	$data = "";

// 	$.get((proxyurl + url), function(data){
// 	  // alert("Data: " + data);

// 	  // $data = $($.parseHTML(data));
// 	  $html_string = $(data);
// 	  $title = $('._50f7', $html_string);
// 	  console.log($data);
// 	  $4dmk = $html_string.find('._50f7');
// 	  // $title = $4dmk.find('. _50f7');
// 	  console.log($html_string);
// 	  console.log($title);

// 	});

// 	// console.log($data.find('._4dmk'));


// });
