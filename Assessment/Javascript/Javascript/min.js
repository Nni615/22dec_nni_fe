let addtodobutton = document.getElementById('addto');
let todoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addtodobutton.addEventListener('click' , function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
});
