export function authWithEmailAndPass(email, password) {
  const apiKey = 'AIzaSyCMXAaYNHE4PBdQapGcBgJxZhpJxbR7kBU'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data.idToken)
}