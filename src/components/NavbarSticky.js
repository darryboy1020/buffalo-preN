import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NavBarSticky = ({items}) =>{

    return(
        <Container fluid>
            <Row>
                {
                    items.map(({href, text})=>{
                        return(
                            <Col >
                                <a href={href}>{text}</a>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default NavBarSticky;