import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Detail = ({ keterangan, detail }) => {
    return (
        <div className="card">
        <Col xs={1} className="mb-1">
            <Card style={{ width: '15rem' }}className="shadow" >
                <Card.Img variant="top" src={"assets/images/"+keterangan.game.nama.toLowerCase()+"/"+keterangan.gambar} />
                <Card.Body>
                    <Card.Title>{keterangan.nama}</Card.Title>
                    <Card.Text>
                        {keterangan.desk}
    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div>
    )
}

export default Detail
