import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { API_URL } from '../utils/constant';

class Keterangan extends Component {
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
                const det = res.data;
                this.setState({ det });
            })
            .catch(error => {
                console.log("error lul", error);
            })
    }

    render() {
        console.log("det : ", this.state.det)
        const { keterangan, detaildesk, pilihdetail } = this.props
        const { det } = this.state
        return (
            <div className="card">
                <Col xs={1} className="mb-1">
                    <Card style={{ width: '15rem' }} className="shadow" >
                        <Card.Img variant="top" src={"assets/images/" + keterangan.game.nama.toLowerCase() + "/" + keterangan.gambar} />
                        <Card.Body>
                            <Card.Title>{keterangan.nama}</Card.Title>
                            <Card.Text>
                                {keterangan.desk}
                            </Card.Text>
                            {det && det.map((det) => (
                            <Button variant="primary" key={det.id} onPress={()=>detaildesk(det.nama)} className={pilihdetail === det.nama}>
                                Baca lebih lanjut
                            </Button>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}
export default Keterangan
