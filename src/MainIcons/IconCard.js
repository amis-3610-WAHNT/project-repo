import React from "react";
import { Card } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import {Container, Row, Col} from "react-bootstrap";
    
export default function IconsCard(props) {
    return (
            <Card border="light">
                <Card.Body>
                    <Row type="flex">
                        <Col md={11}>
                            {/* This is header and main text of the card */}
                            <Card.Title>{props.cocktail.name}</Card.Title>
                            <Card.Text>{props.cocktail.directions}</Card.Text>
                        </Col>
                        <Col md={1}>
                            <div class="vertical-center">
                            {/* This is the icon that I'm trying to vertically align */}
                            <MDBIcon icon="chevron-right" />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    );
}