import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useMoviesByGenre = (page, genre_id) => {
    return useQuery(['movie-by-genre', {page, genre_id}], MoviesAPI.getMoviesByGenre, {keepPreviousData: true})
}

export default useMoviesByGenre