import React, { Component } from 'react'
import kameryOnline from '../assets/video/kameryOnline.mp4'
import '../App.css';



export default class KameryOnline extends Component {
    render() {
        return (
            <div className="menu-container-1_3">
            <nav className="navbar">
              <div className="return" onClick={() => this.props.getMenu()}>POWRÓT</div>
              <div className="navLogo"></div>
            </nav>
            <div className="menu-grid-1_3">
              <div className="buttons_left">
                <div className="boxButton" >dolna stacja</div>
                <div className="boxButton" >trasa</div>
                <div className="boxButton">boczna stacja</div>
              </div>

              <video autoPlay muted loop className="video-1_1">
                <source src={kameryOnline} type="video/mp4" />
              </video>

              <div className="buttons_right">
                <div className="boxButton" >mala stacja</div>
                <div className="boxButton" >trasa saneczkowa</div>
                <div className="boxButton" >parking</div>
              </div>
            </div>
            <footer className="footer">
              <div className="footer_text">TEST</div>
            </footer>
            <div className="menu-1_3-column-1_1">
              <iframe src="https://player.bieszczady.live/kamera/gromadzyn-wyciag-krzeselkowy.html"
                webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} frameBorder="0"
                width="100%" height="100%"></iframe>
            </div>
            <div className="menu-1_3-column-1_2">
              <iframe src="https://player.bieszczady.live/kamera/gromadzyn-glowna-trasa.html" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
            </div>
            <div className="menu-1_3-column-1_3">
              <iframe src="https://player.bieszczady.live/kamera/gromadzyn-sredni-wyciag.html"
                webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} frameBorder="0"
                width="100%" height="100%"></iframe>
            </div>
            <div className="menu-1_3-column-2_1">
              <iframe src="https://player.bieszczady.live/kamera/gromadzyn-maly-wyciag.html" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
            </div>
            <div className="menu-1_3-column-2_2">
              <iframe src="https://player.bieszczady.live/kamera/gromadzyn-dolna-stacja.html" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
            </div>
            <div className="menu-1_3-column-2_3">
              <iframe src="https://player.bieszczady.live/kamera/muczne-trasy-biegowe.html" webkitallowfullscreen="true"
                mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
            </div>
          </div>

        )
    }
}
