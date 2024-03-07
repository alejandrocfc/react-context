import {useContext} from "react";
import User from "./user.jsx";
import {AppContext, AppDispatchContext} from "./context.js";

const Favorites = () => {
  const dispatch = useContext(AppDispatchContext);
  const users = useContext(AppContext).filter(user => user.isFavorite);
  const removeFavorite = (user) => {
    dispatch({
      type: 'removeFavorite',
      id: user.id
    })
  }
  return (
    <section>
      <h2>Favorites</h2>
      {users.map((user, index) => (
        <User key={index} user={user} onClick={removeFavorite} />
      ))}
    </section>
  )
}

export default Favorites;
