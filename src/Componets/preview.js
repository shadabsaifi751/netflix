import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import img1 from './assets/Ellipse 7.png';
import img2 from './assets/Ellipse 8.jpg';
import img3 from './assets/Ellipse 10.png';
import { Swiper, SwiperSlide } from "swiper/react";

import './preview.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export default function Preview() {
  return (
    <React.Fragment>
      <section className="preview ">
        <CssBaseline />
        <Container maxWidth="sm">
        <h3 className=''>Preview</h3>
        

        <Swiper 
         slidesPerView={3}
         spaceBetween={0} 
         slidesPerGroup={1} 
         loop={true} 
         loopFillGroupWithBlank={true}
         className="mySwiper">
            <SwiperSlide>
                <div className='card'>
                    <img src={img1} className='img-fluid' alt="" />
                    <h2 className='text'>Stranger things</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={img2} className='img-fluid' alt="" />
                    <h2 className='text2'>Dark</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={img3} className='img-fluid' alt="" />
                    <h2 className='text3'>Desperados</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={img1} className='img-fluid' alt="" />
                    <h2 className='text'>Stranger things</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={img2} className='img-fluid' alt="" />
                    <h2 className='text2'>Dark</h2>
                </div>
            </SwiperSlide>
        </Swiper>
            
        </Container>
      </section>
    </React.Fragment>
  );
}


