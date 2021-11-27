
setInterval(() => {
    d =new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation  = 6*mtime;
    srotation  = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;




 },1000);

 //CALENDAR


let dt = new Date();
let d = new Date();

var endate = new Date(
 dt.getFullYear(),
 dt.getMonth() + 1,
 0

).getDate();  // to get the last date of the present month


function RenderDate(){
 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
 var days= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];;


dt.setDate(1); //setting a particular date as the first date of a month
console.log(d.getDay()); // just for verifying
let day = dt.getDay(); //assigning the no of days in the previous month  before the first day of the present month

var prevdate = new Date(
 dt.getFullYear(),
 dt.getMonth(),
 0

).getDate(); // to fill up the previous dates



console.log(endate);
document.getElementById('dte').innerHTML=  days[d.getDay()] +' '+ months[dt.getMonth()] + ' ' + dt.getFullYear() ;   // to print hte headings



var today = new Date().getDate();
var cells = ""; // for making the div elements in html through javascript
var bells = "";

for(x=day; x>0; x--){
 cells+= "<div>" + (prevdate-x+1) + "</div>";}

for(y=0; y<day; y++){
 bells+= "<input id ="+ x +" value='.'/>";
}

 console.log(day);


for(i=1; i<=endate; i++){

  if(i==today){
   bells+= "<input id ="+ i +" value='.'/>";
   cells+= "<div class= 'today' >" + i + "</div>" ; // to circle the today . uderstand here you are adding a class today to your html

   }
  else {
   bells+= "<input id ="+ i + " value='.'/>";
   cells+= "<div>" + i + "</div>";

    }


   }
document.getElementsByClassName("eventschedule")[0].innerHTML =bells;
document.getElementsByClassName("days")[0].innerHTML =cells;

 // for making the div elements in html through javascript

//document.getElementsByClassName(i).value = getSavedValue(i);
//console.log(document.getElementById(20).value);
for(x=1; x<=endate; x++){//displaying the events
        document.getElementById(x).value=localStorage.getItem(x)
}
}
function save() {
for(y=1; y<=endate; y++){
saveValue(document.getElementById(y))

}
}


function movDate(para){

   if (para == 'prev') {
      dt.setMonth(dt.getMonth()-1);


    }

    else if (para == 'next') {

     dt.setMonth(dt.getMonth()+1);



    }
     RenderDate();
}




function ultimate() {
RenderDate();
generateHOTSPOTS ();
function1();

}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 4500,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  function saveValue(e){
            var val = e.value;  // get the sender's id to save it .
            var id =  e.id; // get the value.
            //localStorage.clear();
            localStorage.setItem(id,val);

           console.log(localStorage.getItem(id));
          // console.log( localStorage)// Every time user writing something, the localStorage's value will override .

        }

        //get the saved value function - return the value of "v" from localStorage.
function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return console.log('no got');// You can change this to your defualt value.
            }
            return localStorage.getItem(20),console.log(' got');
        }

//localStorage.clear();


function generateHOTSPOTS () {

eel.firing_up_the_hotspots_rocket ('hotspot rocket reached the javascript sucessfully')(dc)
}

function dc(hsp) {
var psh = hsp.split("\n");
console.log(psh);
//var psh= "";
//psh= hsp.replace("\n","<br/> <br/>")
document.getElementsByClassName("eelspots")[0].innerHTML = hsp

}

