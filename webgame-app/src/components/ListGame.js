import React, {Component} from 'react';
import { Col } from 'react-bootstrap';

export default class ListGame extends Component {
    render() {
        return (
            <Col md={2} mt="2">
                <strong>Games</strong>
                <hr />
            </Col>
        );
    }
}