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
