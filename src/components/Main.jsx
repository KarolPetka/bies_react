import React, { Component } from 'react'
import '../App.css';


export default class Main extends Component {
    render() {
              return (
            <div className="mainContainer">


            <div className="logo"></div>


            <div className="left">
              <div className="button" >
                <div className="frame">
                  <div className="text" onClick={() => this.props.getSn()}>stacja narciarska</div>
                </div>
              </div>
              <div className="button" >
                <div className="frame">
                  <div className="text" onClick={() => this.props.getZt()}>zjazd tyrolski</div>
                </div>
              </div>
              <div className="button">
                <div className="frame">
                  <div className="text" onClick={() => this.props.getKo()}>kamery online</div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="button" >
                <div className="frame">
                  <div className="text" onClick={() => this.props.getGh()}>gastronomia noclegi</div>
                </div>
              </div>
              <div className="button" >
                <div className="frame">
                  <div className="text" onClick={() => this.props.getLa()}>letnie atrakcje</div>
                </div>
              </div>
              <div className="button" >
                <div className="frame">
                  <div className="text" onClick={() => this.props.getPi()}>potrzebne informacje</div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
