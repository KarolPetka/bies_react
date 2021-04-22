import React, { Component } from 'react'
import '../App.css';
import '../script.js';

import stacjaNarciarska from '../assets/video/stacjaNarciarska.mp4'
import galeria1 from '../assets/lightbox/images/galeria1.jpg'
import galeria2 from '../assets/lightbox/images/galeria2.png'
import galeria3 from '../assets/lightbox/images/galeria3.jpg'
import galeria4 from '../assets/lightbox/images/galeria4.jpg'

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import { FacebookProvider, EmbeddedPost } from 'react-facebook';

import InstagramEmbed from 'react-instagram-embed';
import { handleBox1_1Click } from '../script';

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

class StacjaNarciarska extends Component {

    constructor(props) {
        super(props);
        this.left1 = React.createRef();
        this.left2 = React.createRef();
        this.left3 = React.createRef();
        this.right1 = React.createRef();
        this.right2 = React.createRef();
        this.right3 = React.createRef();
    
        this.getLeft1 = this.getLeft1.bind(this);
        this.getLeft2 = this.getLeft2.bind(this);
        this.getLeft3 = this.getLeft3.bind(this);
        this.getRight1 = this.getRight1.bind(this);
        this.getRight2 = this.getRight2.bind(this);
        this.getRight3 = this.getRight3.bind(this);

      }

      getLeft1(){
          if(this.left1.current.style.display === "grid"){
            this.left1.current.style.display = "none"
        } else {
        this.left1.current.style.display = "grid"
        this.left2.current.style.display = "none"
        this.left3.current.style.display = "none"
        this.right1.current.style.display = "none"
        this.right2.current.style.display = "none"
        this.right3.current.style.display = "none"
          }
      };

      getLeft2(){
        if(this.left2.current.style.display === "grid"){
            this.left2.current.style.display = "none"
        } else {
        this.left1.current.style.display = "none"
        this.left2.current.style.display = "grid"
        this.left3.current.style.display = "none"
        this.right1.current.style.display = "none"
        this.right2.current.style.display = "none"
        this.right3.current.style.display = "none"
        }
      };

      getLeft3(){
        if(this.left3.current.style.display === "grid"){
            this.left3.current.style.display = "none"
        } else {
        this.left1.current.style.display = "none"
        this.left2.current.style.display = "none"
        this.left3.current.style.display = "grid"
        this.right1.current.style.display = "none"
        this.right2.current.style.display = "none"
        this.right3.current.style.display = "none"
      }
    };

      getRight1(){
        if(this.right1.current.style.display === "grid"){
            this.right1.current.style.display = "none"
        } else {
        this.left1.current.style.display = "none"
        this.left2.current.style.display = "none"
        this.left3.current.style.display = "none"
        this.right1.current.style.display = "grid"
        this.right2.current.style.display = "none"
        this.right3.current.style.display = "none"
      }
    };

      getRight2(){
        if(this.right2.current.style.display === "grid"){
            this.right2.current.style.display = "none"
        } else {
        this.left1.current.style.display = "none"
        this.left2.current.style.display = "none"
        this.left3.current.style.display = "none"
        this.right1.current.style.display = "none"
        this.right2.current.style.display = "grid"
        this.right3.current.style.display = "none"
      }
    };

      getRight3(){
        if(this.right3.current.style.display === "grid"){
            this.right3.current.style.display = "none"
        } else {
        this.left1.current.style.display = "none"
        this.left2.current.style.display = "none"
        this.left3.current.style.display = "none"
        this.right1.current.style.display = "none"
        this.right2.current.style.display = "none"
        this.right3.current.style.display = "grid"
      }
    };

    render() {
        return (
            <div className="menu-container-1_1">
                <nav className="navbar">
                    <div className="return" onClick={() => this.props.getMenu()} >POWRÓT</div>
                    <div className="navLogo"></div>
                </nav>
                <div className="menu-grid-1_1">
                    <div className="buttons_left">
                        <div className="boxButton" onClick={this.getLeft1}>aktualnosci</div>
                        <div className="boxButton" onClick={this.getLeft2}>cennik</div>
                        <div className="boxButton" onClick={this.getLeft3}>trzy</div>
                    </div>

                    <video autoPlay muted loop className="video-1_1">
                        <source src={stacjaNarciarska} type="video/mp4" />
                    </video>

                    <div className="buttons_right">
                        <div className="boxButton" onClick={this.getRight1}>kup karnet</div>
                        <div className="boxButton" onClick={this.getRight2}>galeria</div>
                        <div className="boxButton" onClick={this.getRight3}>o nas</div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer_text">TEST</div>
                </footer>

                <div ref={this.left1} className="menu-1_1-column-1_1">

                    <InstagramEmbed
                        url='https://www.instagram.com/p/CLpPEA_LHn2/?igshid=slkpw4k96287'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />

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

                <div ref={this.left2} className="menu-1_1-column-1_2">

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

                <div ref={this.left3} className="menu-1_1-column-1_3"></div>

                <div ref={this.right1} className="menu-1_1-column-2_1">
                    <iframe src="https://maleciche.e-skipass.pl/" frameBorder="0" width="100%" height="100%"></iframe>
                </div>

                <div ref={this.right2} className="menu-1_1-column-2_2">

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
                <div ref={this.right3} className="menu-1_1-column-2_3"></div>
            </div>
        )
    }
}

export default StacjaNarciarska