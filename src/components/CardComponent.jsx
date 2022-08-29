import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardComponent = ({ movie }) => {
    return (
        <Col key={movie.id} className="mb-5 justify-content-center">
            <Card style={{ width: '20rem', height: '15rem', display: 'flex' }} >
                <Card.Body>
                    <Card.Title as="h3">{movie.title}</Card.Title>

                    <Card.Text>Release Date: {movie.release_date}</Card.Text>

                    <Card.Text>Score: {movie.vote_average}</Card.Text>

                    <Button as={Link} to="/movies/:id">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent