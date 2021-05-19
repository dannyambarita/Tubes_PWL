import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constant';

    class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: []
        };
    }

    componentDidMount() {
        axios
            .get(API_URL + "game")
            .then(res => {
                const game = res.data;
                this.setState({ game });
            })
            .catch(error => {
                console.log("error lul", error);
            })
    }

    render() {
        return ({ show }) => {
            return (
                <div className={show ? 'sidenav active' : 'sidenav'}>
                    <ul>
                        <li>
                            <a href='#home'>Dota</a>
                        </li>
                        <li>
                            <a href='#home'>Counter Strike</a>
                        </li>
                        <li>
                            <a href='#home'>Valorant</a>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

export default Sidebar;