import React from 'react'
import p1 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/class12/f-b1.png'
import p2 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/class12/f-b2.png'
import p3 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/class12/f-b3.png'
import p4 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/flamingo.png'
import p5 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/vistas.png'
import p6 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/antara.png'
import p7 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/history.png'
import p8 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/geo.png'



export default function doc() {
    return (
        <>
        <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p1} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Chemistry</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p2} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Physics</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p3} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Mathematics</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p4} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Flamingo</h5>
                                <p class="card-text"></p>
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
                                <h5 class="card-title">Vistas</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p6} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Antara</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p7} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">History</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" sstyle={{ height: 270, width: 215 }}>
                            <img src={p8} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Geography</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
