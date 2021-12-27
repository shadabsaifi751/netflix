import React from "react";
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
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

          <ul>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
            <Button variant="contained" startIcon={<PlayCircleFilledWhiteIcon />}>
              Play
            </Button>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>

        </div>
      </section>
    </>
  );
}

export default Banner;
