import React, { Component } from 'react'
import '../App.css';
import gastronomiaHotel from '../assets/video/gastronomiaHotel.mov'


export default class GastronomiaHotele extends Component {
    render() {
        return (
            <div className="menu-container-2_1">
            <nav className="navbar">
              <div className="return" onClick={() => this.props.getMenu()}>POWRÓT</div>
              <div className="navLogo"></div>
            </nav>
            <div className="menu-grid-2_1">
              <div className="buttons_left">
                <div className="boxButton" >jeden</div>
                <div className="boxButton" >cennik</div>
                <div className="boxButton" >trzy</div>
              </div>
  
              <video autoPlay muted loop className="video-1_1">
                <source src={gastronomiaHotel} type="video/mp4" />
              </video>
  
              <div className="buttons_right">
                <div className="boxButton" >cztery</div>
                <div className="boxButton" >galeria</div>
                <div className="boxButton" >o nas</div>
              </div>
            </div>
            <footer className="footer">
              <div className="footer_text">TEST</div>
            </footer>
            <div className="menu-2_1-column-1_1"></div>
            <div className="menu-2_1-column-1_2"></div>
            <div className="menu-2_1-column-1_3"></div>
            <div className="menu-2_1-column-2_1"></div>
            <div className="menu-2_1-column-2_2"></div>
            <div className="menu-2_1-column-2_3"></div>
          </div>  
        )
    }
}
