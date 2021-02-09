function getNumBauty(){
    console.log("class 4");

var brandname =prompt("what the name of brand name MAC or NARS");
var number_of_prouduct = prompt("what the number of prouduct");
var isbrandfound= prompt("is the brand found");
console.log("brand name : " + brandname  + ',' + "number_of_prouduct : "+ number_of_prouduct +',' +
"brandisfound : " + isbrandfound);

if (number_of_prouduct <=10)
{
    console.log('the product is modern');
    document.write("<h1>the product is modern</h1>");
    alert('the product is modern');

}
else
{
    console.log('the prouduct is old');

}
var txt ='';
var isbrandfound = confirm("Press a button!");
if (isbrandfound == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
document.write("brand name : " + brandname  + ',' + "number_of_prouduct : "+ number_of_prouduct +',' +
"brandisfound : " + isbrandfound);}

while(brandname!=="MAC" && brandname!=="NARS")
{
  brandname=prompt("what the name of brand name MAC or NARS");
}
var itembrand='';
if (brandname=="MAC"){
  itembrand='<img src="image/m.jpg"/>';

}
else if (brandname=="NARS")
{
  itembrand='<img src="image/nars.jpg"/>';

}
var num_of_brand= prompt("what is number of brand");
 var result ='';
 for (var i=0; i<num_of_brand;i++){
   result=result+itembrand;
 }
 
document.write(result);
}
getNumBauty();