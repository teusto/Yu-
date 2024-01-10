import {useQuery} from '@tanstack/react-query'
import { WATCHMOVIE_API } from './constants.keys'
import APIClient from './apiClient'

const apiClientInstance = new APIClient('/v1/list-titles/');

const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: apiClientInstance.getAll ,
    staleTime: 10 * 1000
  })
}

export default useMovies