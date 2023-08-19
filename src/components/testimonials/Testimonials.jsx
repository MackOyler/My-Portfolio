import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Mack does an excellent job creating and bringing to life the ideas we have in our heads but have trouble explaining. He is very good at delivering what you want as a client.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wade',
    review: 'Even though Mack is just starting out at development, he is very good at explaining everything and walking us through the process. He does great work and I plan on using him in the future.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame De',
    review: 'Mack did not disappoint. He works tirelessly to deliver what he promises. He really seems to listen to everything we were looking for and pays attention to details.'
  },
  {
    avatar: AVTR4,
    name: 'Ama B',
    review: 'We love using Mack! '
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials