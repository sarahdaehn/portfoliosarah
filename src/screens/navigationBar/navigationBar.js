import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'

function navigationBar() {
  return (
    <div id="home">
      <Navbar>
      <Navbar.Brand href="#home"> Sarah Daehn</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default navigationBar
