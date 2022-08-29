import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

/**
 * GET an endpoint
 * 
 * @param {string} endpoint
 * @returns Promise
 */
const get = async (endpoint) => {
    const res = await axios.get(endpoint)

    return res.data
}

/**
 * 
 * Movies
 * 
 */

/**
 * Get movie 
 */
const getMovie = async (id) => {
    return get(`/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
}

/**
 * Get movie genres
 */
const getGenresList = async () => {
    return get(`/genre/tv/list?api_key=${API_KEY}&language=en-US`)
}

/**
 * Get movies based on genre
 */
const getMoviesByGenre = async ({queryKey}) => {
    const [_key, {page, genre_id}] = queryKey
    return get(`/discover/movie?api_key=${API_KEY}&language=en-US&popularity.desc&with_genres=${genre_id}&include_adult=false&page=${page}`)
}

/**
 * Get top rated 
 */
const getTopRated = async () => {
    return get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`)
}

/**
 * Get now playing
 */
const getNowPlaying = async () => {
    return get(`/movie/now_playing?api_key=${API_KEY}&language=en-US`)
}

/**
 * Get trending movies this week
 */
const getTrending = async () => {
    return get(`/trending/movie/week?api_key=${API_KEY}&language=en-US`)
}

/**
 * Get popular movies this week
 */
const getPopular = async () => {
    return get(`/movie/popular?api_key=${API_KEY}&language=en-US`)
}

/**
 * Get credits
 */
const getCredits = async (id) => {
    return get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
}

export default {
    getMovie,
    getGenresList,
    getMoviesByGenre,
    getTopRated,
    getNowPlaying,
    getTrending,
    getPopular,
    getCredits
}