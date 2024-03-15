
// create close  button and append items or list in each list items
var addSymbol=document.getElementsByTagName("LI");
var i;
for(i=0;i<addSymbol.length;i++)
{
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    addSymbol[i].appendChild(span);

}

// click on close button and your items hide or deleted form current list items
var close=document.getElementsByClassName("close");
var i; 
for(i=0;i<close.length;i++)
{
    close[i].onclick=function()
    {
        var div=this.parentElement;
        div.style.display="none";
    }
}

// add a "checked" symbol when click on a list items
var list=document.querySelector('ul');
list.addEventListener('click',function(ev) {
    if(ev.target.tagName==='LI')
    {
        ev.target.classList.toggle('checked');
    }
},false);


// display to do list in ul li list call a function 
function myFunction()
{

//called add items in list  
var li=document.createElement("LI");
var inputValue=document.getElementById("myinput").value;
var t=document.createTextNode(inputValue);
li.appendChild(t);

if(inputValue==='')
{
    alert('write somthing to add in to do list')
}
else 
{
    document.getElementById("myUl").appendChild(li);
}
document.getElementById("myinput").value=="";

// add symbol or removed items 
var span=document.createElement("SPAN");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);
//alert('hi')
 for(i=0;i<close.length; i++)
 {
    close[i].onclick=function(){

        var div=this.parentElement;
        div.style.display="none";
    }
 }

}




