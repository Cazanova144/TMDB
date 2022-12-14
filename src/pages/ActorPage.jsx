import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import useActor from '../hooks/useActor'
import { useParams, Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'

const ActorPage = () => {
    // Take id from params, which we use to get actor
    const { id } = useParams()
    // Extract data and state values from custom hook
    const { data: actor, error, isError, isLoading } = useActor(id)
    // Base url for getting images
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500'

    return (
        <Container className="py-3">

            {isLoading && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            {actor &&
                <>
                    <Row>
                        <Col>
                            <h1>{actor.name}</h1>
                            <p>{actor.known_for_department}</p>
                            <p>{actor.birthday}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card key={actor.id} style={{ width: '25vw' }}>
                                <Card.Img variant="top" src={imageBaseURL + actor.profile_path} style={{ width: '25vw' }} />
                            </Card>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col>
                            <Card key={actor.id}>
                                <p>{actor.biography}</p>
                            </Card>

                            <h2 className="my-3">Starred in:</h2>

                            <HorizontalScroll style={{ height: '48vh' }} reverseScroll={true}>
                                {actor.credits.cast.map(castMember => (
                                    <Card key={castMember.credit_id} style={{ width: '12rem', height: '26rem' }}>
                                        <Card.Body>
                                            <Card.Img src={imageBaseURL + castMember.poster_path} style={{ width: '6rem' }} />

                                            <h4>{castMember.title}</h4>

                                            <p>{castMember.character}</p>

                                            <Button as={Link} to={`/movies/${castMember.id}`}>Read more</Button>
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

export default ActorPage