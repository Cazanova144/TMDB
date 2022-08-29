import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardComponent = ({ nowPlaying }) => {
    return (
        <Col key={nowPlaying.id} className="mb-5 justify-content-center">
            <Card style={{ width: '20rem', height: '15rem', display: 'flex' }} >
                <Card.Body>
                    <Card.Title as="h3">{nowPlaying.title}</Card.Title>

                    <Card.Text>Release Date: {nowPlaying.release_date}</Card.Text>

                    <Card.Text>Score: {nowPlaying.vote_average}</Card.Text>

                    <Button as={Link} to="/movies/:id">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent