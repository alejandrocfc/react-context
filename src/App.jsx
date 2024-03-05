import { useState } from 'react'
import Favorites from "./favorites.jsx";
import Contacts from "./contacts.jsx";

function App() {
  //Convertir la app para que use useReducer y useContext
  const [users, setUsers] = useState([
    {id: 1, name: 'Usuario', email: 'usuario@mail.com', isFavorite: false, isDeleted: false},
    {id: 2, name: 'Prueba', email: 'prueba@mail.com', isFavorite: false, isDeleted: false},
    {id: 3, name: 'Test', email: 'test@mail.com', isFavorite: false, isDeleted: false},
  ])

  //Pueden ser acciones para el context
  const userFavorites = users.filter(user => user.isFavorite);
  const userContacts = users.filter(user => !user.isFavorite);

  //REFACTORIZAR PARA USAR useReduce y useContext
  const handleUser = (user) => {
    setUsers(
      users.map((u) => {
        if (u.id === user.id) {
          return user;
        } else {
          return u;
        }
      }))
  }
  return (
    <>
      <Favorites users={userFavorites} onClick={handleUser} />
      <Contacts users={userContacts} onClick={handleUser} />
    </>
  )
}

export default App
