import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import CardComponent from '../components/CardComponent'
import HorizontalScroll from 'react-scroll-horizontal'
import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'

const MoviesPage = () => {
    // Extract data and state values from custom hook
    const { data: now_playing, error: nowPlayingError, isError: nowPlayingIsError, isLoading: nowPlayingIsLoading } = useNowPlaying()
    const { data: popular, error: popularError, isError: popularIsError, isLoading: popularIsLoading } = usePopular()
    const { data: top_rated, error: topRatedError, isError: topRatedIsError, isLoading: topRatedIsLoading } = useTopRated()
    // A number value which we will use to be able to scroll with buttons (mobile friendly)
    const scrollValue = 320
    // useStates set to 0, which are each going to be used for their own HorizontalScoll component
    const [changedValueTheatres, setChangedValueTheatres] = useState(0)
    const [changedValuePopular, setChangedValuePopular] = useState(0)
    const [changedValueTopRated, setChangedValueTopRated] = useState(0)

    // A useEffect which sets the useStates back to 0 (if I don't do this the scroll will get huge with just a few clicks)
    useEffect(() => {
        setChangedValueTheatres(0)
        setChangedValuePopular(0)
        setChangedValueTopRated(0)
    }, [changedValueTheatres, changedValuePopular, changedValueTopRated])

    return (
        <Container className="py-3">
            <h1>List of Movies</h1>

            <h2 className="py-3">Now playing in theatres</h2>

            {nowPlayingIsLoading && <LoadingSpinner />}

            {nowPlayingIsError && <WarningAlert message={nowPlayingError.message} />}

            {/* Set the specific useState value for each HorizontalComponent */}
            <HorizontalScroll style={{ width: '80vw', height: '21rem' }} reverseScroll={true} animValues={changedValueTheatres} >
                {now_playing && now_playing.results.map(nowPlaying => (

                    <CardComponent movie={nowPlaying} />

                ))}
            </HorizontalScroll>

            {/* Buttons which are going to push animValues by 320, then return back to 0 */}
            <div className="d-flex justify-content-between align-items-center my-5">
                <Button onClick={() => {setChangedValueTheatres(prevValue => prevValue + scrollValue)}}>Slide Right</Button>

                <Button onClick={() => {setChangedValueTheatres(prevValue => prevValue - scrollValue)}}>Slide Left</Button>
            </div>

            <h2 className="py-3">Currently popular movies</h2>

            {popularIsLoading && <LoadingSpinner />}

            {popularIsError && <WarningAlert message={popularError.message} />}

            {/* Set the specific useState value for each HorizontalComponent */}
            <HorizontalScroll style={{ width: '80vw', height: '21rem' }} reverseScroll={true} animValues={changedValuePopular} >
                {popular && popular.results.map(Popular => (

                    <CardComponent movie={Popular} />

                ))}
            </HorizontalScroll>

            {/* Buttons which are going to push animValues by 320, then return back to 0 */}
            <div className="d-flex justify-content-between align-items-center my-5">
                <Button onClick={() => {setChangedValuePopular(prevValue => prevValue + scrollValue)}}>Slide Right</Button>

                <Button onClick={() => {setChangedValuePopular(prevValue => prevValue - scrollValue)}}>Slide Left</Button>
            </div>

            <h2 className="py-3">Top rated movies</h2>

            {topRatedIsLoading && <LoadingSpinner />}

            {topRatedIsError && <WarningAlert message={topRatedError.message} />}

            {/* Set the specific useState value for each HorizontalComponent */}
            <HorizontalScroll style={{ width: '80vw', height: '21rem' }} reverseScroll={true} animValues={changedValueTopRated} >
                {top_rated && top_rated.results.map(toprated => (

                    <CardComponent movie={toprated} />

                ))}
            </HorizontalScroll>

            {/* Buttons which are going to push animValues by 320, then return back to 0 */}
            <div className="d-flex justify-content-between align-items-center my-5">
                <Button onClick={() => {setChangedValueTopRated(prevValue => prevValue + scrollValue)}}>Slide Right</Button>

                <Button onClick={() => {setChangedValueTopRated(prevValue => prevValue - scrollValue)}}>Slide Left</Button>
            </div>

        </Container>
    )
}

export default MoviesPage