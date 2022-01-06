import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import img1 from './assets/Ellipse 7.png';
import img2 from './assets/Ellipse 8.jpg';
import img3 from './assets/Ellipse 10.png';

import './preview.scss'
import Carousel from 'react-material-ui-carousel'


export default function Preview() {
  return (
    <React.Fragment>
      <section className="preview">
        <CssBaseline />
        <Container maxWidth="sm">
        <h3 className=''>Preview</h3>


            <Carousel
                 fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
                 navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                     style: {
                         backgroundColor: 'cornflowerblue',
                         borderRadius: 0
                     }
                 }} 
                 navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                     style: {
                         bottom: '0',
                         top: 'unset'
                     }
                 }}            // Change the "inside of the prev button to "prev"
             
            
            
            >
               <div className='card'>

                    <img src={img1} className='img-fluid' alt="" />
                    <h2 className='text'>Stranger things</h2>
               </div>
               <img src={img2} className='img-fluid' alt="" />
               <img src={img3} className='img-fluid' alt="" />
               {/* <img src={img4} className='img-fluid' alt="" /> */}
            </Carousel>


            <Box sx={{height: '100vh' }} />



            

            
        </Container>
      </section>
    </React.Fragment>
  );
}


