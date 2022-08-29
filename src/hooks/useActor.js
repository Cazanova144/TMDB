import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useActor = (id) => {
    return useQuery('actor', () => MoviesAPI.getActor(id))
}

export default useActor