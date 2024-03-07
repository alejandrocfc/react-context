import PropTypes from "prop-types";

const User = ({user, onClick}) => {
  const buttonText = user.isFavorite ? 'Remove' : 'Add';
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={() => onClick(user)}>{buttonText}</button>
    </div>
  )
}

User.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    isFavorite: PropTypes.bool,
    isDeleted: PropTypes.bool
  })
}

export default User;
