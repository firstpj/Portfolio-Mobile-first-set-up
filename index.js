const navOne = document.getElementById('nav-one');
const navTwo = document.getElementById('nav-two');
const navThree = document.getElementById('nav-three');
const nav = document.getElementById('nav');
const btn = document.getElementById('btn');
navOne.addEventListener('click', () => {
  nav.classList.add('test-nav');
});
navTwo.addEventListener('click', () => {
  nav.classList.add('test-nav');
});
navThree.addEventListener('click', () => {
  nav.classList.add('test-nav');
});
btn.addEventListener('click', () => {
  nav.classList.remove('test-nav');
});