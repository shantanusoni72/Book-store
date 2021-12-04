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
  formData.append("File", file_name)
}

function uploadStatement() {
  document.getElementById("uploadstatement").innerHTML = "Upload successfull"
}

export default function Catelog() {
  const [show, setShow] = useState(false)
  const [RegisterShow, setRegisterShow] = useState(false)
  const [UploadShow, uploadStatement] = useState(false)
  return (
    <>
      {
        show ? <Login /> : (RegisterShow) ? <Registor /> : <>{UploadShow ? <div class="alert alert-success" role="alert">
        Your book have been uploaded. Our team will review it within 24 hrs!
      </div> : null}<Carousel /><br />
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h3>Welcome!</h3>
                    <h5>Sign for best experience</h5>
                    <button class="btn btn-primary" onClick={() => setShow(true)}>Signin</button><br /><br /><br /><br />
                    <p>New to Academia, <a onClick={() => setRegisterShow(true)} style={{ color: "blue", textDecorationLine: "underline" }}>register here</a></p><br />
                    <br /><br />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h3>Free for everyone</h3>
                    <h5>Anyone can upload and download the academic book, Just click on the upload and our team will review uploaded book within 24hrs.</h5>
                      <input type="file" id="upload" /> <br />
                      <button class="btn btn-primary" onClick={()=>uploadStatement(true)}>Upload</button>
                    <p id="uploadstatement"></p>
                    <br />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h3>By Students, To Students</h3>
                    <h5>This project is made for students to help them find their academic books easier.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}</>
  )
}
