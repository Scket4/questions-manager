import { authWithEmailAndPass } from './auth'
import { Question } from './question'
import './style.css'
import {isValid, login} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question')
const button = form.querySelector('#button')
const alertButton = document.querySelector('.alert__button')
const loginButton = document.getElementById('login')
const loginForm = document.querySelector('.login')

button.disabled = true

window.addEventListener('load', Question.renderList)
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

  const email = event.target.querySelector('#mail').value
  const pass = event.target.querySelector('#pass').value
  console.log(email, pass);
  authWithEmailAndPass(email, pass)
  .then(Question.fetch)
}