import React from 'react'
import p1 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/mba/f-b6.png'
import p2 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/bs.png'
import p3 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/fa.png'
import p4 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/it.png'
import p5 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/be.png'
import p6 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/s.png'

export default function selfhelp() {
    return (
        <>
        <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p1} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Managerial Economics</h5>
                                <p class="card-text">By S. Chand</p>
                                <a href="http://14.139.185.6/website/SDE/sde443.pdf" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p2} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Business Statistics</h5>
                                <p class="card-text">By Alan Alexender</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p3} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Financial Accounting</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p4} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Income Tax: Law and Practice</h5>
                                <p class="card-text">By VP Gaur</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p5} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Business Ethics</h5>
                                <p class="card-text">By Stephen K. Henn</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p6} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Statistics</h5>
                                <p class="card-text">By Roger Fentem</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
