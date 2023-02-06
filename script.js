const mybtn = document.getElementById('myBtn');
mybtn.addEventListener('click',buttonClicked);

function buttonClicked(e){
    document.getElementById("header").className="large";
}
function myFunction(element,color){
    element.style.color = color;
}