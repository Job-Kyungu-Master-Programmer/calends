import React from 'react'
import Dashboard from './components/Dashboard'
import Note from './components/Note'
import Contact from './components/Contact'
import Select from './components/Select'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
        <div className="container">
          <Dashboard />
           <div className="webinaire">
               <div className="note">
                  <Note />
               </div>
               <div className="contact">
                  <Contact />
               </div>
           </div>
        </div>
    </div>
  )
}

export default App