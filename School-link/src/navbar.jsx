import hamburgerIcon from './assets/game-icons_hamburger-menu.svg';
import menuSettingIcon from './assets/material-symbols_settings.svg';
import expand from './assets/Expand Arrow.svg'

function Navbar() {
    return (
    <>
     <div className="nav-div">
        <div className="hamburger-icon-div">
            <img src={hamburgerIcon} id="hamIcon" alt="Hamburger Menu"></img>
        </div>
        <div className="nav-link-div">
            <a className='nav-link'>Home</a>
            <a className='nav-link'>Store</a>
        </div>
     </div>
     <div className='overlay'></div>
     <div className="hamburger-div">
        <div className="menu-links">
            <div className='announcements-header'>
                <p className='menu-link' >Announcements</p>
                <img src={expand} id="expand-btn"></img>
            </div>
            <div className="announcement-div">
                <a className='announcement-link'>School Announcement</a>
                <a className='announcement-link'>Staff Announcement</a>
                <a className='announcement-link'>Parent Announcement</a>
                <a className='announcement-link'>Student Announcement</a>
            </div>
            <a className='menu-link'>Resources</a>
            <a className='menu-link'>Study Rooms</a>
            <a className='menu-link'>Community</a>
            <a className='menu-link'>Settings</a>
            
        </div>
     </div>
     
    </>
  )
}
export default Navbar