import React from 'react'
import s1 from '/home/shaan/ReactJS/Amazon-Clone/amazon-clone/src/img/slide_1.jpg'

export default function carousel() {
    return (
        <>
        <section id="promo">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="promo-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img src={s1} alt="Slide 1"/>
                  </div>
                </div>
                <a class="left carousel-control" href="#promo-carousel" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#promo-carousel" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
