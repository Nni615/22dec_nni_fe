// clear function
function clr()
{
    document.getElementById("result").value="";
}
// back function
function back()
{
    var bk= document.getElementById("result").value;
    var b=bk.slice(0,-1);
    document.getElementById("result").value=b;
}
// visualize button values
function buttons(val)
{
    document.getElementById("result").value+=val;
}
// final
function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
// Square root
function srq()
{
    var x=document.getElementById("result").value;
    var y=Math.sqrt(x);
    document.getElementById("result").value=y; 
}
// Root
function root()
{
    var x=document.getElementById("result").value;
    var y=document.getElementById("result").value;
    var z=Math.pow(x,y);
    document.getElementById("result").value=z; 
}
// +/- button
function combine()
{
    var a = document.getElementById("result").value;
    var b = -a;
    document.getElementById("result").value = b;
}