import React from 'react'
import { Container } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import CardComponent from '../components/CardComponent'
import HorizontalScroll from 'react-scroll-horizontal'
import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'

const MoviesPage = () => {
    const { data: now_playing, error: nowPlayingError, isError: nowPlayingIsError, isLoading: nowPlayingIsLoading } = useNowPlaying()
    const { data: popular, error: popularError, isError: popularIsError, isLoading: popularIsLoading } = usePopular()
    const { data: top_rated, error: topRatedError, isError: topRatedIsError, isLoading: topRatedIsLoading } = useTopRated()

    return (
        <Container className="py-3">
            <h1>List of Movies</h1>

            <h2 className="py-3">Now playing in theatres</h2>

            {nowPlayingIsLoading && <LoadingSpinner />}

            {nowPlayingIsError && <WarningAlert message={nowPlayingError.message} />}

            <HorizontalScroll style={{ width: '80vw', height: '21rem' }} reverseScroll={true} >
                {now_playing && now_playing.results.map(nowPlaying => (

                    <CardComponent movie={nowPlaying} />

                ))}
            </HorizontalScroll>

            <h2 className="py-3">Currently popular movies</h2>

            {popularIsLoading && <LoadingSpinner />}

            {popularIsError && <WarningAlert message={popularError.message} />}

            <HorizontalScroll style={{ width: '80vw', height: '21rem' }} reverseScroll={true} >
                {popular && popular.results.map(Popular => (

                    <CardComponent movie={Popular} />

                ))}
            </HorizontalScroll>

            <h2 className="py-3">Top rated movies</h2>

            {topRatedIsLoading && <LoadingSpinner />}

            {topRatedIsError && <WarningAlert message={topRatedError.message} />}

            <HorizontalScroll style={{ width: '80vw', height: '21rem' }} reverseScroll={true} >
                {top_rated && top_rated.results.map(toprated => (

                    <CardComponent movie={toprated} />

                ))}
            </HorizontalScroll>

        </Container>
    )
}

export default MoviesPage