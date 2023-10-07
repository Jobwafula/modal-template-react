import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div>
        <p>show modal</p>
        <button onClick={()=>setShowModal(true)}>open</button>
        {/* {showModal && <Modal />} */}
        <Modal />
        
      </div>
    
    </>
  )
}

export default App
