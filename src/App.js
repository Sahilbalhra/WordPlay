import './App.css'

import Navbar from './components/Navbar'
import TextForms from './components/TextForms'
import React, { useState } from 'react'
import Alert from './components/Alert'
import About from './components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [mode, setmode] = useState('light') //set mode in navbar
  const [alert, setAlert] = useState(null) //for alert
  // alert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  // toggle on navbar
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      // main body color
      document.body.style.backgroundColor = 'lightblue'
      showAlert('Dark Mode has enabled', 'success')
      document.title = 'WordPlay - Dark Mode'
    } else {
      setmode('light')
      // main body color
      document.body.style.backgroundColor = 'white'
      showAlert('light Mode has enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="WordPlay"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForms
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                aboutText="About Us"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
