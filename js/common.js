const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  // Logic..
  searchInputEl.focus();
});


searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  // set은 무엇인가를 지정해준다. setAttribute는 html의 속성에서 무엇인가를 지정할떄 쓰는 메소드
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  // set은 무엇인가를 지정해준다. setAttribute는 html의 속성에서 무엇인가를 지정할떄 쓰는 메소드
  searchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2022가 나옴
