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
    return fetch(`https://question-manager-a28e1.firebaseio.com/questions.json?auth=${token}`)
      .then(response => response.json())
      .then(q => console.log(q))
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

function toCard(text) {
  return `
  <div class="question">
  <p class="question__question">Ваш вопрос:</p>
  <div>${new Date(text.date).toLocaleDateString()}</div>
  <p class="question__text">${text.text}</p>
  </div>
  <br>
  `
}