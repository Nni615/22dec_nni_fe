function Add()
{
    inp1 = parseInt(document.getElementById("num1").value);
    inp2 = parseInt(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML = inp1 +inp2;
    p.innerHTML="Answer is: ";
}
function sub()
{
    inp1 = document.getElementById("num1").value;
    inp2 = document.getElementById("num2").value;
    document.getElementById("ans").innerHTML = inp1 - inp2;
}
function multiply()
{
    inp1 = document.getElementById("num1").value;
    inp2 = document.getElementById("num2").value;
    document.getElementById("ans").innerHTML = inp1 * inp2;
}
function divide()
{
    inp1 = document.getElementById("num1").value;
    inp2 = document.getElementById("num2").value;
    document.getElementById("ans").innerHTML = inp1 / inp2; 
}
function mod()
{
    inp1 = document.getElementById("num1").value;
    inp2 = document.getElementById("num2").value;
    document.getElementById("ans").innerHTML = inp1 % inp2;
}
