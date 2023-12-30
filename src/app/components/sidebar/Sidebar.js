import { faBookBookmark, faHome, faHourglass, faSearch, faShoppingCart, faT, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <FontAwesomeIcon  icon={faSearch}  style={{ color: "red" }} className="left-menu-icon fas fa-search"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHome}  style={{ color: "red" }} className="left-menu-icon fas fa-home"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faUser}  style={{ color: "red" }} className="left-menu-icon fas fa-users"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faBookBookmark}  style={{ color: "red" }} className="left-menu-icon fas fa-bookmark"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTv}  style={{ color: "red" }} className="left-menu-icon fas fa-tv"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHourglass}  style={{ color: "red" }} className="left-menu-icon fas fa-hourglass-start"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faShoppingCart}  style={{ color: "red" }} className="left-menu-icon fas fa-shopping-cart"></FontAwesomeIcon>
    </div>
    </>
  )
}

export default Sidebar
