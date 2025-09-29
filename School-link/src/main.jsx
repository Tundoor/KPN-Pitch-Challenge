import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Store from './store.jsx'
import Navbar from './navbar.jsx'
import Welcome from './Welcome.jsx'
import Contact from './Contact.jsx'
import Announcements from './menu pages/Announcements.jsx'
import Resources from './menu pages/Resources.jsx'
import StudyArea from './menu pages/StudyArea.jsx'
import Community from './menu pages/Community.jsx'
import Settings from './menu pages/Settings.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Announcements" element={<Announcements />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Study Area" element={<StudyArea />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
