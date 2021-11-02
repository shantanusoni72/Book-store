import React from 'react'
import Catelog from './catelog'
import { useState } from 'react'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import Footer from './footer'
import Fictional from './book/fictional'
import SelfHelp from './book/selfhelp'
import Doc from './book/doc'
import Carousel from './carousel'

export default function Header(props) {
  const [stateFic, setstateFic] = useState(false)
  const [stateSH, setstateSH] = useState(false)
  const [stateDOC, setstateDOC] = useState(false)
  return (<>
  {
    stateFic ? <><Header value={true} /><Fictional /> <Redirect to="/shop/book/fictional" /> </> : (stateSH) ? <><Header value={true} /><SelfHelp /> <Redirect to="/shop/book/selfhelp" /> </> : (stateDOC) ? <><Header value={true} /><Doc /> <Redirect to="/shop/book/doc" /> </>: 
    
    <>
    <header>
      <a id="nav-top"></a>

      <div id="nav-belt">
        <div class="nav-left">
          <div id="nav-logo">
            <a href="/" class="nav-logo-link"></a>
          </div>
        </div>
        <div class="nav-right">
          <div id="nav-holiday">
            <a href="https://google.com"></a>
          </div>
        </div>
        <div class="nav-fill">
          <div id="nav-search">
            <form>
              <div class="nav-left">
                <span class="nav-search-label">All</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                <select id="nav-search-select">
                  <option selected="selected" value="aps">All Departments</option>
                  <option value="alexa-skills">Alexa Skills</option>
                  <option value="instant-video">Amazon Video</option>
                  <option value="warehouse-deals">Amazon Warehouse Deals</option>
                  <option value="appliances">Appliances</option>
                  <option value="mobile-apps">Apps &amp; Games</option>
                  <option value="arts-crafts">Arts, Crafts &amp; Sewing</option>
                  <option value="automotive">Automotive Parts &amp; Accessories</option>
                  <option value="baby-products">Baby</option>
                  <option value="beauty">Beauty &amp; Personal Care</option>
                  <option value="stripbooks">Books</option>
                  <option value="popular">CDs &amp; Vinyl</option>
                  <option value="mobile">Cell Phones &amp; Accessories</option>
                  <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                  <option value="fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                  <option value="fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                  <option value="fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                  <option value="fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                  <option value="fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                  <option value="collectibles">Collectibles &amp; Fine Art</option>
                  <option value="computers">Computers</option>
                  <option value="courses">Courses</option>
                  <option value="financial">Credit and Payment Cards</option>
                  <option value="digital-music">Digital Music</option>
                  <option value="electronics">Electronics</option>
                  <option value="gift-cards">Gift Cards</option>
                  <option value="grocery">Grocery &amp; Gourmet Food</option>
                  <option value="handmade">Handmade</option>
                  <option value="hpc">Health, Household &amp; Baby Care</option>
                  <option value="local-services">Home &amp; Business Services</option>
                  <option value="garden">Home &amp; Kitchen</option>
                  <option value="industrial">Industrial &amp; Scientific</option>
                  <option value="digital-text">Kindle Store</option>
                  <option value="fashion-luggage">Luggage &amp; Travel Gear</option>
                  <option value="luxury-beauty">Luxury Beauty</option>
                  <option value="magazines">Magazine Subscriptions</option>
                  <option value="movies-tv">Movies &amp; TV</option>
                  <option value="mi">Musical Instruments</option>
                  <option value="office-products">Office Products</option>
                  <option value="lawngarden">Patio, Lawn &amp; Garden</option>
                  <option value="pets">Pet Supplies</option>
                  <option value="prime-exclusive">Prime Exclusive</option>
                  <option value="pantry">Prime Pantry</option>
                  <option value="software">Software</option>
                  <option value="sporting">Sports &amp; Outdoors</option>
                  <option value="tools">Tools &amp; Home Improvement</option>
                  <option value="toys-and-games">Toys &amp; Games</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="videogames">Video Games</option>
                  <option value="wine">Wine</option>
                </select>
              </div>
              <div class="nav-right">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="submit" />
              </div>
              <div class="nav-fill">
                <input type="text" autocomplete="off" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <nav id="nav-main">
        <div class="nav-left">
          <div class="nav-shop">

          </div>
        </div>
        <div class="nav-right">
          <a class="nav-a" href="https://google.com">
            <span>EN</span>
            <i class="fa fa-globe" aria-hidden="true"></i>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </a>

          <a class="nav-a" href="https://google.com">
            <span>Hello. Sign in</span>
            Accounts &amp; Lists
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </a>

          <a class="nav-a" href="https://google.com">
            Orders
          </a>

          <a class="nav-a cart" href="https://google.com">
            <span>0</span>
            Cart
          </a>
        </div>
        <div class="nav-fill">
          <ul>
            <li><button onClick={()=>setstateFic(true)}>Fictional</button></li>
            <li><button onClick={()=>setstateSH(true)}>Self Help</button></li>
            <li><button onClick={()=>setstateDOC(true)}>Documentary</button></li>
            <li><Link to={`/shop/book/contact`}>Contact</Link></li>
            <li><Link to={`/shop/book/about`}>About</Link></li>
          </ul>
        </div>
      </nav>
    </header> {props.value ? null :<Catelog />} 
    </>}
  </>)

}
