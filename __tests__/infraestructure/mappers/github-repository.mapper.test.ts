import { Repository } from "../../../src/domain/entities/github-repository.entity";
import { GithubRepository } from "../../../src/infraestructure/interfaces/github-repository.interface";
import { GithubRepositoryMapper } from "../../../src/infraestructure/mappers/github-repository.mapper";

describe("GithubRepositoryMapper", () => {
    it("should map GithubRepository to Repository entity correctly", () => {
        const mockGithubRepository = {
            id: 123,
            full_name: "owner/repository-name",
            owner: {
                avatar_url: "https://example.com/avatar.jpg",
            },
            description: "This is a test repository",
            topics: ["topic1", "topic2"],
            language: "JavaScript",
            stargazers_count: 42,
            updated_at: new Date("2024-11-01T00:00:00Z"),
            html_url: "https://github.com/owner/repository-name"
        };

        const expectedRepository: Repository = {
            id: 123,
            name: "owner/repository-name",
            avatar: "https://example.com/avatar.jpg",
            description: "This is a test repository",
            tags: ["topic1", "topic2"],
            language: "JavaScript",
            stars: 42,
            activity: new Date("2024-11-01T00:00:00Z"),
            url: "https://github.com/owner/repository-name"
        };

        const result = GithubRepositoryMapper.githubApiToEntity(mockGithubRepository as any);

        expect(result).toEqual(expectedRepository);
    });

    it("should handle missing optional fields correctly", () => {
        const mockGithubRepository = {
            id: 456,
            full_name: "owner/another-repo",
            owner: {
                avatar_url: "https://example.com/avatar2.jpg",
            },
            topics: [],
            stargazers_count: 10,
            html_url: "https://github.com/owner/another-repo",
            updated_at: new Date("2024-11-01T00:00:00Z"),
        };

        const expectedRepository: Repository = {
            id: 456,
            name: "owner/another-repo",
            avatar: "https://example.com/avatar2.jpg",
            tags: [],
            stars: 10,
            url: "https://github.com/owner/another-repo",
            activity: new Date("2024-11-01T00:00:00Z"),
        };

        const result = GithubRepositoryMapper.githubApiToEntity(mockGithubRepository as any);

        expect(result).toEqual(expectedRepository);
    });
});