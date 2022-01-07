import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import data from './data'
import { Swiper, SwiperSlide } from "swiper/react";

import './mylist.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export default function Watching() {
  return (
    <React.Fragment>
      <section className="myList ">
        <CssBaseline />
        <Container maxWidth="sm">
        <h3 className=''>My List</h3>
        

        <Swiper 
         slidesPerView={3}
         spaceBetween={30} 
         slidesPerGroup={0} 
         loop={true} 
         loopFillGroupWithBlank={true}
         className="mySwiper">
            {data.map((item) => (
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
                   {/* <IconButton aria-label="play"  size="large" className="icon">
                        <PlayCircleIcon fontSize="70px" />
                    </IconButton> */}
                    
               
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


