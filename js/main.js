console.log('text');

var time = '9:22 pm';

var amPm = time.slice(-2);
console.log(amPm);

if( amPm == 'pm') {

} else {
	
}

var timeFromAPI = moment(time, "h:mm").format('x');
var timeNow =  moment().format("x");

console.log('Time form API: ', timeFromAPI );

console.log('Time Now', timeNow);

if( timeFromAPI <= timeNow) {
	console.log('yes')
} else {
	console.log('no');
}


$('.scroll-arrow').on('click', function(){

	// this is scroll arrow
	// this.parent() is the section
	// next moves to the next html tag at the same level
	var nextSection = $(this).parent().next();
	var nextSectionOffset = nextSection.offset().top;

	$('html, body').animate({
		scrollTop: nextSectionOffset
	}, 1500 );
});


$('.gallery img').on('click', function(){

	$('html, body').animate({
		scrollTop: 100
	}, 900 );

	var copy = $(this).data('copy');
	console.log(copy);

	$('.feature p').text(copy);

	var image = $(this).attr('src');

	$('.feature img').animate({
		opacity: 0
	}, 800, function(){
		$('.feature img').attr('src', image);
		$('.feature img').animate({opacity: 1},800);

	})
});































