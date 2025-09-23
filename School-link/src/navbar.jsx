import hamburgerIcon from './assets/game-icons_hamburger-menu.svg';
import menuSettingIcon from './assets/material-symbols_settings.svg';

function Navbar() {
    return (
    <>
    <div className='nav-section'>
     <div className="nav-div">
        <div className="hamburger-icon-div">
            <img src={hamburgerIcon} id="hamIcon" alt="Hamburger Menu"></img>
        </div>
        <div className="nav-link-div">
            <a className='nav-link'>Home</a>
            <a className='nav-link'>Store</a>
        </div>
     </div>
     {/* <div className="hamburger-div">
        <div className="menu-links">
            <a className='menu-link'>Announcement</a>
            <a className='menu-link'>Resources</a>
            <a className='menu-link'>Study Rooms</a>
            <a className='menu-link'>Community</a>
            <div className="announcement-div">
                <a className='announcement-link'>School Announcement</a>
                <a className='announcement-link'>Staff Announcement</a>
                <a className='announcement-link'>Parent Announcement</a>
                <a className='announcement-link'>Student Announcement</a>
            </div>
        </div>
        <div className="menu-settings-div">
            <img src={menuSettingIcon} alt="Settings Button"></img>
        </div>
     </div> */}
     </div>
    </>
  )
}
export default Navbar