import React from 'react';
import {
    Container,
    Col,
    Row,
    Card
} from 'react-bootstrap';
import {
    FullPageSection,
    StyledCard
} from '../../shared/styled';

export default () => {
    return (
        <Container fluid>
            <Row>
                <FullPageSection
                    backgroundImage={"/img/landing.jpg"}
                    backgroundColor={({theme}) => theme.colors.primary.base}
                    className="d-flex"
                >
                    <Row className="m-5" xs={1} sm={2}>
                        <Col lg={4} sm={6} xs={12}>
                            <StyledCard
                                backgroundColor={({theme}) => theme.colors.whiteTransparency85}
                                style={{
                                    maxHeight: "75vh",
                                    overflow: "scroll"
                                }}
                            >
                                <Card.Body>
                                    <Card.Title>Hi! I'm Rachel</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Card.Text>
                                </Card.Body>
                            </StyledCard>
                        </Col>
                        <Col className="mt-5" lg={8} sm={6} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Put a picture and some fun facts here</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </FullPageSection>
            </Row>
        </Container>
    )
}