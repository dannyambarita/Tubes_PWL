import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { API_URL } from '../utils/constant';

class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            det: []
        };
    }

    componentDidMount() {
        axios
            .get(API_URL + "artikel")
            .then(res => {
                const detaildesk = res.data;
                this.setState({ detaildesk });
            })
            .catch(error => {
                console.log("error lul", error);
            })
    }

    render() {
        console.log("det : ", this.state.detaildesk)
        const { detaildesk } = this.props
        const { det } = this.state
        return (
            <div className="card">
                <Col xs={1} className="mb-1">
                    <Card style={{ width: '15rem' }} className="shadow" >
                        <Card.Img variant="top" src={"assets/images/" + detaildesk.game.nama.toLowerCase() + "/" + detaildesk.gambar} />
                        <Card.Body>
                            <Card.Title>{detaildesk.nama}</Card.Title>
                            <Card.Text>
                                {detaildesk.desk}
                            </Card.Text>
                            <Button variant="primary" onClick>Baca lebih lanjut</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}
export default Detail
