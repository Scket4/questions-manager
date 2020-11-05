import { toCard } from "./utils"

export class Question {
  static create(text) {
    return fetch('https://question-manager-a28e1.firebaseio.com/questions.json', {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      text.id = response.name
      return text
    })
    .then(addToStorage)
    .then(Question.renderList)
  }

  static renderList() {
    const questions = getQuestionsFromLocalstorage()

    const html = questions.length 
    ? questions.map(toCard).join('')
    : '<p>У вас вопросов нет</p>'

    const list = document.querySelector('.current-questions')
    list.innerHTML = html
  }

  static fetch(token) {
    if (!token) {
      return Promise.resolve('<p class="error">У вас нет токена</p>')
    }
    return fetch(`https://question-manager-a28e1.firebaseio.com/questions.json?auth=${token}`)
      .then(response => response.json())
      .then(question => {
        if (question.error) {
          return  `<p class="error">Нет токена</p>`
        }
        return question ? Object.keys(question).map(key => ({
          ...question[key],
          id: key
        })) : []
      })
  }
}

function addToStorage(text) {
  const all = getQuestionsFromLocalstorage()
  all.push(text)
  localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLocalstorage() {
  return JSON.parse(localStorage.getItem('questions') || '[]')
}

