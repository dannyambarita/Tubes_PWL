import './App.css';
import { Row, Col } from 'react-bootstrap';
import { Konten, NavbarComponents, Sidebar, Keterangan } from './components'
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { Component } from 'react'
import { API_URL } from './utils/constant';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false,
      keterangan: [],
      pilihgame : 'Valorant'
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "artikel?game.nama=" + this.state.pilihgame)
      .then(res => {
        const keterangan = res.data;
        this.setState({ keterangan });
      })
      .catch(error => {
        console.log("error lul", error);
      })
  }

  changegame = (value) => {
    this.setState({
      pilihgame: value,
      keterangan: []
    })

    axios
      .get(API_URL + "artikel?game.nama=" + value)
      .then(res => {
        const keterangan = res.data;
        this.setState({ keterangan });
      })
      .catch(error => {
        console.log("error lul", error);
      })

  }

  render() {
    const { keterangan, pilihgame } = this.state;
    return (
      <div className='App'>
        <navbar><NavbarComponents /></navbar>
        <header>
          <GiHamburgerMenu onClick={() => this.setState({ showNav: !this.state.showNav })} />
        </header>
        <Sidebar show={this.state.showNav} changegame={this.changegame} pilihgame={pilihgame} />
        <div className="mt-3">
          <Konten show={this.state.showNav} />
            {keterangan && keterangan.map((keterangan) => (
              <div className="list">
                <Keterangan 
                  key={keterangan.id}
                  keterangan={keterangan}
                />
                <br />
              </div>
            ))}
        </div>
      </div>
    )
  }
}
