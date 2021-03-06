import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import img1 from './assets/Movie Card.png';
import img2 from './assets/Rectangle 10.jpg';
import img3 from './assets/Rectangle 10 (1).png';
import { Swiper, SwiperSlide } from "swiper/react";

import './mylist.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const watchData = [
    {
        key: 1,
        image: img1
    },
    {
        key: 2,
        image: img2
    },
    {
        key: 3,
        image: img3
    },
    {
        key: 4,
        image: img1
    },
    {
        key: 5,
        image: img2
    },
    {
        key: 6,
        image: img3
    }
]

export default function myList() {
  return (
    <React.Fragment>
      <section className="myList ">
        <CssBaseline />
        <Container maxWidth="sm">
        <h3 className=''>Contiune Watching for Eron</h3>
        

        <Swiper 
         slidesPerView={3}
         spaceBetween={30} 
         slidesPerGroup={0} 
         loop={true} 
         loopFillGroupWithBlank={true}
         className="mySwiper">

             {
                 watchData.map((item) => (
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
                        <IconButton aria-label="play"  size="large" className="icon">
                                <PlayCircleIcon fontSize="70px" />
                            </IconButton>
                            
                        <div className='card-foot'>
                            <span>
                                <IconButton aria-label="Example">
                                    <InfoIcon className="white"/> 
                                </IconButton>
                            </span>
                            <span>
                                <IconButton aria-label="Example">
                                    <MoreVertIcon  className="white"/> 
                                </IconButton>
                            </span>
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


