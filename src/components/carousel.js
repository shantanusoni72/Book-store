import React from 'react'
import slide_1 from '../img/slide_1.jpg'
import slide_2 from '../img/slide_2.jpg'
import slide_3 from '../img/slide_3.jpg'

export default function carousel() {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide_1} class="d-block w-100" alt="s" />
          </div>
          <div class="carousel-item">
            <img src={slide_2} class="d-block w-100" alt="s" />
          </div>
          <div class="carousel-item">
            <img src={slide_3} class="d-block w-100" alt="s" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
