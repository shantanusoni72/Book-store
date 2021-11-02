import React from 'react'

export default function registor() {
    return (
        <>
            <br />
            <div style={{ textAlign: 'center' }}>
                <label>Register</label>
            </div>
            <div class="input-group mb-3" style={{ marginTop: 20, marginLeft: 300, marginRight: 300 }}>
                <span class="input-group-text" >Email</span>
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            </div>

            <div class="input-group" style={{ marginTop: 20, marginLeft: 300, marginRight: 300 }}>
                <span class="input-group-text">Password</span>
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            </div>
            <div class="input-group" style={{ marginTop: 20, marginLeft: 300, marginRight: 300 }}>
                <span class="input-group-text">Confirm Password</span>
                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
                <button type="button" class="btn btn-warning">Register</button>
            </div>
        </>
    )
}
