
let num=Math.floor(Math.random()*10)+1;
let ta=document.querySelector('.ta')
let frm=document.querySelector('form');
frm.addEventListener('submit', function(e){
    e.preventDefault();
    let inpt=document.querySelector('#input').value;
    if(inpt>0 && inpt<100){
     if(inpt === num){
        ta.innerText="yes you have guessed right"
     }
     else{
        ta.innerHTML="wrong guessed"
     }
}
});
console.log(num);
let a=(Math.random()*0xffffff).toFixed(0);
let hex="#"+parseInt(a.toString(16));
let b=document.querySelector('.main');
b.style.backgroundColor = hex;



