import { useQuery } from "react-query";
import MoviesAPI from "../services/MoviesAPI";

const useNowPlaying = () => {
    return useQuery('now_playing', MoviesAPI.getNowPlaying)
}

export default useNowPlaying