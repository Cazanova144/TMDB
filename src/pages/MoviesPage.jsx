import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import useNowPlaying from '../hooks/useNowPlaying'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import { Link } from 'react-router-dom'

const MoviesPage = () => {
    const { data: now_playing, error: nowPlayingError, isError: nowPlayingIsError, isLoading: nowPlayingIsLoading } = useNowPlaying()

    // console.log(now_playing)

    // const nowPlayingArray = now_playing.results

    // console.log(nowPlayingArray)

    return (
        <Container className="py-3">
            <h1>List of Movies</h1>

            {nowPlayingIsLoading && <LoadingSpinner />}

            {nowPlayingError && <WarningAlert message={nowPlayingError.message} />}

            <Row>
                {now_playing && now_playing.results.map(nowPlaying => (

                    <Col key={nowPlaying.id} className="mb-5 justify-content-center">
                        <Card style={{ width: '24rem', height: '15rem', display: 'flex' }} >
                            <Card.Body>
                                <Card.Title as="h3">{nowPlaying.title}</Card.Title>

                                <Card.Text>Release Date: {nowPlaying.release_date}</Card.Text>

                                <Card.Text>Score: {nowPlaying.vote_average}</Card.Text>

                                <Button as={Link} to="/movies/:id">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
  
                ))}
            </Row>

            
                
        </Container>
    )
}

export default MoviesPage