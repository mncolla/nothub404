import { useEffect, useMemo, useState } from "react"
import useDebounceValue from "./useDebounceValue"
import { getRepositories } from "../../actions/get-repositories.action"
import { Repository } from "../../domain/entities/github-repository.entity"

const useGetRepositories = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [searchQuery, setSearchQuery] = useState("javascript")

    const debounceValue = useDebounceValue(searchQuery, 1000)

    const totalStars = useMemo(()=>{
        return repositories.reduce((total, item) => total + (item.stars || 0), 0)
      },[repositories])

    useEffect(() => {
        setIsLoading(true)
        if (debounceValue.length > 3) {
          getRepositories(debounceValue, 1, 10)
            .then(data => setRepositories(data))
            .catch(() => setError(true))
            .finally(()=>setIsLoading(false))
        }
      }, [debounceValue])

  return {
    isLoading,
    repositories,
    search: setSearchQuery,
    searchValue: searchQuery,
    totalStars,
    error
  }
}
export default useGetRepositories