import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useTopRated = () => {
    return useQuery('top_rated', MoviesAPI.getTopRated)
}

export default useTopRated