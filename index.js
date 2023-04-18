// document.addEventListener('DOMContentLoaded', () => {
//   const menu = document.getElementById('menu-');
//   const button = document.getElementById('mob-barss');
//   const closebtn = document.getElementById('closed');
//   const menuitems = document.getElementById('mlist');
/*
  button.onclick = function showMenu() {
    menu.style.display = 'block';
  };

  closebtn.onclick = function hideMenu() {
    menu.style.display = 'none';
  };

  menuitems.onclick = function hideMenu() {
    menu.style.display = 'none';
  };
});

function close(){
  document.getElementsByClassName('side-menu').style.display = 'none';
}

document.querySelectorAll('.menuitem').forEach((item) => {
  item.addEventListener('click', close);
})*/

// hamburger menu open
function open() {
  document.querySelector('.nav').style.display = 'block';
}
document.querySelector('.hamb-line').addEventListener('click', open);

// hamburger menu close

function close() {
  document.getElementById('nav').style.display = 'none';
}
document.getElementById('close-menu').addEventListener('click', close);

// menu close when Items are clicked

document.querySelector('.menu').forEach((item) => {
  item.addEventListener('click', close);
});