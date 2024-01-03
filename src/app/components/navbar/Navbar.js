import { faCaretDown, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggler from '../toggler/Toggler'

export default function Navbar() {
  return (
    <>
         <div className="navbar">
        <div className="navbar-container">
            <div className="logo-container">
                <h1 className="logo">MovieFlow web</h1>
            </div>
            <div className="menu-container">
                <ul className="menu-list">
                    <li className="menu-list-item active">Home</li>
                    <li className="menu-list-item">Movies</li>
                    <li className="menu-list-item">Series</li>
                    <li className="menu-list-item">Popular</li>
                    <li className="menu-list-item">Trends</li>

                </ul>
            </div>
            <div className="profile-container">
                {/* <img className="profile-picture" src="img/MH Miyazi.png" alt="MH Miyazi"> */}
                <div className="profile-text-container">
                    <span className="profile-text">Profile</span>
                    <FontAwesomeIcon icon={faCaretDown} className="fas fa-caret-down"></FontAwesomeIcon>
                </div>
               <Toggler/>
            </div>
        </div>
    </div>
    </>
  )
}
