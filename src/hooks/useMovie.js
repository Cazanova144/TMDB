import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useMovie = (id) => {
    return useQuery('movie', () => MoviesAPI.getMovie(id))
}

export default useMovie