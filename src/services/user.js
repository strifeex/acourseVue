import firebase from 'firebase'

const get = (id) => {
  return firebase.database()
    .ref(`user/${id}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

const set = (id, data) => {
  firebase.database()
  .ref(`user/${id}`)
  .set(data)
}

<<<<<<< HEAD
const list = (callback) => {
  firebase.database().ref('user')
  .on('value', (snapshots) => {
    const result = []
    snapshots.forEach((snapshot) => {
      const user = snapshot.val()
      user.$id = snapshot.key
      result.push(user)
    })
    callback(result)
  })
}

=======
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
const subscribe = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .on('value', (snapshot) => {
      callback(snapshot.val())
    })
}

export default {
  get,
  set,
<<<<<<< HEAD
  subscribe,
  list
=======
  subscribe
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
}
