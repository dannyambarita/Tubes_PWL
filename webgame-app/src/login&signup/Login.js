import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi';
import { API_URL } from '../utils/constant';
import axios from 'axios';
import { NavbarComponents, Sidebar } from '../components'
import swal from 'sweetalert';


export default class Login extends Component {
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

      handleSubmit = e => {
        e.preventDefault();
        const data = {
          username: this.username,
          password: this.password,
        };
          console.log(data);
        axios
        .post(API_URL + "login", data)
        .then(res => {
          swal({
            tittle: "sukses",
            text: "sukses",
            icon: "success",
            button: false,
            //localStorage.setItem('token', res.token)
          });
        })
        .catch(error => {
          console.log(error);
        }
      )
      };

    render() {
        const { pilihgame } = this.state;
        return (
            <div className="login">
                <navbar><NavbarComponents /></navbar>
        <header style={{ cursor: 'pointer' }}>
          <GiHamburgerMenu onClick={() => this.setState({ showNav: !this.state.showNav })} />
        </header>
        <Sidebar show={this.state.showNav} changegame={this.changegame} pilihgame={pilihgame} />
        <Container>
            <div className="login-page">
                <form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                    <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username anda" class="form-control"  onChange={e=> this.username = e.target.value}/>
                        <div class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" name="password" class="form-label" onChange={e=> this.username = e.target.value}>Password</label>
                        <input type="password" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Login</button>
                </form>
                </div>
                </Container>
            </div>
        );
    }
}