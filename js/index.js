var toggleBtn = document.querySelector('.toggle')
var elNav = document.querySelector('.navbar')

toggleBtn.addEventListener('click' , function (evt) {
elNav.classList.toggle('nav-open')
toggleBtn.classList.toggle('toggle-close')
})