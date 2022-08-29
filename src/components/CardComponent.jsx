import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardComponent = ({ movie }) => {
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500'

    return (
        <Col key={movie.id} className="mb-5 d-flex">
            <Card style={{ width: '20rem', height: '24rem' }} >
                <Card.Body>
                    <Card.Img variant="top" src={imageBaseURL + movie.poster_path} style={{ height: '7rem', width: '6rem' }} />

                    <Card.Title as="h3">{movie.title}</Card.Title>

                    <Card.Text>Release Date: {movie.release_date}</Card.Text>

                    <Card.Text>Score: {movie.vote_average}</Card.Text>

                    <Button as={Link} to={`/movies/${movie.id}`}>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent