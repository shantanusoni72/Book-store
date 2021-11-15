import React from 'react'
import Catelog from './catelog'
import { useState } from 'react'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import Fictional from './book/fictional'
import SelfHelp from './book/selfhelp'
import Doc from './book/doc'
import logo from '../img/logo.png'
import Contact from '../components/contact'
import About from './about'

export default function Header(props) {
  const [stateCS, setstateCS] = useState(false)
  const [stateBus, setstateBus] = useState(false)
  const [stateC, setstateC] = useState(false)
  const [stateContact, showContact] = useState(false)
  const [stateAbout, showAbout] = useState(false)
  return (<>
  {
    stateCS ? <><Header hideCatelog={true} /><Fictional /> <Redirect to="/shop/book/fictional" /> </> : (stateBus) ? <><Header hideCatelog={true} /><SelfHelp /> <Redirect to="/shop/book/selfhelp" /> </> : (stateC) ? <><Header hideCatelog={true} /><Doc /> <Redirect to="/shop/book/doc" /> </>: (stateContact) ? <><Header hideCatelog={true} /><Contact /> <Redirect to="/contact" /> </> : (stateAbout) ? <><Header hideCatelog={true} /><About /> <Redirect to="/about" /> </> :
    
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="https://google.comnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="https://google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Books
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" onClick={()=>setstateCS(true)}>Computer Science</a></li>
            <li><a class="dropdown-item" onClick={()=>setstateBus(true)}>Business Management </a></li>
            <li><a class="dropdown-item" onClick={()=>setstateC(true)}>Class 12 CBSE </a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>showContact(true)}>Contact</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" onClick={()=>showAbout(true)}>About</a>
        </li>
      </ul>
      <h6 id="Profile"></h6>
      { props.showProfile ? document.getElementById("Profile").innerHTML="Hello" : null}
    </div>
  </div>
</nav> {props.hideCatelog ? null : <Catelog />} 
    </>}
  </>)

}
