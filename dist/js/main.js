!function(n){var c={};function l(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=c,l.d=function(n,c,e){l.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:e})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,c){if(1&c&&(n=l(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var t in n)l.d(e,t,function(c){return n[c]}.bind(null,t));return e},l.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(c,"a",c),c},l.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n/*\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}*/\r\n\r\n// place your code below\r\n\r\n// buton zmieniający nagłówek\r\nconst button=document.querySelector('.header__button--js');\r\nconsole.log(button);\r\n\r\nbutton.addEventListener('click', (e) => {\r\n    const header= document.querySelector('.header__title--js');\r\n    header.innerHTML='I Nie tylko o nim';\r\n    header.classList.toggle('header__title--red');\r\n    console.log(e);\r\n\r\n}); \r\n//wpis do diva\r\nlet name='karol nowakowski';\r\nlet b=5;\r\nconst lat=43;\r\n\r\nconst prov = document.querySelector('.about__div--js');\r\nconsole.log(prov);\r\nprov.innerHTML=`Nazywam sie ${name} mam lat: ${lat} mieszkam w KBH`;\r\n\r\n//wpis w konsoli\r\nconsole.log(`Nazywam sie ${name} mam lat: ${lat} mieszkam w KBH`);\r\n\r\n//funkcja strzałkowa\r\nconst calcul = x => (x+3)*5;\r\nconsole.log(calcul(2));\r\n\r\n//funkcja zwykla\r\nfunction calculate(x){\r\n  x=x+4;\r\n  console.log(x);\r\n  return x*5;\r\n}\r\nconsole.log(calculate(2));\r\n\r\n//alert\r\nlet aler=(`Nazywam sie ${name} mam lat: ${lat} mieszkam w KBH`);\r\nalert(aler);\r\n\r\n//hamburger\r\nconst navigationSwitcher=document.querySelector('.navigation__switcher--js');\r\n\r\nnavigationSwitcher.addEventListener('click', (e) => {\r\n    const navigationList = document.querySelector('.navigation__list--js');\r\n    navigationList.classList.toggle('navigation__list--visible');\r\n\r\n});  \r\n//=====================================================================================\r\nconst person={\r\n  name:'karol',\r\n  age:43\r\n}\r\n//wpiesywanie obiektu do localstorage za pomoca json'a ->z kompresja do stringa\r\nconst jsonPerson=JSON.stringify(person);\r\nconsole.log(jsonPerson);\r\n//wysyła ie do localStorage\r\nlocalStorage.setItem('person',jsonPerson);\r\n\r\n//pobieranie z localstorage\r\nconsole.log(localStorage.getItem('person'));\r\nconst personString=localStorage.getItem('person');\r\nconst newperson=JSON.parse(personString);\r\nconsole.log(newperson);\r\n//------------------------------------------------------------------\r\n\r\nconst focusInput=document.querySelector('.focus--js');\r\n\r\n//if(localStorage.getItem('focusInput')) {\r\n // focusInput.value=localStorage.getItem('focusInput');\r\n//}\r\n\r\nfocusInput.addEventListener('keyup', (e)=> {\r\n  \r\n  localStorage.setItem('focusInput', e.target.value);\r\n});\r\n\r\n\r\n\r\n//Edytor\r\n\r\nconst message = document.querySelector('.form__message--js');\r\nconst load = document.querySelector('.form__button--load--js');\r\nconst save = document.querySelector('.form__button--save--js');\r\n\r\nsave.addEventListener('click', (e) => {\r\n e.preventDefault();\r\n localStorage.setItem('message', message.value);\r\n});\r\n\r\nload.addEventListener('click', (e) => {\r\ne.preventDefault();\r\n message.value=localStorage.getItem('message');\r\n});\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixLQUFLLFlBQVksSUFBSTs7QUFFbkQ7QUFDQSwyQkFBMkIsS0FBSyxZQUFZLElBQUk7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixLQUFLLFlBQVksSUFBSTtBQUM5Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcbi8qXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0qL1xyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG4vLyBidXRvbiB6bWllbmlhasSFY3kgbmFnxYLDs3dla1xyXG5jb25zdCBidXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnV0dG9uLS1qcycpO1xyXG5jb25zb2xlLmxvZyhidXR0b24pO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUtLWpzJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MPSdJIE5pZSB0eWxrbyBvIG5pbSc7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX190aXRsZS0tcmVkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbn0pOyBcclxuLy93cGlzIGRvIGRpdmFcclxubGV0IG5hbWU9J2thcm9sIG5vd2Frb3dza2knO1xyXG5sZXQgYj01O1xyXG5jb25zdCBsYXQ9NDM7XHJcblxyXG5jb25zdCBwcm92ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19kaXYtLWpzJyk7XHJcbmNvbnNvbGUubG9nKHByb3YpO1xyXG5wcm92LmlubmVySFRNTD1gTmF6eXdhbSBzaWUgJHtuYW1lfSBtYW0gbGF0OiAke2xhdH0gbWllc3prYW0gdyBLQkhgO1xyXG5cclxuLy93cGlzIHcga29uc29saVxyXG5jb25zb2xlLmxvZyhgTmF6eXdhbSBzaWUgJHtuYW1lfSBtYW0gbGF0OiAke2xhdH0gbWllc3prYW0gdyBLQkhgKTtcclxuXHJcbi8vZnVua2NqYSBzdHJ6YcWCa293YVxyXG5jb25zdCBjYWxjdWwgPSB4ID0+ICh4KzMpKjU7XHJcbmNvbnNvbGUubG9nKGNhbGN1bCgyKSk7XHJcblxyXG4vL2Z1bmtjamEgend5a2xhXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZSh4KXtcclxuICB4PXgrNDtcclxuICBjb25zb2xlLmxvZyh4KTtcclxuICByZXR1cm4geCo1O1xyXG59XHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0ZSgyKSk7XHJcblxyXG4vL2FsZXJ0XHJcbmxldCBhbGVyPShgTmF6eXdhbSBzaWUgJHtuYW1lfSBtYW0gbGF0OiAke2xhdH0gbWllc3prYW0gdyBLQkhgKTtcclxuYWxlcnQoYWxlcik7XHJcblxyXG4vL2hhbWJ1cmdlclxyXG5jb25zdCBuYXZpZ2F0aW9uU3dpdGNoZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3N3aXRjaGVyLS1qcycpO1xyXG5cclxubmF2aWdhdGlvblN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QtLWpzJyk7XHJcbiAgICBuYXZpZ2F0aW9uTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCduYXZpZ2F0aW9uX19saXN0LS12aXNpYmxlJyk7XHJcblxyXG59KTsgIFxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgcGVyc29uPXtcclxuICBuYW1lOidrYXJvbCcsXHJcbiAgYWdlOjQzXHJcbn1cclxuLy93cGllc3l3YW5pZSBvYmlla3R1IGRvIGxvY2Fsc3RvcmFnZSB6YSBwb21vY2EganNvbidhIC0+eiBrb21wcmVzamEgZG8gc3RyaW5nYVxyXG5jb25zdCBqc29uUGVyc29uPUpTT04uc3RyaW5naWZ5KHBlcnNvbik7XHJcbmNvbnNvbGUubG9nKGpzb25QZXJzb24pO1xyXG4vL3d5c3nFgmEgaWUgZG8gbG9jYWxTdG9yYWdlXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwZXJzb24nLGpzb25QZXJzb24pO1xyXG5cclxuLy9wb2JpZXJhbmllIHogbG9jYWxzdG9yYWdlXHJcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzb24nKSk7XHJcbmNvbnN0IHBlcnNvblN0cmluZz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc29uJyk7XHJcbmNvbnN0IG5ld3BlcnNvbj1KU09OLnBhcnNlKHBlcnNvblN0cmluZyk7XHJcbmNvbnNvbGUubG9nKG5ld3BlcnNvbik7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBmb2N1c0lucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2N1cy0tanMnKTtcclxuXHJcbi8vaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvY3VzSW5wdXQnKSkge1xyXG4gLy8gZm9jdXNJbnB1dC52YWx1ZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9jdXNJbnB1dCcpO1xyXG4vL31cclxuXHJcbmZvY3VzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSk9PiB7XHJcbiAgXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvY3VzSW5wdXQnLCBlLnRhcmdldC52YWx1ZSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL0VkeXRvclxyXG5cclxuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19tZXNzYWdlLS1qcycpO1xyXG5jb25zdCBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbi0tbG9hZC0tanMnKTtcclxuY29uc3Qgc2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLXNhdmUtLWpzJyk7XHJcblxyXG5zYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuIGUucHJldmVudERlZmF1bHQoKTtcclxuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZXNzYWdlJywgbWVzc2FnZS52YWx1ZSk7XHJcbn0pO1xyXG5cclxubG9hZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbmUucHJldmVudERlZmF1bHQoKTtcclxuIG1lc3NhZ2UudmFsdWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21lc3NhZ2UnKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);