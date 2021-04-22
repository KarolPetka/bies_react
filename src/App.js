import React, { Component, useState, useEffect } from 'react'

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

import { AnimatePresence, motion } from "framer-motion"

import kameryOnline from './assets/video/kameryOnline.mp4'

import gastronomiaHotel from './assets/video/gastronomiaHotel.mov'

import letnieAtrakcje from './assets/video/letnieAtrakcje.mp4'

import potrzebneInformacje from './assets/video/potrzebneInformacje.mp4'

import axios from 'axios';

function App() {
  const location = useLocation();
  return (
    <div className="App">

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Main} />
          <Route path="/StacjaNarciarska" exact component={StacjaNarciarska} />
          <Route path="/StacjaNarciarska/aktualnosci" exact component={StacjaNarciarska_Aktualnosci} />
          <Route path="/StacjaNarciarska/cennik" exact component={StacjaNarciarska_Cennik} />
          <Route path="/StacjaNarciarska/karnet" exact component={StacjaNarciarska_KupKarnet} />
          <Route path="/StacjaNarciarska/galeria" exact component={StacjaNarciarska_Galeria} />
          <Route path="/ZjazdTyrolski" component={ZjazdTyrolski} />
          <Route path="/KameryOnline" exact component={KameryOnline} />
          <Route path="/KameryOnline/dolnaStacja" exact component={KameryOnline_dolnaStacja} />
          <Route path="/KameryOnline/trasa" exact component={KameryOnline_trasa} />
          <Route path="/KameryOnline/bocznaStacja" exact component={KameryOnline_bocznaStacja} />
          <Route path="/KameryOnline/malaStacja" exact component={KameryOnline_malaStacja} />
          <Route path="/KameryOnline/trasaSaneczkowa" exact component={KameryOnline_trasaSaneczkowa} />
          <Route path="/KameryOnline/parking" exact component={KameryOnline_parking} />

          <Route path="/GastronomiaHotele" component={GastronomiaHotele} />
          <Route path="/LetnieAtrakcje" component={LetnieAtrakcje} />
          <Route path="/PotrzebneInformacje" component={PotrzebneInformacje} />
          <Route path="/logowanie" exact component={LogIn} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/StacjaNarciarska" exact component={Admin_StacjaNarciarska} />
          <Route path="/admin/StacjaNarciarska/cennik" exact component={Admin_StacjaNarciarska_Cennik} />

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
  duration: 0.5,
  transition: "linear"
}

const fast = {
  duration: 0,
  transition: "linear"
}

function Admin() {
  return (
    <div className="admin">
      <div className="left-admin">
        <NavLink className="button-admin" to="/admin/StacjaNarciarska">
          <div className="admin-text" >stacja narciarska</div>
        </NavLink>
        <NavLink className="button-admin" to="/ZjazdTyrolski">
          <div className="admin-text" >zjazd tyrolski</div>
        </NavLink>
        <NavLink className="button-admin" to="/KameryOnline">
          <div className="admin-text">kamery online</div>
        </NavLink>
      </div>

      <div className="right-admin">
        <NavLink className="button-admin" to="/GastronomiaHotele">
          <div className="admin-text">gastronomia noclegi</div>
        </NavLink>
        <NavLink className="button-admin" to="/LetnieAtrakcje">
          <div className="admin-text">letnie atrakcje</div>
        </NavLink>
        <NavLink className="button-admin" to="/PotrzebneInformacje">
          <div className="admin-text">potrzebne informacje</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_StacjaNarciarska() {
  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/LetnieAtrakcje">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_StacjaNarciarska_Cennik() {

  const [type, setType] = useState('');
  const [offSeasonRegular, setOffSeasonRegular] = useState('');
  const [offSeasonReduced, setOffSeasonReduced] = useState('');
  const [seasonRegular, setSeasonRegular] = useState('');
  const [seasonReduced, setSeasonReduced] = useState('');

  const [prices, setPrices] = useState([])

  const [deleteType, setDeleteType] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/stacjaNarciarska/cennik')
      .then(res => {
        setPrices(res.data)
      })
  }, [])

  function onPriceSubmit() {
    const postPrice = {
      type,
      offSeasonRegular,
      offSeasonReduced,
      seasonRegular,
      seasonReduced
    };
    axios.post(`http://localhost:8080/api/stacjaNarciarska/cennik`, postPrice);
  }

  function onPriceDelete(type){
    axios.delete(`http://localhost:8080/api/stacjaNarciarska/cennik/${type}`);
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/ZjazdTyrolski">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      <div className="admin-price">
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
              {prices.map(price => (
                <tr key={price.id}>
                  <td className='table-tittle'>{price.type}</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>{price.offSeasonRegular} PLN</td>
                  <td className='text-center-line' data-title='poza sezonem, ulgowa**'>{price.offSeasonReduced} PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>{price.seasonRegular} PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>{price.seasonReduced} PLN</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <form className="price-form-input" onSubmit={onPriceSubmit}>
        <div className="admin-price-input">
          <div calss="table-box">
            <table className="table">
              <thead className="admin-price-head">
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
                  <td className='table-admin'><input className="name-input" placeholder="Rodzaj Karnetu" type="text" value={type} onChange={(e) => setType(e.target.value)} required></input></td>
                  <td className='text-admin' data-title='poza sezonem, normalna'><input className="price-input" placeholder="Cena" type="number" value={offSeasonRegular} onChange={(e) => setOffSeasonRegular(e.target.value)} required></input>PLN</td>
                  <td className='text-admin' data-title='poza sezonem, ulgowa**'><input className="price-input" placeholder="Cena" type="number" value={offSeasonReduced} onChange={(e) => setOffSeasonReduced(e.target.value)} required></input>PLN</td>
                  <td className='text-admin' data-title='sezon*, normalna'><input className="price-input" placeholder="Cena" type="number" value={seasonRegular} onChange={(e) => setSeasonRegular(e.target.value)} required></input>PLN</td>
                  <td className='text-admin' data-title='sezon*, ulgowa**'><input className="price-input" placeholder="Cena" type="number" value={seasonReduced} onChange={(e) => setSeasonReduced(e.target.value)} required></input>PLN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="submit-price" type="submit">Dodaj do cennika</button>
      </form>

      <form className="price-form-delete" onSubmit={()=>onPriceDelete(deleteType)}>
        <div className="admin-price-delete">
          <div calss="table-box">
            <table className="table">
              <thead className="admin-price-head">
                <tr>
                  <th className='active bordless'></th>
                </tr>
                <tr>
                  <th className='active'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='table-admin'><input className="name-input" placeholder="Rodzaj Karnetu" type="text" value={deleteType} onChange={(e) => setDeleteType(e.target.value)} required></input></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="delete-price" type="submit">Usuń z cennika</button>
      </form>


      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/LetnieAtrakcje">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}



function LogIn() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="main">
      <form className="form" method="post">
        <div className="container">
          <div className="input_block">

            <input className="input" placeholder="Nazwa" value={name} onChange={onChangeName} type="text" required></input>

            <input className="input" placeholder="Hasło" value={password} onChange={onChangePassword} type="password" required></input>

            <NavLink to="/admin" className="submit" type="submit" onClick={() => console.log("nazwa: " + name + " hasło: " + password)}>Zaloguj się</NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}

function Main() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={fading} transition={transition} className="mainContainer">

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

function StacjaNarciarska(props) {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska/aktualnosci" || window.location.pathname === "/StacjaNarciarska/cennik" || window.location.pathname === "/StacjaNarciarska/karnet" || window.location.pathname === "/StacjaNarciarska/galeria" || props.location.aboutProps ? fast : transition} className="menu-container-1_1">
      <nav className="navbar">
        <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_1">
        <div className="buttons_left">
          <NavLink className="boxButton" to='/StacjaNarciarska/aktualnosci' >aktualnosci</NavLink>
          <NavLink className="boxButton" to='/StacjaNarciarska/cennik' >cennik</NavLink>
          <div className="boxButton" >trzy</div>
        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={stacjaNarciarska} type="video/mp4" />
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to='/StacjaNarciarska/karnet' >kup karnet</NavLink>
          <NavLink className="boxButton" to='/StacjaNarciarska/galeria' >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>

      <div className="menu-1_1-column-1_3"></div>

      <div className="menu-1_1-column-2_3"></div>
    </motion.div>
  );
}



function StacjaNarciarska_Aktualnosci(props) {

  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska" || window.location.pathname === "/StacjaNarciarska/cennik" || window.location.pathname === "/StacjaNarciarska/karnet" || window.location.pathname === "/StacjaNarciarska/galeria" || props.location.aboutProps ? fast : transition} className="menu-container-1_1">
      <nav className="navbar">
        <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_1">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', aboutProps: { name: true } }}>aktualnosci</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/cennik', aboutProps: { name: true } }}>cennik</NavLink>
          <div className="boxButton" >trzy</div>
        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={stacjaNarciarska} type="video/mp4" />
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/karnet', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/galeria', aboutProps: { name: true } }} >galeria</NavLink>
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

      </div>
    </motion.div>

  )
}

function StacjaNarciarska_Cennik(props) {

  const [prices, setPrices] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/stacjaNarciarska/cennik')
      .then(res => {
        setPrices(res.data)
      })
  }, [])

  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska" || window.location.pathname === "/StacjaNarciarska/aktualnosci" || window.location.pathname === "/StacjaNarciarska/karnet" || window.location.pathname === "/StacjaNarciarska/galeria" || props.location.aboutProps ? fast : transition} className="menu-container-1_1">
      <nav className="navbar">
        <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_1">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/aktualnosci', aboutProps: { name: true } }}>aktualnosci</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', aboutProps: { name: true } }}>cennik</NavLink>
          <div className="boxButton" >trzy</div>
        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={stacjaNarciarska} type="video/mp4" />
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/karnet', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/galeria', aboutProps: { name: true } }} >galeria</NavLink>
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
              {prices.map(price => (
                <tr key={price.id}>
                  <td className='table-tittle'>{price.type}</td>
                  <td className='text-center' data-title='poza sezonem, normalna'>{price.offSeasonRegular} PLN</td>
                  <td className='text-center-line' data-title='poza sezonem, ulgowa**'>{price.offSeasonReduced} PLN</td>
                  <td className='text-center' data-title='sezon*, normalna'>{price.seasonRegular} PLN</td>
                  <td className='text-center' data-title='sezon*, ulgowa**'>{price.seasonReduced} PLN</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

function StacjaNarciarska_KupKarnet(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska" || window.location.pathname === "/StacjaNarciarska/aktualnosci" || window.location.pathname === "/StacjaNarciarska/cennik" || window.location.pathname === "/StacjaNarciarska/galeria" || props.location.aboutProps ? fast : transition} className="menu-container-1_1">
      <nav className="navbar">
        <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_1">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/aktualnosci', aboutProps: { name: true } }} >aktualnosci</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/cennik', aboutProps: { name: true } }} >cennik</NavLink>
          <div className="boxButton" >trzy</div>
        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={stacjaNarciarska} type="video/mp4" />
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/galeria', aboutProps: { name: true } }} >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
      <div className="menu-1_1-column-2_1">
        <iframe src="https://maleciche.e-skipass.pl/" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  );
}

function StacjaNarciarska_Galeria(props) {
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
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/StacjaNarciarska" || window.location.pathname === "/StacjaNarciarska/aktualnosci" || window.location.pathname === "/StacjaNarciarska/cennik" || window.location.pathname === "/StacjaNarciarska/karnet" || props.location.aboutProps ? fast : transition} className="menu-container-1_1">
      <nav className="navbar">
        <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_1">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/aktualnosci', aboutProps: { name: true } }} >aktualnosci</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/cennik', aboutProps: { name: true } }} >cennik</NavLink>
          <div className="boxButton" >trzy</div>
        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={stacjaNarciarska} type="video/mp4" />
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/karnet', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', aboutProps: { name: true } }} >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>

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

    </motion.div>
  );
}

function ZjazdTyrolski() {
  return (
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

function KameryOnline(props) {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/dolnaStacja', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasa', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/bocznaStacja', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={kameryOnline} type="video/mp4" />
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
    </motion.div>
  )
}

function KameryOnline_dolnaStacja(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasa', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/bocznaStacja', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
          <source src={kameryOnline} type="video/mp4" />
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

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
    </motion.div>
  )
}

function KameryOnline_trasa(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/dolnaStacja', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/bocznaStacja', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
      <div className="menu-1_3-column-1_2">
        <iframe src="https://player.bieszczady.live/kamera/gromadzyn-glowna-trasa.html" webkitallowfullscreen="true"
          mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}

function KameryOnline_bocznaStacja(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/dolnaStacja', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasa', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
      <div className="menu-1_3-column-1_3">
        <iframe src="https://player.bieszczady.live/kamera/gromadzyn-sredni-wyciag.html"
          webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} frameBorder="0"
          width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}

function KameryOnline_malaStacja(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/dolnaStacja', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasa', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/bocznaStacja', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
      <div className="menu-1_3-column-2_1">
        <iframe src="https://player.bieszczady.live/kamera/gromadzyn-maly-wyciag.html" webkitallowfullscreen="true"
          mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}

function KameryOnline_trasaSaneczkowa(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/dolnaStacja', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasa', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/bocznaStacja', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
      <div className="menu-1_3-column-2_2">
        <iframe src="https://player.bieszczady.live/kamera/gromadzyn-dolna-stacja.html" webkitallowfullscreen="true"
          mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}

function KameryOnline_parking(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline" || props.location.aboutProps ? fast : transition}className="menu-container-1_3">
      <nav className="navbar">
      <NavLink onClick={() => props.location.aboutProps = false} className="return" to="/">POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-1_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/dolnaStacja', aboutProps: { name: true } }} >dolna stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasa', aboutProps: { name: true } }} >trasa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/bocznaStacja', aboutProps: { name: true } }} >boczna stacja</NavLink>

        </div>

        <video autoPlay muted loop className="video-1_1">
        </video>

        <div className="buttons_right">
        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

        <NavLink className="boxButton" to={{ pathname: '/KameryOnline', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">TEST</div>
      </footer>
      <div className="menu-1_3-column-2_3">
        <iframe src="https://player.bieszczady.live/kamera/muczne-trasy-biegowe.html" webkitallowfullscreen="true"
          mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}


function GastronomiaHotele() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={transition} className="menu-container-2_1">
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

function LetnieAtrakcje() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={transition} className="menu-container-2_2">
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

function PotrzebneInformacje() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={transition} className="menu-container-2_3">
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
