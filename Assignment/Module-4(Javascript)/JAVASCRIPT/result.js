var a, b, c, d, e, f, g;
var result = 0;
var avg = 0;
function calculate()
{
    a = parseInt(document.getElementById("c").value);
    b = parseInt(document.getElementById("c++").value);
    c = parseInt(document.getElementById("database").value);
    d = parseInt(document.getElementById("html").value);
    e = parseInt(document.getElementById("css").value);
    f = parseInt(document.getElementById("php").value);
    g = parseInt(document.getElementById("java").value);
    result = document.getElementById("total").innerHTML=a+b+c+d+e+f+g;
    avg = document.getElementById("per").innerHTML=result/7;
}