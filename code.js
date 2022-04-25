const container = document.getElementById("container");
const openmenu = document.querySelector('#hamburger');
const closemenu = document.getElementById('closemenu');
openmenu.addEventListener('click', () => {
    container.classList.add('show');
});

closemenu.addEventListener('click', () => {
    container.classList.remove('show');
});



const countDiv = document.querySelector('#count');
const countDiv2 = document.querySelector('#count2');
const countDiv21 = document.querySelector('#count21');
var overall=countDiv.innerText;


function increment(){
    countDiv.innerText = (Number(countDiv.innerText)+1).toString();
    countDiv2.innerText = (Number(countDiv2.innerText)+1).toString();
}
function decrement(){
    if (Number(countDiv.innerText)!=0){
    countDiv.innerText = (Number(countDiv.innerText)-1).toString();
    countDiv2.innerText = (Number(countDiv2.innerText)-1).toString();}
}

function increment2(){
    countDiv2.innerText = (Number(countDiv2.innerText)+1).toString();
    overall=countDiv2.innerText;
    countDiv21.innerText = overall;
    total.innerText=(125*overall).toString();
}
function decrement2(){
    if (Number(countDiv2.innerText)!=0){
    countDiv2.innerText = (Number(countDiv2.innerText)-1).toString();
    overall=countDiv2.innerText;
    countDiv21.innerText = overall;
    total.innerText=(125*overall).toString();}
}


const addtocart= document.getElementById("addtocart");
const total = document.querySelector('#total');
addtocart.addEventListener('click', () =>{
    overall=countDiv.innerText;
    countDiv2.innerText = overall;
    countDiv21.innerText = overall;
    total.innerText=(125*overall).toString();}
);




const container2=document.getElementById("container2");
const opencart=document.querySelector('#cart');
const  closecart = document.getElementById("close-cart");

opencart.addEventListener('click', () => {
    if (overall==0){
    container2.classList.add('empty');}
});

closecart.addEventListener('click', () => {
    container2.classList.remove('empty');
});

const container3=document.getElementById("container3");
const  closecart2 = document.getElementById("close-cart2");

opencart.addEventListener('click', () => {
    if(overall!=0){
    container3.classList.add('full');}
});

closecart2.addEventListener('click', () => {
    container3.classList.remove('full');
});





  
