// Toggle menu
var menuToggle = document.querySelector ('.menuToggle');
var toggleList = document.querySelector ('.menuToggle ul');


menuToggle.onclick = function (e) { 
	menuToggle.style.backgroundColor = 'skyblue' ;
	if (toggleList.style.display === 'none') {
		toggleList.style.display = 'block' ;	
		toggleList.style.backgroundColor = 'transparent';		
	} 
	else if (toggleList.style.display === 'block'){
		toggleList.style.display = 'none' ;
		menuToggle.style.backgroundColor = 'transparent' ;
	}	
	menuToggle.appendChild ( toggleList );
};

var activePage = document.getElementsByClassName('currentPage');
for(var i=0; i < activePage.length; i++){		
	activePage[i].onclick = function (){		
		var active =activePage[0];
		while (active)	{
			if (active.tagName){
				active.classList.remove('back');
			}
			active = active.nextSibling;
		}
		this.classList.add('back');
	};		
};

// This bloc of codes are for cookies.
var closeCookies = document.querySelector('.closeButton');
var cookiesOverlay = document.getElementById('overlay');
var cookiesContainer = document.getElementById('cookiesWrapper');
var pageLoad = document.getElementById('bodyWrapper');

document.addEventListener('DOMContentLoaded', function  displayCookies(){
	setTimeout (comeup, 2000);

});
function comeup(){
	cookiesContainer.style.display = 'block';
	cookiesOverlay.style.display = 'block';	
}
document.addEventListener('click', function  closeCookies(){
	cookiesContainer.style.display = 'none'; 
	cookiesOverlay.style.display = 'none' ;	
});
//closeCookies.onclick = function closingCookies(){
	//cookiesContainer.style.display = 'none'; 
	//cookiesOverlay.style.display = 'none' ;	
	//};


//Api calls 
var newsButton = document.getElementById('newsButton');
var newsUpdate = document.getElementById('newsUpdate');
var newsImages = document.getElementById ('newsUpdate');

newsButton.addEventListener ('click', function (){
	fetch( 'https://api.nasa.gov/EPIC/api/natural/image?api_key=372x3epGNJRh2Tst0x2Tb7x2H7PqXggMa9sNBJXz')
    .then(result => result.json())
    .then((jsonResult) => {
		fetchNews (jsonResult)
		console.log(jsonResult);
   });
 function fetchNews(news){ 
		for (i = 0; i < news.length; i++){			
			
			var myArticle = document.createElement('article');
			var newsImage = document.createElement('img');
			newsImage.setAttribute('src', 'https://epic.gsfc.nasa.gov/archive/enhanced/all?api_key=372x3epGNJRh2Tst0x2Tb7x2H7PqXggMa9sNBJXz');
			newsImage.setAttribute('width', '205');
			newsImage.setAttribute('height', '205');
			var myH2 = document.createElement('h2');
			var myPara1 = document.createElement('p');
			var myPara2 = document.createElement('p');
			var myPara3 = document.createElement('p');
			var myList = document.createElement('ul');
	
			//myArticle.newsImage = news[i].image;
			myH2.textContent =  'Identifier : '+ news[i].identifier; 
			myPara1.textContent = news[i].image;
			myPara2.textContent = news[i].caption;
			myPara3.textContent = 'Date and Timeline : ' + news[i].date;
			
			//newsImage.appendChild();
			myArticle.appendChild(newsImage);
			myArticle.appendChild(myH2);
			myArticle.appendChild(myPara1);
			myArticle.appendChild(myPara2);
			myArticle.appendChild(myPara3);
			myArticle.appendChild(myList);
			
	
			newsUpdate.appendChild(myArticle);
	
			//newsUpdate.insertAdjacentHTML('beforeend', earth);
		};
	};
});
// Booking News
var count = new Date('Dec 8, 2019 00:00:00').getTime();
var c = setInterval( function () {
	var now = new Date().getTime();
	var d = count - now;
	
	var days = Math.floor (d/ (1000*60*60*24));
	var hours = Math.floor ((d%(1000*60*60*24)) / (1000*60*60));
	var minutes = Math.floor ((d%(1000*60*60)) / (1000*60));
	var seconds = Math.floor ((d%(1000*60)) / (1000));
	
	document.getElementById('days').innerHTML = days;
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	
},1000);

//Form Validation
var inputInfo = document.getElementsByTagName('input');
var error = document.getElementById('formError');
var submit = document.getElementById('submit'); 

//submit.addEventListener('click', function(){
submit.onclick = function() {
	for ( i=0; i < inputInfo.length; i++ ) {
		var inputData = inputInfo[i].value;
		console.log(inputData);
		var realPatterns = new RegExp ( inputInfo[i].pattern);
		
		var checking = realPatterns.test(inputData);
		
		if ( checking === false){
			error.innerHTML += inputInfo[i].name + "	does not match format, check please <br>";
		console.log(inputData);
		}
		else if (checking === true){
			var submitForm = document.getElementById('submit');
			submitForm.onclick = function creatingAlert(e){ 
			alert (' Thank You ! Your Submission Is Successful.');
			}
		}
	}
	console.log(error);
	//submit.appendChild (error);
};
//});