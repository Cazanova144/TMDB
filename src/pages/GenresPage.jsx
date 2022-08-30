import React, { useState } from 'react'
import { Container, Dropdown, Button } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useGenresList from '../hooks/useGenresList'
import useMoviesByGenre from '../hooks/useMoviesByGenre'
import HorizontalScroll from 'react-scroll-horizontal'
import CardComponent from '../components/CardComponent'

const GenresPage = () => {
    // Set values of genreId and Page
    const [genreId, setGenreId] = useState(0)
    const [Page, setPage] = useState(1)
    // Set those values on genre_id and page
    const genre_id = genreId
    const page = Page
    // Extract data and state values from custom hook
    const { data: genresList, error, isError, isLoading } = useGenresList()
    // Use values we set before to trigger custom hook
    const { data: moviesByGenre } = useMoviesByGenre(page, genre_id)

    return (
        <Container className="py-3">
            <h1>Select Genre</h1>

            {isLoading && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            {genresList &&
                <Dropdown>
                    <Dropdown.Toggle className="my-3">Choose Genre</Dropdown.Toggle>

                    {/* Dropdown menu to select genre (changes genreId thus changing moviesByGenre data) */}
                    <Dropdown.Menu>
                        {genresList.genres.map(genre => (
                            <Dropdown.Item key={genre.id} onClick={ () => {setGenreId(genre.id)}}>{genre.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            }

            {/* Once genreId has changed this HorizontalScroll will activate */}
            {moviesByGenre && (
                

                <HorizontalScroll style={{ width: '80vw', height: '24rem' }} reverseScroll={true} >
                    {moviesByGenre.results.map(res => (
                        <CardComponent movie={res} />
                    ))}
                </HorizontalScroll>
                
            )}

            {/* Buttons to change Page value, making you get different results from API */}
            <div className="d-flex justify-content-between align-items-center my-5">
                <Button disabled={page === 1} onClick={() => setPage(prevPage => prevPage - 1)}>Previous Page</Button>
                
                <Button onClick={() => setPage(prevPage => prevPage + 1)}>Next Page</Button>
            </div>
        </Container>
    )
}

export default GenresPage