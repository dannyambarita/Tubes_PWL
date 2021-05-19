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
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "konten")
      .then(res => {
        const keterangan = res.data;
        this.setState({ keterangan });
      })
      .catch(error => {
        console.log("error lul", error);
      })
  }

  render() {
    const { keterangan } = this.state;
    console.log(this.state.keterangan);
    return (
      <div className='App'>
        <navbar><NavbarComponents /></navbar>
        <header>
          <GiHamburgerMenu onClick={() => this.setState({ showNav: !this.state.showNav })} />
        </header>
        <Sidebar show={this.state.showNav} />
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
