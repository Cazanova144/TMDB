import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/actors">
                            Actors
                        </Nav.Link>

                        <Nav.Link as={NavLink} end to="/movies">
                            Movies
                        </Nav.Link>

                        <Nav.Link as={NavLink} end to="/genres">
                            Genres
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
