import User from "./user.jsx";
import PropTypes from "prop-types";

const Favorites = ({users, onClick}) => {
  const removeFavorite = (user) => {
    onClick({...user, isFavorite: false})
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

Favorites.propTypes = {
  onClick: PropTypes.func,
  users: PropTypes.arrayOf({})
}

export default Favorites;
