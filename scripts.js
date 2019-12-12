console.log("gReEtInG foRm thE sOuRcE cOdE");

console.log("   ^---^  ");
console.log("  ( . . ) ");
console.log("    ---    n   ");
console.log(" (       ) \\\\   ");
console.log("   O   O   //   ");

$('.page-link').click(function() {

	$this = $(this);
	$id = $this.attr("href");
	$el_w_id = $($id);

	$('section.active').removeClass('active');
	$el_w_id.addClass('active');
});
