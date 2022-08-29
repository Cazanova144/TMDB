import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useGenresList = () => {
    return useQuery('genres-list', MoviesAPI.getGenresList, {keepPreviousData: true})
}

export default useGenresList