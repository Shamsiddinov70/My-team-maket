let toggleBtn = document.querySelector('.toggle');
let elNav = document.querySelector('.navbar')


toggleBtn.addEventListener('click', () => {
    elNav.classList.toggle('nav-open')
    toggleBtn.classList.toggle('toggle-close')
  })
