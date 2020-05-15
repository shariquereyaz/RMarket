// document.querySelector('span#open_menu').addEventListener('click', 
// function(){
//    openNav();
// })

// document.querySelector('#btn').addEventListener('click', 
// function(){
//    closeNav();
// })

// function openNav() {
//     document.getElementById("sidebar").style.width = "230px";
//     document.getElementById("main").style.marginLeft = "250px";
//     }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
//     document.getElementById("sidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     }

$(document).click(function(e) {
	if (!$(e.target).is('#main')) {
    	$('.sidebar').collapse('hide');	    
    }
});