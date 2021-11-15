import React from 'react'
import p1 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b1.png'
import p2 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b2.png'
import p3 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b3.png'
import p4 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b4.png'
import p5 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b5.png'
import p6 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b6.png'
import p7 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b7.png'
import p8 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/book/cs/f-b8.png'
import read from '../../book/chapterOne.pdf'
import books from "../res.json"

export default function fictional() {
    return (
        <>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p1} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                {books.map(({ id, title }) => (
                                    <h5 class="card-title">{title}</h5>
                                ))}
                                <p class="card-text">By Veronica Roth</p>
                                <a href="https://programmer-books.com/wp-content/uploads/2018/05/Advanced-java.pdf" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p2} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p3} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">The Sword of the Jupiter</h5>
                                <p class="card-text">By Travis Starnes</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p4} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
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
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p6} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img src={p7} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" sstyle={{ height: 270, width: 215 }}>
                            <img src={p8} class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
