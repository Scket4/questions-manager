const loginModal = document.querySelector('.login')
const alertText = document.querySelector('.alert__message')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

export function isValid(val) {
  return val.length >= 10
}

export function login() {
  loginModal.classList.add('visible')
  header.classList.add('filter')
  main.classList.add('filter')
  footer.classList.add('filter')
  main.addEventListener('click', clearLoginModal)
}

export function clearLoginModal() {
  header.classList.remove('filter')
  main.classList.remove('filter')
  footer.classList.remove('filter')
  loginModal.classList.remove('visible')
}