import { Repository } from "../../domain/entities/github-repository.entity";
import { GithubRepository } from "../interfaces/github-repository.interface";

export class GithubRepositoryMapper {

    static githubApiToEntity(data: GithubRepository): Repository {
        return {
            id: data.id,
            name: data.full_name,
            avatar: data.owner.avatar_url,
            description: data.description,
            tags: data.topics,
            language: data.language,
            stars: data.stargazers_count,
            activity: data.updated_at,
            url: data.html_url
        }
    }
}