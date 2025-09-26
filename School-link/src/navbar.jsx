import hamburgerIcon from './assets/game-icons_hamburger-menu.svg';
import menuSettingIcon from './assets/material-symbols_settings.svg';
import expand from './assets/Expand Arrow.svg'

function Navbar() {
  
        let hamIcon =  document.getElementById('hamIcon')
        let nav = document.querySelector('.nav-div')
        let menuDiv = document.querySelector('.hamburger-div')
         
        menuDiv.style.display = 'none'

        function closeMenuDiv () {

        menuDiv.classList.toggle('menu-open')

        if  (menuDiv.classList.contains('menu-open')) {
            menuDiv.style.display = 'none'
        } else {
            menuDiv.style.display = 'flex'
        } 
       }
    
    
        return (
     <>
     <div className="nav-div">
        <div className="hamburger-icon-div">
            <img src={hamburgerIcon} id="hamIcon" alt="Hamburger Menu" onClick={() => {closeMenuDiv()}}></img>
        </div>
        <div className="nav-link-div">
            <a className='nav-link'>Home</a>
            <a className='nav-link'>Store</a>
            <a className='nav-link'>Contact</a>
        </div>
     </div>
     <div className='overlay'></div>
     <div className="hamburger-div">
        <div className="menu-links">
            <a className='menu-link'>Announcements</a>
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