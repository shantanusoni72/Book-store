import React from 'react'

import {useState} from 'react'
import Login from './login'
import dress_img from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/f-b7.png'
import { Redirect } from 'react-router-dom'
import p1 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/f-b1.png' 
import p2 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/f-b2.png' 
import p3 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/f-b3.png'  
import p5 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/f-b5.png' 
import p6 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/f-b6.png' 
import Registor from './registor'
import Carousel from './carousel'
import Header from './header'

export default function Catelog() {
  const [show,setShow] = useState(false)
  const [RegisterShow,setRegisterShow] = useState(false)
  return(
    <>
    {
      show ? <Login /> : (RegisterShow) ? <Registor /> : <><Carousel />
    <section id="products">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-3">
                <div class="col text-center" id="welcome">
                  <h2>Welcome</h2>
                  <p>Sign in for the best experience</p>
                  <button class="btn" onClick={()=>setShow(true)}>Sign in securely</button>
                  <div class="footer">
                    New to Goodreads? <button onClick={()=>setRegisterShow(true)}>Start here</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col" id="amazon-basics">
                  <h2>Explore On-demading books</h2>
                  <a href="https://google.com" class="thumbnail text-center">
                    <img src={p1} alt="Product 1" />
                    <span class="caption">Fictional</span>
                  </a>
                  <a href="https://google.com" class="thumbnail text-center">
                    <img src={p2} alt="Product 2" />
                    <span class="caption">Self Help</span>
                  </a>
                  <a href="https://google.com" class="thumbnail text-center">
                    <img src={p3} alt="Product 3" />
                    <span class="caption">Non-Fictional</span>
                  </a>
                  <div class="footer">
                    <a href="https://google.com">Shop all AmazonBasics</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col" id="dress">
                  <h2>Most popular fictional</h2>
                  <div class="row text-center">
                    <a href="https://google.com"><img src={dress_img} /></a>
                  </div>

                  <div class="footer">
                    <a href="https://google.com">Buy Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div>
                  <a href="https://google.com"><img src={p5} alt="Product 5" /></a>
                </div>
                <div class="col" id="deal-day">
                  <h2>Deal of the day</h2>
                  <h3>$163.99</h3>
                  <small>List: <s>$425.00</s> (47% off)</small>
                  <a href="https://google.com"><img src={p6} alt="Product 6" /></a>
                  <div class="footer">
                    <a href="https://google.com">Shop all deals</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>}
    </>
  )
}
