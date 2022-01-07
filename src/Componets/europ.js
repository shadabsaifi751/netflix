import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import holly1 from './assets/Movie Card (9).png';
import holly2 from './assets/Movie Card (10).png';
import holly3 from './assets/Movie Card (12).png';
import { Swiper, SwiperSlide } from "swiper/react";

import './mylist.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const HollyData = [
    {
        key: 1,
        image: holly1
    },
    {
        key: 2,
        image: holly2
    },
    {
        key: 3,
        image: holly3
    },
    {
        key: 4,
        image: holly1
    },
    {
        key: 5,
        image: holly2
    },
    {
        key: 6,
        image: holly3
    }
]

export default function Europ() {
  return (
    <React.Fragment>
      <section className="myList ">
        <CssBaseline />
        <Container maxWidth="sm">
        <h3 className=''>Hollywood movie</h3>
        

        <Swiper 
         slidesPerView={3.3}
         spaceBetween={30} 
         slidesPerGroup={0} 
         loop={true} 
         loopFillGroupWithBlank={true}
         className="mySwiper">

             {
                 HollyData.map((item) => (
                    <SwiperSlide>
                        <Card className='card'>
                        <div className='card-img'>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%' }}
                                image={item.image}
                                className='img-fluid'
                                alt="Live from space album cover"
                            />
                        </div>
                        
                        </Card>
                    </SwiperSlide>
                 ))
             }
        </Swiper>


        </Container>
      </section>
    </React.Fragment>
  );
}


