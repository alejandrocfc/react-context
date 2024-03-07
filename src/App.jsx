import {useReducer} from 'react'
import Favorites from "./favorites.jsx";
import Contacts from "./contacts.jsx";
import {AppContext, AppDispatchContext} from "./context.js";
import {AppReducer} from "./reducer.js";


function App() {
  const [state, dispatch] = useReducer(AppReducer, [
    {id: 1, name: 'Usuario', email: 'usuario@mail.com', isFavorite: false, isDeleted: false},
    {id: 2, name: 'Prueba', email: 'prueba@mail.com', isFavorite: false, isDeleted: false},
    {id: 3, name: 'Test', email: 'test@mail.com', isFavorite: false, isDeleted: false},
  ])

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <Favorites />
        <Contacts />
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

export default App
