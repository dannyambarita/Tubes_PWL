import './App.css'; 
import { Row, Col } from 'react-bootstrap';
import { Konten, NavbarComponents, Sidebar, Keterangan} from './components'
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { Component } from 'react'
import { API_URL } from './utils/constant';
import axios from 'axios';
import ListGame from './components/ListGame';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false,
      keterangan: [],
      pilihgame: [],
      detail: []
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "artikel")
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

  detail = (value) => {
    this.setState({
      pilihdetail: value,
      detail: []
    })

    axios
      .get(API_URL + "artikel?game.nama=" + value)
      .then(res => {
        const detail = res.data;
        this.setState({ detail });
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
        <header style={{ cursor: 'pointer' }}>
          <GiHamburgerMenu onClick={() => this.setState({ showNav: !this.state.showNav })} />
        </header>
        <Sidebar show={this.state.showNav} changegame={this.changegame} pilihgame={pilihgame} />
        <div className="mt-3">
          <div className="list-art">
            <Row>
              <Konten />
              <Col xs={5} />
              <ListGame />
            </Row>
          </div>
          <div className="list-det">
            {keterangan && keterangan.map((keterangan) => (
              <div >
                <Keterangan
                  key={keterangan.id}
                  keterangan={keterangan}
                  detail={this.detail}
                />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
