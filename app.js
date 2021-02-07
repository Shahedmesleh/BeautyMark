console.log("class 4");
var brandname =prompt("what the name of brand name");
var number_of_prouduct = prompt("what the number of prouduct");
var isbrandfound= prompt("is the brand found");
console.log("brand name : " + brandname  + ',' + "number_of_prouduct : "+ number_of_prouduct +',' +
"brandisfound : " + isbrandfound);



if (number_of_prouduct <=10){
    console.log('the product is modern');


}
else{
    console.log('the prouduct is old');

}
var txt;
var isbrandfound = confirm("Press a button!");
if (isbrandfound == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

document.write("brand name : " + brandname  + ',' + "number_of_prouduct : "+ number_of_prouduct +',' +
"brandisfound : " + isbrandfound);