import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

const Keterangan = ({ keterangan }) => {
    return (
        <div className="card">
        <Col md={4} xs={6} className="mb-4">
            <Card style={{ width: '18rem' }}className="shadow">
                <Card.Img variant="top" src={"assets/images/"+keterangan.game.nama.toLowerCase()+"/"+keterangan.gambar} />
                <Card.Body>
                    <Card.Title>{keterangan.nama}</Card.Title>
                    <Card.Text>
                        {keterangan.deskripsi}
    </Card.Text>
                    <Button variant="primary">Baca lebih lanjut</Button>
                </Card.Body>
            </Card>
        </Col>
        </div>
    )
}

export default Keterangan
