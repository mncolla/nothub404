import githubApi from "../config/api/github-api";
import { Repository } from "../domain/entities/github-repository.entity";
import { GetRepositoryResponse } from "../infraestructure/interfaces/github-repository.interface";
import { GithubRepositoryMapper } from "../infraestructure/mappers/github-repository.mapper";

export const getRepositories = async (query: string, page: number, limit: number): Promise<Repository[]> => {
    try {
        const url = `/search/repositories`;
        const { data } = await githubApi.get<GetRepositoryResponse>(url, {
            params: {
                q: query,
                page,
                per_page: limit,
                sort: "stars",
                order: "desc"
            },
            headers: {
                'User-Agent': 'request'
            }
        });

        const repositories = data.items.map(item => GithubRepositoryMapper.githubApiToEntity(item))
        return repositories
    } catch (error: any) {
        console.error("error", error.message)
        throw new Error('Get repositories fail!')
    }
}