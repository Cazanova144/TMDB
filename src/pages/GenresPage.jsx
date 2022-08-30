import React, { useState } from 'react'
import { Container, Dropdown, Button } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useGenresList from '../hooks/useGenresList'
import useMoviesByGenre from '../hooks/useMoviesByGenre'
import HorizontalScroll from 'react-scroll-horizontal'
import CardComponent from '../components/CardComponent'

const GenresPage = () => {
    const [genreId, setGenreId] = useState(0)
    const [Page, setPage] = useState(1)
    const page = Page
    const genre_id = genreId
    const { data: genresList, error, isError, isLoading } = useGenresList()
    const { data: moviesByGenre } = useMoviesByGenre(page, genre_id)

    // console.log(genresList)
    console.log("moviesByGenre ===>", moviesByGenre)
    console.log("genreId ===>", genreId)
    console.log("genre_id ===>", genre_id)

    return (
        <Container className="py-3">
            <h1>Select Genre</h1>

            {isLoading && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            {genresList &&
                <Dropdown>
                    <Dropdown.Toggle className="my-3">Choose Genre</Dropdown.Toggle>

                    <Dropdown.Menu>
                        {genresList.genres.map(genre => (
                            <Dropdown.Item key={genre.id} onClick={ () => {setGenreId(genre.id)}}>{genre.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            }

            {moviesByGenre && (
                
                <HorizontalScroll style={{ width: '80vw', height: '24rem' }} reverseScroll={true} >
                    {moviesByGenre.results.map(res => (
                        <CardComponent movie={res} />
                    ))}
                </HorizontalScroll>
                
            )}

            <div className="d-flex justify-content-between align-items-center my-5">
                <Button disabled={page === 1} onClick={() => setPage(prevPage => prevPage - 1)}>Previous Page</Button>
                
                <Button onClick={() => setPage(prevPage => prevPage + 1)}>Next Page</Button>
            </div>
        </Container>
    )
}

export default GenresPage