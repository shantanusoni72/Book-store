import React from 'react'
import { useState } from 'react'

export default function Login() {
    return (
        <>
            <br />
            <div style={{textAlign:'center'}}>
                <label>Login</label>
            </div>
            <div class="input-group mb-3" style={{marginTop:20,marginLeft:300,marginRight:300}}>
                <span class="input-group-text" >Email</span>
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            </div>

            <div class="input-group" style={{marginTop:20,marginLeft:300,marginRight:300}}>
            <span class="input-group-text">Password</span>
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            </div>
            <br />
            <div style={{textAlign:'center'}}>
            <button type="button" class="btn btn-warning">Login</button>
            </div>
        </>
    )
}
