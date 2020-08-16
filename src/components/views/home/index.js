import React from 'react';
import {
    Container,
    Col,
    Row,
    Card
} from 'react-bootstrap';
import {
    FullPageSection
} from '../../shared/styled';

export default () => {
    return (
        <Container fluid>
            <Row>
                <FullPageSection
                    backgroundImage={"/img/landing.jpg"}
                    backgroundColor={({theme}) => theme.colors.primary.base}
                    className="d-flex align-items-center"
                >
                    <Col xs={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Hi! I'm Rachel</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </FullPageSection>
            </Row>
        </Container>
    )
}