"use strict";

// service worker registration - remove if you're not going to use it
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}*/

// place your code below

// buton zmieniający nagłówek
const button=document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    const header= document.querySelector('.header__title--js');
    header.innerHTML='I Nie tylko o nim';
    header.classList.toggle('header__title--red');
    console.log(e);

}); 
//wpis do diva
let name='karol nowakowski';
let b=5;
const lat=43;

const prov = document.querySelector('.about__div--js');
console.log(prov);
prov.innerHTML=`Nazywam sie ${name} mam lat: ${lat} mieszkam w KBH`;

//wpis w konsoli
console.log(`Nazywam sie ${name} mam lat: ${lat} mieszkam w KBH`);

//funkcja strzałkowa
const calcul = x => (x+3)*5;
console.log(calcul(2));

//funkcja zwykla
function calculate(x){
  x=x+4;
  console.log(x);
  return x*5;
}
console.log(calculate(2));

//alert
let aler=(`Nazywam sie ${name} mam lat: ${lat} mieszkam w KBH`);
alert(aler);

//hamburger
const navigationSwitcher=document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');

});  
//=====================================================================================
const person={
  name:'karol',
  age:43
}
//wpiesywanie obiektu do localstorage za pomoca json'a ->z kompresja do stringa
const jsonPerson=JSON.stringify(person);
console.log(jsonPerson);
//wysyła ie do localStorage
localStorage.setItem('person',jsonPerson);

//pobieranie z localstorage
console.log(localStorage.getItem('person'));
const personString=localStorage.getItem('person');
const newperson=JSON.parse(personString);
console.log(newperson);
//------------------------------------------------------------------

const focusInput=document.querySelector('.focus--js');

//if(localStorage.getItem('focusInput')) {
 // focusInput.value=localStorage.getItem('focusInput');
//}

focusInput.addEventListener('keyup', (e)=> {
  
  localStorage.setItem('focusInput', e.target.value);
});



//Edytor

const message = document.querySelector('.form__message--js');
const load = document.querySelector('.form__button--load--js');
const save = document.querySelector('.form__button--save--js');

save.addEventListener('click', (e) => {
 e.preventDefault();
 localStorage.setItem('message', message.value);
});

load.addEventListener('click', (e) => {
e.preventDefault();
 message.value=localStorage.getItem('message');
});



