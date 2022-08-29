import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import useNowPlaying from '../hooks/useNowPlaying'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import CardComponent from '../components/CardComponent'
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

            <HorizontalScroll style={{ width: '80vw', height: '15rem' }} reverseScroll={true} >
                {now_playing && now_playing.results.map(nowPlaying => (

                    <CardComponent nowPlaying={nowPlaying} />

                ))}
            </HorizontalScroll>

        </Container>
    )
}

export default MoviesPage