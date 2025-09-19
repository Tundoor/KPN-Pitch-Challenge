import hamburgerIcon from './assets/game-icons_hamburger-menu.svg';
import menuSettingIcon from './assets/material-symbols_settings.svg';

function Navbar() {
    return (
    <>
     <div className="nav-div">
        <div className="hamburger-icon-div">
            <img src={hamburgerIcon} id="hamIcon" alt="Hamburger Menu"></img>
        </div>
        <div className="nav-link-div">
            <a>Home</a>
            <a>Store</a>
        </div>
     </div>
     <div className="hamburger-div">
        <div className="menu-links">
            <a>Announcement</a>
            <a>Resources</a>
            <a>Study Rooms</a>
            <a>Community</a>
            <div className="announcement-div">
                <a>School Announcement</a>
                <a>Staff Announcement</a>
                <a>Parent Announcement</a>
                <a>Student Announcement</a>
            </div>
        </div>
        <div className="menu-settings-div">
            <img src={menuSettingIcon} alt="Settings Button"></img>
        </div>
     </div>
    </>
  )
}
export default Navbar