import User from "./user.jsx";
import PropTypes from "prop-types";

const Contacts = ({users, onClick}) => {
  const addFavorite = (user) => {
    onClick({...user, isFavorite: true})
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

Contacts.propTypes = {
  onClick: PropTypes.func,
  users: PropTypes.arrayOf({})
}

export default Contacts;
