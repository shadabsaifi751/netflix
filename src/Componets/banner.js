import React from "react";
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import { pink , red} from '@mui/material/colors';
import './banner.scss';
import logo from "../Componets/assets/Logo.png"

function Banner() {
  
  return (
    <>
      <section className="banner">
        
        <nav>
        <div>
           <a href="#">
            <img src={logo} className="logo" alt="" />
           </a>
        </div>
          <ul>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </nav>
        
        <div className="content">
          <h1>Stranger <br /> Things</h1>

          <ul>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>

          <ul className="info">
            <li>
              
              <a href="#"><CheckIcon /> <br/> My List</a>
            </li>
            <li>
            <Button variant="contained" sx={{ color: pink[500], background:pink[100] }}   startIcon={<PlayCircleFilledWhiteIcon />}>
            Play
            </Button>
            
            </li>
            <li>
              <a href="#"><InfoIcon /> <br/> Info</a>
            </li>
          </ul>

        </div>
      </section>
    </>
  );
}

export default Banner;
