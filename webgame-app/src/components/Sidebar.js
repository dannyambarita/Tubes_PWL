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
        const { game } = this.state
        const { changegame, pilihgame } = this.props
        const { show } = this.props;
        return (
            <div className={show ? 'sidenav active' : 'sidenav'}>
                <ul>
                    {game && game.map((game) => (
                        <li key={game.id} onClick={()=>changegame(game.nama)}
                        className={pilihgame === game.nama && "sidebar-fx"}
                        style={{cursor: 'pointer'}}>
                            <h5>
                            {game.nama}
                            </h5>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Sidebar;