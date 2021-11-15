import React from 'react'

import { useState } from 'react'
import Login from './login'
import { Redirect } from 'react-router-dom'
import Registor from './registor'
import Carousel from './carousel'
import Header from './header'

const UploadFile = () => {
  const file_name = document.getElementById('upload')[0]
  const formData = new FormData()
  formData.append("File",file_name)
}

export default function Catelog() {
  const [show, setShow] = useState(false)
  const [RegisterShow, setRegisterShow] = useState(false)
  return (
    <>
      {
        show ? <Login /> : (RegisterShow) ? <Registor /> : <><Carousel /><br />
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h3>Welcome!</h3>
                    <h5>Sign for best experience</h5>
                    <button class="btn btn-primary" onClick={() => setShow(true)}>Signin</button><br /><br /><br /><br />
                    <p>New to Academia, <a onClick={() => setRegisterShow(true)} style={{ color: "blue", textDecorationLine: "underline" }}>register here</a></p><br />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h3>Free for everyone</h3>
                    <h5>Anyone can upload and download the academic book, Just click on the upload and our team will review uploaded book within 24hrs.</h5>
                    <form>
                    <input type="file" id="upload" /> <br />
                    <button id="upload_btn" className="btn btn-primary" onClick={UploadFile}>Upload</button>
                    </form>
                    <br />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    Any book can find can be find here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}</>
  )
}
