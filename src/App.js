import React, {useState, useEffect } from 'react'

import './App.css';

import { Switch, Route, BrowserRouter as Router, NavLink, useLocation } from 'react-router-dom';

import { Redirect } from 'react-router'

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import InstagramEmbed from 'react-instagram-embed';

import { AnimatePresence, motion } from "framer-motion"

import axios from 'axios';

import AuthService from "./services/auth.service";

import authHeader from "./services/auth-header";

function App() {
  const [image, setImage] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  const location = useLocation();

  if (image.length === 0) {
    return (
      <>
        <div className="App" style={{backgroundColor: "rgb(22, 99, 200)"}} >

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Main} />
              <Route path="/StacjaNarciarska" exact component={StacjaNarciarska} />
              <Route path="/StacjaNarciarska/aktualnosci" exact component={StacjaNarciarska_Aktualnosci} />
              <Route path="/StacjaNarciarska/cennik" exact component={StacjaNarciarska_Cennik} />
              <Route path="/StacjaNarciarska/karnet" exact component={StacjaNarciarska_KupKarnet} />
              <Route path="/StacjaNarciarska/galeria" exact component={StacjaNarciarska_Galeria} />

              <Route path="/KameryOnline" exact component={KameryOnline} />
              <Route path="/KameryOnline/dolnaStacja" exact component={KameryOnline_dolnaStacja} />
              <Route path="/KameryOnline/trasa" exact component={KameryOnline_trasa} />
              <Route path="/KameryOnline/bocznaStacja" exact component={KameryOnline_bocznaStacja} />
              <Route path="/KameryOnline/malaStacja" exact component={KameryOnline_malaStacja} />
              <Route path="/KameryOnline/trasaSaneczkowa" exact component={KameryOnline_trasaSaneczkowa} />
              <Route path="/KameryOnline/parking" exact component={KameryOnline_parking} />

              <Route path="/PotrzebneInformacje" exact component={PotrzebneInformacje} />
              <Route path="/PotrzebneInformacje/mapa" exact component={PotrzebneInformacje_Mapa} />

              <Route path="/GastronomiaNoclegi" component={GastronomiaNoclegi} />
              <Route path="/LetnieAtrakcje" component={LetnieAtrakcje} />

              <Route path="/ZjazdTyrolski" component={ZjazdTyrolski} />

              <Route path="/logowanie" exact component={LogIn} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/admin/StacjaNarciarska" exact component={Admin_StacjaNarciarska} />
              <Route path="/admin/StacjaNarciarska/aktualnosci" exact component={Admin_StacjaNarciarska_Aktualnosci} />
              <Route path="/admin/StacjaNarciarska/cennik" exact component={Admin_StacjaNarciarska_Cennik} />
              <Route path="/admin/StacjaNarciarska/galeria" exact component={Admin_StacjaNarciarska_Galeria} />

              <Route path="/admin/PotrzebneInformacje" exact component={Admin_PotrzebneInformacje} />
              <Route path="/admin/PotrzebneInformacje/1_1" exact component={Admin_PotrzebneInformacje_1_1} />
              <Route path="/admin/PotrzebneInformacje/1_2" exact component={Admin_PotrzebneInformacje_1_2} />
              <Route path="/admin/PotrzebneInformacje/1_3" exact component={Admin_PotrzebneInformacje_1_3} />
              <Route path="/admin/PotrzebneInformacje/2_1" exact component={Admin_PotrzebneInformacje_2_1} />
              <Route path="/admin/PotrzebneInformacje/2_2" exact component={Admin_PotrzebneInformacje_2_2} />
              <Route path="/admin/PotrzebneInformacje/mapa" exact component={Admin_PotrzebneInformacje_Mapa} />

              <Route path="/admin/ZjazdTyrolski" exact component={Admin_ZjazdTyrolski} />
              <Route path="/admin/KameryOnline" exact component={Admin_KameryOnline} />
              <Route path="/admin/GastronomiaNoclegi" exact component={Admin_GastronomiaNoclegi} />
              <Route path="/admin/LetnieAtrakcje" exact component={Admin_LetnieAtrakcje} />

              <Redirect to="/" />
            </Switch>
          </AnimatePresence>
        </div>
      </>
    )
  }

  return (
    <>
      {image.map(image => (
        <div className="App" key={image.id} style={{
          background: 'url(' + image.postURL + ')', backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} >

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Main} />
              <Route path="/StacjaNarciarska" exact component={StacjaNarciarska} />
              <Route path="/StacjaNarciarska/aktualnosci" exact component={StacjaNarciarska_Aktualnosci} />
              <Route path="/StacjaNarciarska/cennik" exact component={StacjaNarciarska_Cennik} />
              <Route path="/StacjaNarciarska/karnet" exact component={StacjaNarciarska_KupKarnet} />
              <Route path="/StacjaNarciarska/galeria" exact component={StacjaNarciarska_Galeria} />

              <Route path="/KameryOnline" exact component={KameryOnline} />
              <Route path="/KameryOnline/dolnaStacja" exact component={KameryOnline_dolnaStacja} />
              <Route path="/KameryOnline/trasa" exact component={KameryOnline_trasa} />
              <Route path="/KameryOnline/bocznaStacja" exact component={KameryOnline_bocznaStacja} />
              <Route path="/KameryOnline/malaStacja" exact component={KameryOnline_malaStacja} />
              <Route path="/KameryOnline/trasaSaneczkowa" exact component={KameryOnline_trasaSaneczkowa} />
              <Route path="/KameryOnline/parking" exact component={KameryOnline_parking} />

              <Route path="/PotrzebneInformacje" exact component={PotrzebneInformacje} />
              <Route path="/PotrzebneInformacje/mapa" exact component={PotrzebneInformacje_Mapa} />

              <Route path="/GastronomiaNoclegi" component={GastronomiaNoclegi} />
              <Route path="/LetnieAtrakcje" component={LetnieAtrakcje} />

              <Route path="/ZjazdTyrolski" component={ZjazdTyrolski} />

              <Route path="/logowanie" exact component={LogIn} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/admin/StacjaNarciarska" exact component={Admin_StacjaNarciarska} />
              <Route path="/admin/StacjaNarciarska/aktualnosci" exact component={Admin_StacjaNarciarska_Aktualnosci} />
              <Route path="/admin/StacjaNarciarska/cennik" exact component={Admin_StacjaNarciarska_Cennik} />
              <Route path="/admin/StacjaNarciarska/galeria" exact component={Admin_StacjaNarciarska_Galeria} />

              <Route path="/admin/PotrzebneInformacje" exact component={Admin_PotrzebneInformacje} />
              <Route path="/admin/PotrzebneInformacje/1_1" exact component={Admin_PotrzebneInformacje_1_1} />
              <Route path="/admin/PotrzebneInformacje/1_2" exact component={Admin_PotrzebneInformacje_1_2} />
              <Route path="/admin/PotrzebneInformacje/1_3" exact component={Admin_PotrzebneInformacje_1_3} />
              <Route path="/admin/PotrzebneInformacje/2_1" exact component={Admin_PotrzebneInformacje_2_1} />
              <Route path="/admin/PotrzebneInformacje/2_2" exact component={Admin_PotrzebneInformacje_2_2} />
              <Route path="/admin/PotrzebneInformacje/mapa" exact component={Admin_PotrzebneInformacje_Mapa} />

              <Route path="/admin/ZjazdTyrolski" exact component={Admin_ZjazdTyrolski} />
              <Route path="/admin/KameryOnline" exact component={Admin_KameryOnline} />
              <Route path="/admin/GastronomiaNoclegi" exact component={Admin_GastronomiaNoclegi} />
              <Route path="/admin/LetnieAtrakcje" exact component={Admin_LetnieAtrakcje} />

              <Redirect to="/" />
            </Switch>
          </AnimatePresence>
        </div>
      ))}
    </>
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
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska">
          <div className="text-admin-table" >stacja narciarska</div>
        </NavLink>
        <NavLink className="button-admin-table" to="admin/ZjazdTyrolski">
          <div className="text-admin-table" >zjazd tyrolski</div>
        </NavLink>
        <NavLink className="button-admin-table" to="admin/KameryOnline">
          <div className="text-admin-table">kamery online</div>
        </NavLink>
      </div>

      {image.map(image => (
        <div className="video-container" key={image.id}>
          <img className="video-container" style={{ cursor: "default" }} src={image.postURL} />
        </div>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addImg(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz zdjęcie do zamiany</button>


      <div className="right-admin-table">
        <NavLink className="button-admin-table" to="admin/GastronomiaNoclegi">
          <div className="text-admin-table">gastronomia noclegi</div>
        </NavLink>
        <NavLink className="button-admin-table" to="admin/LetnieAtrakcje">
          <div className="text-admin-table">letnie atrakcje</div>
        </NavLink>
        <NavLink className="button-admin-table" to="admin/PotrzebneInformacje">
          <div className="text-admin-table">potrzebne informacje</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_StacjaNarciarska() {
  const [video, setVideo] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/StacjaNarciarska')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addVid(vid) {
    const video = new FormData();
    video.append('file', vid.target.files[0]);

    axios.post(`http://localhost:8080/api/StacjaNarciarska/upload`, video, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      {video.map(video => (
        <video key={video.id} autoPlay muted loop className="video-container">
          <source src={video.postURL} type="video/mp4" />
        </video>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addVid(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_StacjaNarciarska_Aktualnosci() {

  const [posts, setPosts] = useState([])
  const [postURL, setPostURL] = useState('');


  useEffect(() => {
    axios
      .get('http://localhost:8080/api/StacjaNarciarska/aktualnosci')
      .then(res => {
        setPosts(res.data)
      })
  }, [])

  function onLinkSubmit() {
    axios.post(`http://localhost:8080/api/StacjaNarciarska/aktualnosci/upload`, null, { params: { postURL } })
  }


  function deletePost(postId) {
    axios.delete(`http://localhost:8080/api/StacjaNarciarska/aktualnosci/${postId}`, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 400
    )
  }

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

      <form className="post-form" onSubmit={onLinkSubmit}>
        <input className="post-link" type="text" placeholder="Link" value={postURL} onChange={(e) => setPostURL(e.target.value)} required />
        <button className="post-button" type="submit">Dodaj post</button>
      </form>

      <div className="admin-post">


        <div style={{ display: 'none' }}>
          <InstagramEmbed
            url='https://www.instagram.com/p/CMkcC37jqi9/'
            clientAccessToken='463358671379783|391fc3daeda5feda73444e63d86de4e3'
            containerTagName='div'
          />
        </div>

        {posts.map(post => (
          <>
            <iframe key={post.id} src={post.postURL} style={{ width: '60vw' }} frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
            <button className="delete-post" onClick={() => deletePost(post.id)}>Usuń Post</button>
          </>
        ))}

      </div>

      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/oNas">
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
    axios.post(`http://localhost:8080/api/stacjaNarciarska/cennik`, postPrice, { headers: authHeader() });
  }

  function onPriceDelete(type) {
    axios.delete(`http://localhost:8080/api/stacjaNarciarska/cennik/${type}`, { headers: authHeader() });
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska">
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

      <form className="price-form-delete" onSubmit={() => onPriceDelete(deleteType)}>
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
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_StacjaNarciarska_Galeria() {

  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/StacjaNarciarska/galeria')
      .then(res => {
        setImages(res.data)
      })
  }, [])

  function addImg(img) {
    const files = [...img.target.files];
    const images = new FormData();
    files.forEach(f => images.append('file', f));

    axios.post(`http://localhost:8080/api/StacjaNarciarska/galeria/upload`, images, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 400
    )
  }

  function deleteImg(imgId) {
    axios.delete(`http://localhost:8080/api/StacjaNarciarska/galeria/${imgId}`, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 400
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      <form className="img-input-container" encType="multipart/form-data">
        <input id="fileInput" type="file" multiple hidden="hidden" onChange={(e) => addImg(e)} />
        <button className="image-select" type="button" onClick={() => document.getElementById("fileInput").click()}>Wybierz zdjecie/zdjęcia do dodania</button>
      </form>

      <div className="admin-gallery">
        {images.map(image => (
          <div className="image-container" key={image.id}>
            <img className="image" style={{ cursor: "default" }} src={image.postURL} />
            <button className="delete-image" onClick={() => deleteImg(image.id)}>Usuń zdjęcie</button>
          </div>
        ))}
      </div>

      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/oNas">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_GastronomiaNoclegi() {
  const [video, setVideo] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/GastronomiaNoclegi')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addVid(vid) {
    const video = new FormData();
    video.append('file', vid.target.files[0]);

    axios.post(`http://localhost:8080/api/GastronomiaNoclegi/upload`, video, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>

      {video.map(video => (
        <video key={video.id} autoPlay muted loop className="video-container">
          <source src={video.postURL} type="video/mp4" />
        </video>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addVid(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table">null</div>
        </div>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_LetnieAtrakcje() {
  const [video, setVideo] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/LetnieAtrakcje')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addVid(vid) {
    const video = new FormData();
    video.append('file', vid.target.files[0]);

    axios.post(`http://localhost:8080/api/LetnieAtrakcje/upload`, video, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>

      {video.map(video => (
        <video key={video.id} autoPlay muted loop className="video-container">
          <source src={video.postURL} type="video/mp4" />
        </video>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addVid(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table">null</div>
        </div>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_ZjazdTyrolski() {
  const [video, setVideo] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/ZjazdTyrolski')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addVid(vid) {
    const video = new FormData();
    video.append('file', vid.target.files[0]);

    axios.post(`http://localhost:8080/api/ZjazdTyrolski/upload`, video, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>

      {video.map(video => (
        <video key={video.id} autoPlay muted loop className="video-container">
          <source src={video.postURL} type="video/mp4" />
        </video>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addVid(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table">null</div>
        </div>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje() {
  const [video, setVideo] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/PotrzebneInformacje')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addVid(vid) {
    const video = new FormData();
    video.append('file', vid.target.files[0]);

    axios.post(`http://localhost:8080/api/PotrzebneInformacje/upload`, video, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>

      {video.map(video => (
        <video key={video.id} autoPlay muted loop className="video-container">
          <source src={video.postURL} type="video/mp4" />
        </video>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addVid(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table">null</div>
        </div>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje_1_1() {
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      {image.map(image => (
        <div className="video-container" key={image.id}>
          <img className="video-container" style={{ cursor: "default" }} src={image.postURL} />
        </div>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addImg(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje_1_2() {
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      {image.map(image => (
        <div className="video-container" key={image.id}>
          <img className="video-container" style={{ cursor: "default" }} src={image.postURL} />
        </div>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addImg(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje_1_3() {
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      {image.map(image => (
        <div className="video-container" key={image.id}>
          <img className="video-container" style={{ cursor: "default" }} src={image.postURL} />
        </div>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addImg(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje_2_1() {
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      {image.map(image => (
        <div className="video-container" key={image.id}>
          <img className="video-container" style={{ cursor: "default" }} src={image.postURL} />
        </div>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addImg(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje_2_2() {
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      {image.map(image => (
        <div className="video-container" key={image.id}>
          <img className="video-container" style={{ cursor: "default" }} src={image.postURL} />
        </div>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addImg(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}

function Admin_PotrzebneInformacje_Mapa() {
  const [image, setImage] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addImg(img) {
    const image = new FormData();
    image.append('file', img.target.files[0]);

    axios.post(`http://localhost:8080/api/Menu/upload`, image, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/aktualnosci">
          <div className="text-admin-table" >aktualnosci</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/cennik">
          <div className="text-admin-table" >cennik</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/KameryOnline">
          <div className="text-admin-table">trzy</div>
        </NavLink>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.8546163319365!2d22.471748493151775!3d49.50710061292531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b8af587e86d1b%3A0x809ef137505936b8!2sWa%C5%84kowa%2027%2C%2038-711%20Wa%C5%84kowa!5e1!3m2!1spl!2spl!4v1627567880110!5m2!1spl!2spl" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>


      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table"></div>
        </div>
        <NavLink className="button-admin-table" to="/admin/StacjaNarciarska/galeria">
          <div className="text-admin-table">galeria</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/PotrzebneInformacje">
          <div className="text-admin-table">o nas</div>
        </NavLink>
      </div>
    </div>
  );
}



function Admin_KameryOnline() {
  const [video, setVideo] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/security/test/admin', { headers: authHeader() })
      .then(res => {
        setResponse(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/KameryOnline')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  if (response.length === 0) {
    return <div></div>
  }

  function addVid(vid) {
    const video = new FormData();
    video.append('file', vid.target.files[0]);

    axios.post(`http://localhost:8080/api/KameryOnline/upload`, video, { headers: authHeader() });
    setTimeout(
      () => { window.location.reload(); }, 800
    )
  }

  return (
    <div className="admin">
      <div className="left-admin-table">
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table" >null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
      </div>

      {video.map(video => (
        <video key={video.id} autoPlay muted loop className="video-container">
          <source src={video.postURL} type="video/mp4" />
        </video>
      ))}

      <input id="videoInput" type="file" hidden="hidden" onChange={(e) => addVid(e)} />
      <button className="upload-video" onClick={() => document.getElementById("videoInput").click()}>Wybierz film do zamiany</button>



      <div className="right-admin-table">
        <div className="button-admin-table">
          <div className="text-admin-table">null</div>
        </div>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
        </NavLink>
        <NavLink className="button-admin-table" to="/">
          <div className="text-admin-table">null</div>
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

  const logIn = (props) => {
    console.log("name: " + name + " password: " + password);
    AuthService.login(name, password).then(
      () => {
        window.location.href = '/admin';
      });
  };

  return (
    <div className="main">
      <form className="form" >
        <div className="container">
          <div className="input_block">

            <input className="input" placeholder="Nazwa" value={name} onChange={onChangeName} type="text" required></input>

            <input className="input" placeholder="Hasło" value={password} onChange={onChangePassword} type="password" required></input>

            <button className="submit" type="button" onClick={logIn}>Zaloguj się</button>
          </div>
        </div>
      </form>
    </div>
  )
}

function Main() {
  const [image, setImage] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])


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
        <NavLink className="button" to="/GastronomiaNoclegi">
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
  const [video, setVideo] = useState([])
  const [image, setImage] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/Menu')
      .then(res => {
        setImage(res.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/StacjaNarciarska')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  // if (video.length === 0){
  //   return <div>Loading...</div>
  // }

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

        <div style={{ backgroundColor: "rgb(255, 255, 255)", height: "85vh" }}>
          {video.map(video => (
            <video key={video.id} autoPlay muted loop className="video-1_1">
              <source src={video.postURL} type="video/mp4" />
            </video>
          ))}
        </div>
        <div className="buttons_right">
          <NavLink className="boxButton" to='/StacjaNarciarska/karnet' >kup karnet</NavLink>
          <NavLink className="boxButton" to='/StacjaNarciarska/galeria' >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>

      <div className="menu-1_1-column-1_3"></div>

      <div className="menu-1_1-column-2_3"></div>
    </motion.div>
  );
}



function StacjaNarciarska_Aktualnosci(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/StacjaNarciarska/aktualnosci')
      .then(res => {
        setPosts(res.data)
      })
  }, []);

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
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/karnet', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/galeria', aboutProps: { name: true } }} >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
      <div className="menu-1_1-column-1_1">

        <div style={{ display: 'none' }}>
          <InstagramEmbed
            url='https://www.instagram.com/p/CMkcC37jqi9/'
            clientAccessToken='463358671379783|391fc3daeda5feda73444e63d86de4e3'
            containerTagName='div'
          />
        </div>

        {posts.map(post => (
          <iframe key={post.id} src={post.postURL} style={{ width: '60vw' }} frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
        ))}

        {/* <iframe src="https://www.instagram.com/p/CLmEPRKj2no/embed/captioned" style={{ width: '60vw' }} frameBorder="0" scrolling="no" allowtransparency="true"></iframe>

        <iframe src="https://www.instagram.com/p/CMPZWfJD8sZ/embed/captioned" style={{ width: '100%' }} frameBorder="0" scrolling="no" allowtransparency="true"></iframe>

        <iframe src="https://www.instagram.com/p/CLmEPRKj2no/embed/captioned" style={{ width: '100%' }} frameBorder="0" scrolling="no" allowtransparency="true"></iframe>

        <iframe src="https://www.instagram.com/p/CMPZWfJD8sZ/embed/captioned" style={{ width: '100%' }} frameBorder="0" scrolling="no" allowtransparency="true"></iframe> */}

      </div>
    </motion.div >

  )
}

function StacjaNarciarska_Cennik(props) {

  const [prices, setPrices] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/stacjaNarciarska/cennik', { headers: authHeader() })
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
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/karnet', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/galeria', aboutProps: { name: true } }} >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
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
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/galeria', aboutProps: { name: true } }} >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
      <div className="menu-1_1-column-2_1">
        <iframe src="https://maleciche.e-skipass.pl/" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  );
}

function StacjaNarciarska_Galeria(props) {

  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/StacjaNarciarska/galeria')
      .then(res => {
        setImages(res.data)
      })
  }, [])


  const options = {
    settings: {
      disablePanzoom: true,
      slideTransitionSpeed: 0.1,
      disableWheelControls: true,
    },
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
        </video>

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska/karnet', aboutProps: { name: true } }} >kup karnet</NavLink>
          <NavLink className="boxButton" to={{ pathname: '/StacjaNarciarska', aboutProps: { name: true } }} >galeria</NavLink>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>


      <div className="menu-1_1-column-2_2">

        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <div className="gallery">
              {images.map(image => (
                <div className="image-container" key={image.id}>
                  <img className="image" style={{ cursor: "pointer" }} src={image.postURL} />
                </div>
              ))}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>

      </div>

    </motion.div>
  );
}

function ZjazdTyrolski() {
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/ZjazdTyrolski')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

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

        {video.map(video => (
          <video key={video.id} autoPlay muted loop className="video-1_1">
            <source src={video.postURL} type="video/mp4" />
          </video>
        ))}

        <div className="buttons_right">
          <div className="boxButton" >cztery</div>
          <div className="boxButton" >galeria</div>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
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
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/KameryOnline')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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

        {video.map(video => (
          <video key={video.id} autoPlay muted loop className="video-1_1">
            <source src={video.postURL} type="video/mp4" />
          </video>
        ))}

        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
    </motion.div>
  )
}

function KameryOnline_dolnaStacja(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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


        <div className="buttons_right">
          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/malaStacja', aboutProps: { name: true } }} >mala stacja</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/trasaSaneczkowa', aboutProps: { name: true } }} >trasa saneczkowa</NavLink>

          <NavLink className="boxButton" to={{ pathname: '/KameryOnline/parking', aboutProps: { name: true } }} >parking</NavLink>

        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
      <div className="menu-1_3-column-1_1">
        <iframe src="https://player.bieszczady.live/kamera/wankowa-budowa-bieszczad-ski.html"
          webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} frameBorder="0"
          width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}

function KameryOnline_trasa(props) {
  return (
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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
        <div className="footer_text">Desigend and Developed by:</div>
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
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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
        <div className="footer_text">Desigend and Developed by:</div>
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
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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
        <div className="footer_text">Desigend and Developed by:</div>
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
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline/parking" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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
        <div className="footer_text">Desigend and Developed by:</div>
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
    <motion.div animate="in" exit="out" variants={scaling} transition={window.location.pathname === "/KameryOnline/dolnaStacja" || window.location.pathname === "/KameryOnline/trasa" || window.location.pathname === "/KameryOnline/malaStacja" || window.location.pathname === "/KameryOnline/trasaSaneczkowa" || window.location.pathname === "/KameryOnline/bocznaStacja" || window.location.pathname === "/KameryOnline" || props.location.aboutProps ? fast : transition} className="menu-container-1_3">
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
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
      <div className="menu-1_3-column-2_3">
        <iframe src="https://player.bieszczady.live/kamera/muczne-trasy-biegowe.html" webkitallowfullscreen="true"
          mozallowfullscreen="true" allowFullScreen={true} frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </motion.div>
  )
}


function GastronomiaNoclegi() {
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/GastronomiaNoclegi')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

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

        {video.map(video => (
          <video key={video.id} autoPlay muted loop className="video-1_1">
            <source src={video.postURL} type="video/mp4" />
          </video>
        ))}

        <div className="buttons_right">
          <div className="boxButton" >cztery</div>
          <div className="boxButton" >galeria</div>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
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
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/LetnieAtrakcje')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

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

        {video.map(video => (
          <video key={video.id} autoPlay muted loop className="video-1_1">
            <source src={video.postURL} type="video/mp4" />
          </video>
        ))}

        <div className="buttons_right">
          <div className="boxButton" >cztery</div>
          <div className="boxButton" >galeria</div>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
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
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/PotrzebneInformacje')
      .then(res => {
        setVideo(res.data)
      })
  }, [])

  return (
    <motion.div initial="out" animate="in" exit="out" variants={scaling} transition={transition} className="menu-container-2_3">
      <nav className="navbar">
        <NavLink className="return" to="/" >POWRÓT</NavLink>
        <div className="navLogo"></div>
      </nav>
      <div className="menu-grid-2_3">
        <div className="buttons_left">
          <NavLink className="boxButton" to={{ pathname: '/PotrzebneInformacje/mapa', aboutProps: { name: true } }} >mapa</NavLink>
          <div className="boxButton" >cennik</div>
          <div className="boxButton" >trzy</div>
        </div>

        {video.map(video => (
          <video key={video.id} autoPlay muted loop className="video-1_1">
            <source src={video.postURL} type="video/mp4" />
          </video>
        ))}

        <div className="buttons_right">
          <div className="boxButton" >cztery</div>
          <div className="boxButton" >galeria</div>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
    </motion.div>
  )
}

function PotrzebneInformacje_Mapa() {
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

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.8546163319365!2d22.471748493151775!3d49.50710061292531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b8af587e86d1b%3A0x809ef137505936b8!2sWa%C5%84kowa%2027%2C%2038-711%20Wa%C5%84kowa!5e1!3m2!1spl!2spl!4v1627567880110!5m2!1spl!2spl" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>

        <div className="buttons_right">
          <div className="boxButton" >cztery</div>
          <div className="boxButton" >galeria</div>
          <div className="boxButton" >o nas</div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">Desigend and Developed by:</div>
      </footer>
    </motion.div>
  )
}

export default App;
