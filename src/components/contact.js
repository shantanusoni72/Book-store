import React from 'react'
import { useState } from 'react'
import Feedback from '../img/feedback.png'

function feedback() {
    document.getElementById("stat").innerHTML = "You feedback is successfully submitted."
}

export default function Contact() {
    const [show, state] = useState(false)
    return (
        <>
        <img src={Feedback} style={{height:400, width: 1570}} />
        <br /><br /><br />
            <div style={{height: 300, width: 300, marginLeft:645,marginRight:300}}>
                <div>
                    <div class="feedback">
                        <h3>Feedback Form</h3><br />
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <br />
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Desribe your query/suggestion"></textarea><br />
                        <button class="btn btn-primary" onClick={feedback}>Submit</button>
                        <br /><br /><br />
                        <h6 id='stat' style={{color:"green"}}></h6>
                    </div>
                </div>
            </div>
        </>
    )
}
