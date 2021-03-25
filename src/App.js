import React, { Component } from 'react'

import './App.css';

import { Switch, Route, BrowserRouter as Router, NavLink, useLocation } from 'react-router-dom';

import stacjaNarciarska from './assets/video/stacjaNarciarska.mp4'
import galeria1 from './assets/lightbox/images/galeria1.jpg'
import galeria2 from './assets/lightbox/images/galeria2.png'
import galeria3 from './assets/lightbox/images/galeria3.jpg'
import galeria4 from './assets/lightbox/images/galeria4.jpg'

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import { FacebookProvider, EmbeddedPost } from 'react-facebook';

import InstagramEmbed from 'react-instagram-embed';


import video from './assets/video/zjazdTyrolski.mp4'

import {AnimatePresence, motion } from "framer-motion"

import kameryOnline from './assets/video/kameryOnline.mp4'

import gastronomiaHotel from './assets/video/gastronomiaHotel.mov'

import letnieAtrakcje from './assets/video/letnieAtrakcje.mp4'

import potrzebneInformacje from './assets/video/potrzebneInformacje.mp4'

function App() {
  const location = useLocation();
  return (
    <div className="App">
  
  <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route path="/" exact component={Main} />
      <Route path="/StacjaNarciarska" exact component={StacjaNarciarska} />
      <Route path="/StacjaNarciarska/aktualnosci" exact component={StacjaNarciarska_Aktualnosci} />
      <Route path="/ZjazdTyrolski" component={ZjazdTyrolski} />
      <Route path="/KameryOnline" component={KameryOnline} />
      <Route path="/GastronomiaHotele" component={GastronomiaHotele} />
      <Route path="/LetnieAtrakcje" component={LetnieAtrakcje} />
      <Route path="/PotrzebneInformacje" component={PotrzebneInformacje} />
    </Switch>
    </AnimatePresence>
    </div>
  );
}

const scaling = {
  in: {
    scale: 1
  },
    out: {
    scale: 0
  }, 
  pop: {
    scale : 0.5
  }
}

const fading = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

const transition = {
  duration: 2,
  transition: "linear"
}

const fast = {
  duration: 0,
  transition: "linear"
}

function Main() {
  return (
      <motion.div initial="out" animate="in"  exit="out" variants={fading} transition={transition} className="mainContainer">

        <div className="logo"></div>
        <div className="left">
          <NavLink className="button" to="/StacjaNarciarska">
            <div className="frame">
              <div className="text" >stacja narciarska</div>
            </div>
          </NavLink>
          <NavLink className="button" to="/ZjazdTyrolski">
            <div className="frame">
              <div className="text" >zjazd tyrolski</div>
            </div>
          </NavLink>
          <NavLink className="button" to="/KameryOnline">
            <div className="frame">
              <div className="text">kamery online</div>
            </div>
          </NavLink>
        </div>

        <div className="right">
        <NavLink className="button" to="/GastronomiaHotele">
            <div className="frame">
              <div className="text">gastronomia noclegi</div>
            </div>
          </NavLink>
          <NavLink className="button" to="/LetnieAtrakcje">
            <div className="frame">
              <div className="text">letnie atrakcje</div>
            </div>
          </NavLink>
          <NavLink className="button" to="/PotrzebneInformacje">
            <div className="frame">
              <div className="text">potrzebne informacje</div>
            </div>
          </NavLink>
        </div>
      </motion.div>
  )
}

function StacjaNarciarska() {

  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false
    },
    caption: {
      showCaption: false
    },
    thumbnails: {
      showThumbnails: false
    }

  };

  const location = useLocation();
  alert(location.state.prevPath);
  return (
      <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska/aktualnosci" ? fast : transition} className="menu-container-1_1">
        <nav className="navbar">
          <NavLink className="return" to="/" >POWRÓT</NavLink>
          <div className="navLogo"></div>
        </nav>
        <div className="menu-grid-1_1">
          <div className="buttons_left">
            <NavLink className="boxButton" to='/StacjaNarciarska/aktualnosci' >aktualnosci</NavLink>
            <div className="boxButton" >cennik</div>
            <div className="boxButton" >trzy</div>
          </div>

          <video autoPlay muted loop className="video-1_1">
            <source src={stacjaNarciarska} type="video/mp4" />
          </video>

          <div className="buttons_right">
            <div className="boxButton" >kup karnet</div>
            <div className="boxButton" >galeria</div>
            <div className="boxButton" >o nas</div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer_text">TEST</div>
        </footer>

        <div className="menu-1_1-column-1_2">

          <div calss="table-box">
            <table className="table">
              <thead>
                <tr>
                  <th className='active bordless'></th>
                  <th className='active bordless text-center' colSpan='2'>POZA SEZONEM</th>
                  <th className='active bordless text-center' colSpan='2'>SEZON</th>
                </tr>
                <tr>
                  <th className='active'></th>
                  <th className='active text-center'>NORMALNA</th>
                  <th className='active text-center'>ULGOWA</th>
                  <th className='active text-center'>NORMALNA</th>
                  <th className='active text-center'>ULGOWA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='table-tittle'>2 godziny</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>55 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>50 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>60 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>55 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>4 godziny</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>70 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>60 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>75 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>70 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>5 godzin</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>75 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>65 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>80 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>75 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>6 godzin</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>80 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>70 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>85 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>80 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>2h po 18tej</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>35 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>30 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>40 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>35 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>4h po 16tej</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>50 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>45 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>55 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>50 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>6h po 14tej</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>65 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>55 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>70 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>65 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>1 dzień</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>95 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>85 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>105 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>95 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>2 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>170 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>145 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>200 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>180 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>3 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>235 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>195 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>285 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>240 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>3 dni z 5 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>250 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>210 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>295 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>250 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>4 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>295 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>245 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>365 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>305 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>5 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>360 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>295 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>440 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>370 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>5 dni z 7 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>380 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>315 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>455 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>385 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>6 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>415 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>345 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>510 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>420 PLN</td>
                </tr>
                <tr>
                  <td className='table-tittle'>7 dni</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>445 PLN</td>
                  <td className='text-center' data-title='poza sezonem, ulgowa**'>365 PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>540 PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>455 PLN</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div className="menu-1_1-column-1_3"></div>

        <div className="menu-1_1-column-2_1">
          <iframe src="https://maleciche.e-skipass.pl/" frameBorder="0" width="100%" height="100%"></iframe>
        </div>

        <div className="menu-1_1-column-2_2">

          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className="gallery">

                <a href={galeria1} data-lightbox="gallery"><img className="image"
                  src={galeria1} /></a>
                <a href={galeria2} data-lightbox="gallery"><img className="image"
                  src={galeria2} /></a>
                <a href={galeria3} data-lightbox="gallery"><img className="image"
                  src={galeria3} /></a>
                <a href={galeria4} data-lightbox="gallery"><img className="image"
                  src={galeria4} /></a>

                <a href={galeria1} data-lightbox="gallery"><img className="image"
                  src={galeria1} /></a>
                <a href={galeria2} data-lightbox="gallery"><img className="image"
                  src={galeria2} /></a>
                <a href={galeria3} data-lightbox="gallery"><img className="image"
                  src={galeria3} /></a>
                <a href={galeria4} data-lightbox="gallery"><img className="image"
                  src={galeria4} /></a>

                <a href={galeria1} data-lightbox="gallery"><img className="image"
                  src={galeria1} /></a>
                <a href={galeria2} data-lightbox="gallery"><img className="image"
                  src={galeria2} /></a>
                <a href={galeria3} data-lightbox="gallery"><img className="image"
                  src={galeria3} /></a>
                <a href={galeria4} data-lightbox="gallery"><img className="image"
                  src={galeria4} /></a>

                <a href={galeria1} data-lightbox="gallery"><img className="image"
                  src={galeria1} /></a>
                <a href={galeria2} data-lightbox="gallery"><img className="image"
                  src={galeria2} /></a>
                <a href={galeria3} data-lightbox="gallery"><img className="image"
                  src={galeria3} /></a>
                <a href={galeria4} data-lightbox="gallery"><img className="image"
                  src={galeria4} /></a>

              </div>

            </SRLWrapper>
          </SimpleReactLightbox>

        </div>
        <div className="menu-1_1-column-2_3"></div>
      </motion.div>
  );
}



function StacjaNarciarska_Aktualnosci() {
    
  return(
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska" ? fast : transition} className="menu-container-1_1">
    <nav className="navbar">
      <NavLink className="return" to="/" >POWRÓT</NavLink>
      <div className="navLogo"></div>
    </nav>
    <div className="menu-grid-1_1">
      <div className="buttons_left">
        <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', state: { prevPath: window.location.pathname } }}>aktualnosci</NavLink>
        <div className="boxButton" >cennik</div>
        <div className="boxButton" >trzy</div>
      </div>

      <video autoPlay muted loop className="video-1_1">
        <source src={stacjaNarciarska} type="video/mp4" />
      </video>

      <div className="buttons_right">
        <div className="boxButton" >kup karnet</div>
        <div className="boxButton" >galeria</div>
        <div className="boxButton" >o nas</div>
      </div>
    </div>
    <footer className="footer">
      <div className="footer_text">TEST</div>
    </footer>
    <div className="menu-1_1-column-1_1">


    <FacebookProvider appId="463358671379783">
      <EmbeddedPost href="https://www.facebook.com/ZieleniecSkiArena/posts/4015310885167255" width="750" />
      <EmbeddedPost href="https://www.facebook.com/ZieleniecSkiArena/posts/4129279430437066" width="750" />
      <EmbeddedPost href="https://www.facebook.com/ZieleniecSkiArena/posts/4121438761221133" width="750" />
      <EmbeddedPost href="https://www.facebook.com/ZieleniecSkiArena/posts/4044634728901537" width="750" />
    </FacebookProvider>

    {/* <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
<div className="fb-post"
data-href="https://www.facebook.com/ZieleniecSkiArena/posts/4015310885167255"
></div>

<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
<div className="fb-post"
data-href="https://www.facebook.com/ZieleniecSkiArena/posts/4129279430437066"
></div>

<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
<div className="fb-post"
data-href="https://www.facebook.com/ZieleniecSkiArena/posts/4121438761221133"
></div>

<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
<div className="fb-post"
data-href="https://www.facebook.com/ZieleniecSkiArena/posts/4044634728901537"
></div> */}

    {/* <iframe
src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FZieleniecSkiArena%2Fvideos%2F120000226699915&width=750&show_text=true&appId"
width="100%" height="650" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
allowFullScreen={false}
allow="autoPlay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

<iframe
src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FZieleniecSkiArena%2Fposts%2F4015310885167255&width=750&show_text=true&height=661&appId"
width="100%" height="650" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
allowFullScreen={true}
allow="autoPlay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

<iframe
src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FZieleniecSkiArena%2Fposts%2F4004939096204434&width=500&show_text=true&height=545&appId"
width="100%" height="650" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
allowFullScreen={true}
allow="autoPlay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


<iframe
src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZieleniecSkiArena%2Fvideos%2F1155839364886235%2F&show_text=true&width=560"
width="100%" height="700" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
allowFullScreen={true} allow="autoPlay; clipboard-write; encrypted-media; picture-in-picture; web-share"
allowFullScreen={true}></iframe>


<iframe
src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZieleniecSkiArena%2Fvideos%2F215992476783818%2F&show_text=true"
width="100%" height="800" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
allowFullScreen={true} allow="autoPlay; clipboard-write; encrypted-media; picture-in-picture; web-share"
allowFullScreen={true}></iframe> */}
  </div>
  </motion.div>

  )
}

function ZjazdTyrolski(){
  return(
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={transition} className="menu-container-1_2">
    <nav className="navbar">
    <NavLink className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
    </nav>
    <div className="menu-grid-1_2">
        <div className="buttons_left">
            <div className="boxButton" >jeden</div>
            <div className="boxButton" >cennik</div>
            <div className="boxButton" >trzy</div>
        </div>

        <video autoPlay muted loop className="video-1_1">
            <source src={video} type="video/mp4" />
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
    <div className="menu-1_2-column-1_1"></div>
    <div className="menu-1_2-column-1_2"></div>
    <div className="menu-1_2-column-1_3"></div>
    <div className="menu-1_2-column-2_1"></div>
    <div className="menu-1_2-column-2_2"></div>
    <div className="menu-1_2-column-2_3"></div>
</motion.div>
  );
}

function KameryOnline(){
  return(
    <motion.div initial="out" animate="in"  exit="out" variants={scaling} transition={transition} className="menu-container-1_3">
    <nav className="navbar">
    <NavLink className="return" to="/" >POWRÓT</NavLink>
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
  </motion.div>
  )
}

function GastronomiaHotele(){
  return(
    <motion.div initial="out" animate="in"  exit="out" variants={scaling} transition={transition} className="menu-container-2_1">
    <nav className="navbar">
    <NavLink className="return" to="/" >POWRÓT</NavLink>
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
  </motion.div>  
  )
}

function LetnieAtrakcje(){
  return(
    <motion.div initial="out" animate="in"  exit="out" variants={scaling} transition={transition} className="menu-container-2_2">
    <nav className="navbar">
    <NavLink className="return" to="/" >POWRÓT</NavLink>
      <div className="navLogo"></div>
    </nav>
    <div className="menu-grid-2_2">
      <div className="buttons_left">
        <div className="boxButton" >jeden</div>
        <div className="boxButton" >cennik</div>
        <div className="boxButton" >trzy</div>
      </div>

      <video autoPlay muted loop className="video-1_1">
        <source src={letnieAtrakcje} type="video/mp4" />
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
    <div className="menu-2_2-column-1_1"></div>
    <div className="menu-2_2-column-1_2"></div>
    <div className="menu-2_2-column-1_3"></div>
    <div className="menu-2_2-column-2_1"></div>
    <div className="menu-2_2-column-2_2"></div>
    <div className="menu-2_2-column-2_3"></div>
  </motion.div>
  )
}

function PotrzebneInformacje(){
  return(
    <motion.div initial="out" animate="in"  exit="out" variants={scaling} transition={transition} className="menu-container-2_3">
    <nav className="navbar">
    <NavLink className="return" to="/" >POWRÓT</NavLink>
      <div className="navLogo"></div>
    </nav>
    <div className="menu-grid-2_3">
      <div className="buttons_left">
        <div className="boxButton" >jeden</div>
        <div className="boxButton" >cennik</div>
        <div className="boxButton" >trzy</div>
      </div>

      <video autoPlay muted loop className="video-1_1">
        <source src={potrzebneInformacje} type="video/mp4" />
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
    <div className="menu-2_3-column-1_1"></div>
    <div className="menu-2_3-column-1_2"></div>
    <div className="menu-2_3-column-1_3"></div>
    <div className="menu-2_3-column-2_1"></div>
    <div className="menu-2_3-column-2_2"></div>
    <div className="menu-2_3-column-2_3"></div>
  </motion.div>
  )
}


export default App;
