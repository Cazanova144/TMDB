import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container, Dropdown, Button } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useGenresList from '../hooks/useGenresList'
import useMoviesByGenre from '../hooks/useMoviesByGenre'
import HorizontalScroll from 'react-scroll-horizontal'
import CardComponent from '../components/CardComponent'
import { useSearchParams } from 'react-router-dom'

const GenresPage = () => {
    // Set search params
    const [searchParams, setSearchParams] = useSearchParams({
        page: 1,
        genre_id: ""
    })
    // Set values of genreId and Page
    const [genreId, setGenreId] = useState(0)
    const [Page, setPage] = useState(1)
    // Set those values on genre_id and page
    const genre_id = searchParams.get('genre_id') ? Number(searchParams.get('genre_id')) : ""
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null 
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
                <>
                    <Dropdown>
                        <Dropdown.Toggle className="my-3">Choose Genre</Dropdown.Toggle>

                        {/* Dropdown menu to select genre (changes genreId thus changing moviesByGenre data) */}
                        <Dropdown.Menu>
                            {genresList.genres.map(genre => (
                                <Dropdown.Item key={genre.id} onClick={ () => {setSearchParams({ page: 1, genre_id: genre.id})}}>{genre.name}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    {genre_id &&
                        <p>You're now viewing: {genresList?.genres?.filter(genre => genre.id === genre_id)[0].name}</p>
                    }
                </>
            }

            {/* Once genreId has changed this HorizontalScroll will activate */}
            {moviesByGenre && (
                <HorizontalScroll style={{ width: '80vw', height: '24rem' }} reverseScroll={true} >
                    {moviesByGenre.results.map(res => (
                        <CardComponent movie={res} />
                    ))}
                </HorizontalScroll>
            )}

            {moviesByGenre?.results?.length ? 
                // Buttons to change Page value, making you get different results from API
                <div className="d-flex justify-content-between align-items-center my-5">
                    <Button disabled={page === 1} onClick={() => setSearchParams({ page: page - 1, genre_id: genre_id })}>Previous Page</Button>
                    
                    <Button disabled={page === moviesByGenre.total_pages} onClick={() => setSearchParams({ page: page + 1, genre_id: genre_id })}>Next Page</Button>
                </div>
            : ""}
        </Container>
    )
}

export default GenresPage