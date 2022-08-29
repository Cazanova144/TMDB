import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useMovie from '../hooks/useMovie'
import HorizontalScroll from 'react-scroll-horizontal'

const MoviePage = () => {
    const { id } = useParams()
    const { data: movie, error, isError, isLoading } = useMovie(id)
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500'

    console.log(movie)

    return (
        <Container className="py-3">
            {isLoading && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            {movie && 
                <>
                    <Row>
                        <Col>
                            <h1>{movie.title}</h1>
                            <p>Released: {movie.release_date}</p>
                            <p>{movie.runtime} minutes</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card key={movie.id} style={{ width: '25vw' }}>
                                <Card.Img variant="top" src={imageBaseURL + movie.poster_path} style={{ width: '25vw' }} />
                            </Card>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col>
                            <Card key={movie.id}>
                                <p>{movie.overview}</p>
                                <p>Budget: {movie.budget} $</p>
                                <p>Score: {movie.vote_average}/10</p>
                            </Card>

                            <h2 className="my-3">Cast</h2>

                            <HorizontalScroll style={{ height: '40vh' }} reverseScroll={true}>
                                    {movie.credits.cast.map(castMember => (
                                        <Card key={castMember.credit_id} style={{ width: '12vw' }}>
                                            
                                            <Card.Body>

                                                <Card.Img src={imageBaseURL + castMember.profile_path} style={{ width: '10vw' }} />
                                                    
                                                <p>{castMember.name}</p>

                                                <Button as={Link} to={`/actors/${castMember.id}`}>Read more</Button>

                                            </Card.Body>
                                        </Card>
                                    ))}
                            </HorizontalScroll>

                            
                        </Col>
                    </Row>
                </>
            }

            
        </Container>
    )
}

export default MoviePage