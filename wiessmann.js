window.addEventListener('scroll', scrollEvent);

function scrollEvent(evt) {
	const target = document.querySelectorAll('.scroll');
		
	console.log(target[0].getBoundingClientRect().top);
	
	for (var i = 0; i < target.length; i ++) {
		var pos = window.pageYOffset * target[i].dataset.rate;
					
		if (target[i].dataset.direction == 'v') {
			target[i].style.transform = "translate3d(0px," + pos + "px, 0px)";
		}
		else {
			target[i].style.transform = "translate3d("+ pos +"px,"+window.pageYOffset+"px,0px)";
		}
	}
}