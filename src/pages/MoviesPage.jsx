import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import useNowPlaying from '../hooks/useNowPlaying'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import { Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'

const MoviesPage = () => {
    const { data: now_playing, error: nowPlayingError, isError: nowPlayingIsError, isLoading: nowPlayingIsLoading } = useNowPlaying()

    return (
        <Container className="py-3">
            <h1>List of Movies</h1>

            <h2 className="py-3">Now playing in theatres</h2>

            {nowPlayingIsLoading && <LoadingSpinner />}

            {nowPlayingError && <WarningAlert message={nowPlayingError.message} />}

            <HorizontalScroll style={{ width: '100vw', height: '15rem' }} reverseScroll={true} >
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
            </HorizontalScroll>

        </Container>
    )
}

export default MoviesPage