let btn = document.querySelectorAll('.buttn');
let tab = document.querySelectorAll('.body'); 

function reset(){
	for (let i = 0; i < tab.length; i++) {
		tab[i].style.display = 'none';
	}
}
function tabone(){
	reset();
	tab[0].style.display = 'block';

}tabone();
for (let a = 0 ; a < btn.length; a++) {
	btn[a].addEventListener('click', function(){
		reset();
	tab[a].style.display = 'block';
	});
}

// for (let a = 0; a <btn.length; a++){

// 	btn[a].addEventListener( 'click', function(){

// 	reset();
// 	tab[a].style.display = 'block';
// 	tab[a].style.display = 'grid';
// 	tab[a].style.justifyContent = 'center';
// 	tab[a].style.alingItems = 'center';

// 	});
// }
// ***************************************************

// var btn = document.querySelectorAll('.tab-btn');
// var tab = document.querySelectorAll('.tab');

// function reset(){
// 	for ( var i=0; i <tab.length; i++) {
// 	 	tab[i].style.display = 'none';
// 	}
// }//reset();

// function tabone(){
// 	reset();
// 	tab[0].style.display = 'block';
// }
// tabone();

// for (let a = 0; a <btn.length; a++){

// 	btn[a].addEventListener( 'click', function(){

// 	reset();
// 	tab[a].style.display = 'block';
// 	tab[a].style.display = 'grid';
// 	tab[a].style.justifyContent = 'center';
// 	tab[a].style.alingItems = 'center';

// 	});
// }