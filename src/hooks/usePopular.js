import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const usePopular = () => {
    return useQuery('popular', MoviesAPI.getPopular)
}

export default usePopular