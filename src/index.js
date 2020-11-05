import { authWithEmailAndPass } from './auth'
import { Question } from './question'
import './style.css'
import {clearLoginModal, isValid, login, toCard} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question')
const button = form.querySelector('#button')
const loginButton = document.getElementById('login')
const loginForm = document.querySelector('.login')

button.disabled = true

// window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
  button.disabled = !isValid(input.value)
})
loginButton.addEventListener('click', login)
loginForm.addEventListener('submit', loginSubmitFn)

function submitFormHandler(event) {
  event.preventDefault()
  const valid = isValid(input.value)
  button.disabled = true

  if (valid) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

    Question.create(question).then(() => {
      input.value = ''
    })    
  }
}

function loginSubmitFn(event) {
  event.preventDefault()
  const btn = document.querySelector('.login__button')

  const email = event.target.querySelector('#mail').value
  const pass = event.target.querySelector('#pass').value
  btn.disabled = true
  authWithEmailAndPass(email, pass)
  .then(Question.fetch)
  .then(renderModalAfterAuth)
  .then(() => btn.disabled = false)
}

function renderModalAfterAuth(content) {
  if (typeof content === 'string') {
    const list = document.querySelector('.current-questions')
    list.innerHTML = `<p>Ошибка: ${content}</p>`
    clearLoginModal()
  } else {
    const list = document.querySelector('.current-questions')
    const html = content.length 
    ? content.map(toCard).join('')
    : '<p>У вас вопросов нет!!!</p>'
    list.innerHTML = html
    clearLoginModal()
  }
}