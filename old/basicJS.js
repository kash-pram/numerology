
var keys = {};
keys["1"] = ["A","I","J","Q","Y"];
keys["2"] = ["B","K","R"];
keys["3"] = ["C","G","L","s"];
keys["4"] = ["D","M","T"];
keys["5"] = ["E","H","N","X"];
keys["6"] = ["U","V","W"];
keys["7"] = ["O","Z"];
keys["8"] = ["F","P"];
var varfocus=false;

window.onload = function(){
window.onfocus = function(){
if(varfocus!=false){
varfocus=false;
document.getElementById("txtnumero").focus();
}
}
}

function findanswer(){
var ivalue=document.getElementById("txtnumero").value;
var sumvalue=parseInt("0");
var regexChar=/^[a-zA-Z]+$/;
var regexNumb=/^[0-9]+$/;
var value;

for(var i=0;i<ivalue.length;i++){
value=ivalue.charAt(i);

if (value.match(regexNumb)){
sumvalue=parseInt(sumvalue)+parseInt(value);
}
else if(value.match(regexChar))
{
for(var j=1;j<9;j++){
for(var k=0;k<keys[j].length;k++){
if(keys[j][k].toString().toUpperCase()===value.toString().toUpperCase()){
sumvalue=parseInt(sumvalue)+parseInt(j);
break;
}
}
}

}
}

document.getElementById("txtcsum").value=sumvalue;
sumvalue=sumvalue.toString();
var sdsum=parseInt("0");
for(var p=0;p<sumvalue.length;p++){
sdsum=parseInt(sdsum)+parseInt(sumvalue[p]);
}

if(sdsum.toString().length>1)
sdsum=makesingle(sdsum);

document.getElementById("txtsdsum").value=sdsum;
}

function makesingle(dvalue){
dvalue=dvalue.toString();
var svalue=parseInt(0);
for(var i=0;i<dvalue.length;i++)
{
svalue=parseInt(svalue)+parseInt(dvalue[i]);
}
return svalue;
}


function open_in_new_tab_and_reload(){
  varfocus=true;
  window.open('http://www.beppo.in', '_blank');
  window.focus();
  document.getElementById("txtcsum").value='';
  document.getElementById("txtsdsum").value='';
  document.getElementById("txtnumero").value='';
}


