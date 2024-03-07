import {useContext} from "react";
import User from "./user.jsx";
import {AppContext, AppDispatchContext} from "./context.js";

const Contacts = () => {
  const dispatch = useContext(AppDispatchContext);
  const users = useContext(AppContext).filter(user => !user.isFavorite);
  const addFavorite = (user) => {
    dispatch({
      type: 'addFavorite',
      id: user.id
    })
  }
  return (
    <section>
      <h2>Contacts</h2>
      {users.map((user, index) => (
        <User key={index} user={user} onClick={addFavorite} />
      ))}
    </section>
  )
}

export default Contacts;
