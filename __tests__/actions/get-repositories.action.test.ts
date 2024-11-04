import { getRepositories } from "../../src/actions/get-repositories.action";
import githubApi from "../../src/config/api/github-api";
import { GithubRepositoryMapper } from "../../src/infraestructure/mappers/github-repository.mapper";

const githubApiGetSpy = jest.spyOn(githubApi, "get") as jest.Mock;

const githubApiSuccessResponse = {
  total_count: 2719856,
  incomplete_results: false,
  items: [
    {
      id: 887025,
      node_id: "MDEwOlJlcG9zaXRvcnk4ODcwMjU=",
      name: "q",
      full_name: "kriskowal/q",
      private: false,
      owner: {
        login: "kriskowal",
        id: 60294,
        node_id: "MDQ6VXNlcjYwMjk0",
        avatar_url: "https://avatars.githubusercontent.com/u/60294?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/kriskowal",
        html_url: "https://github.com/kriskowal",
        followers_url: "https://api.github.com/users/kriskowal/followers",
        following_url:
          "https://api.github.com/users/kriskowal/following{/other_user}",
        gists_url: "https://api.github.com/users/kriskowal/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/kriskowal/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/kriskowal/subscriptions",
        organizations_url: "https://api.github.com/users/kriskowal/orgs",
        repos_url: "https://api.github.com/users/kriskowal/repos",
        events_url: "https://api.github.com/users/kriskowal/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/kriskowal/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/kriskowal/q",
      description: "A promise library for JavaScript",
      fork: false,
      url: "https://api.github.com/repos/kriskowal/q",
      forks_url: "https://api.github.com/repos/kriskowal/q/forks",
      keys_url: "https://api.github.com/repos/kriskowal/q/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/kriskowal/q/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/kriskowal/q/teams",
      hooks_url: "https://api.github.com/repos/kriskowal/q/hooks",
      issue_events_url:
        "https://api.github.com/repos/kriskowal/q/issues/events{/number}",
      events_url: "https://api.github.com/repos/kriskowal/q/events",
      assignees_url:
        "https://api.github.com/repos/kriskowal/q/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/kriskowal/q/branches{/branch}",
      tags_url: "https://api.github.com/repos/kriskowal/q/tags",
      blobs_url: "https://api.github.com/repos/kriskowal/q/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/kriskowal/q/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/kriskowal/q/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/kriskowal/q/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/kriskowal/q/statuses/{sha}",
      languages_url: "https://api.github.com/repos/kriskowal/q/languages",
      stargazers_url: "https://api.github.com/repos/kriskowal/q/stargazers",
      contributors_url: "https://api.github.com/repos/kriskowal/q/contributors",
      subscribers_url: "https://api.github.com/repos/kriskowal/q/subscribers",
      subscription_url: "https://api.github.com/repos/kriskowal/q/subscription",
      commits_url: "https://api.github.com/repos/kriskowal/q/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/kriskowal/q/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/kriskowal/q/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/kriskowal/q/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/kriskowal/q/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/kriskowal/q/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/kriskowal/q/merges",
      archive_url:
        "https://api.github.com/repos/kriskowal/q/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/kriskowal/q/downloads",
      issues_url: "https://api.github.com/repos/kriskowal/q/issues{/number}",
      pulls_url: "https://api.github.com/repos/kriskowal/q/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/kriskowal/q/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/kriskowal/q/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/kriskowal/q/labels{/name}",
      releases_url: "https://api.github.com/repos/kriskowal/q/releases{/id}",
      deployments_url: "https://api.github.com/repos/kriskowal/q/deployments",
      created_at: new Date("2010-09-04T01:21:12Z"),
      updated_at: new Date("2024-10-28T14:01:02Z"),
      pushed_at: new Date("2024-10-28T14:01:02Z"),
      git_url: "git://github.com/kriskowal/q.git",
      ssh_url: "git@github.com:kriskowal/q.git",
      clone_url: "https://github.com/kriskowal/q.git",
      svn_url: "https://github.com/kriskowal/q",
      homepage: "",
      size: 1428,
      stargazers_count: 14933,
      watchers_count: 14933,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 1201,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 116,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 1201,
      open_issues: 116,
      watchers: 14933,
      default_branch: "master",
      score: 1.0,
    },
    {
      id: 3308920,
      node_id: "MDEwOlJlcG9zaXRvcnkzMzA4OTIw",
      name: "q",
      full_name: "harelba/q",
      private: false,
      owner: {
        login: "harelba",
        id: 985765,
        node_id: "MDQ6VXNlcjk4NTc2NQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/985765?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/harelba",
        html_url: "https://github.com/harelba",
        followers_url: "https://api.github.com/users/harelba/followers",
        following_url:
          "https://api.github.com/users/harelba/following{/other_user}",
        gists_url: "https://api.github.com/users/harelba/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/harelba/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/harelba/subscriptions",
        organizations_url: "https://api.github.com/users/harelba/orgs",
        repos_url: "https://api.github.com/users/harelba/repos",
        events_url: "https://api.github.com/users/harelba/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/harelba/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/harelba/q",
      description:
        "q - Run SQL directly on delimited files and multi-file sqlite databases",
      fork: false,
      url: "https://api.github.com/repos/harelba/q",
      forks_url: "https://api.github.com/repos/harelba/q/forks",
      keys_url: "https://api.github.com/repos/harelba/q/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/harelba/q/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/harelba/q/teams",
      hooks_url: "https://api.github.com/repos/harelba/q/hooks",
      issue_events_url:
        "https://api.github.com/repos/harelba/q/issues/events{/number}",
      events_url: "https://api.github.com/repos/harelba/q/events",
      assignees_url: "https://api.github.com/repos/harelba/q/assignees{/user}",
      branches_url: "https://api.github.com/repos/harelba/q/branches{/branch}",
      tags_url: "https://api.github.com/repos/harelba/q/tags",
      blobs_url: "https://api.github.com/repos/harelba/q/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/harelba/q/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/harelba/q/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/harelba/q/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/harelba/q/statuses/{sha}",
      languages_url: "https://api.github.com/repos/harelba/q/languages",
      stargazers_url: "https://api.github.com/repos/harelba/q/stargazers",
      contributors_url: "https://api.github.com/repos/harelba/q/contributors",
      subscribers_url: "https://api.github.com/repos/harelba/q/subscribers",
      subscription_url: "https://api.github.com/repos/harelba/q/subscription",
      commits_url: "https://api.github.com/repos/harelba/q/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/harelba/q/git/commits{/sha}",
      comments_url: "https://api.github.com/repos/harelba/q/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/harelba/q/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/harelba/q/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/harelba/q/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/harelba/q/merges",
      archive_url:
        "https://api.github.com/repos/harelba/q/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/harelba/q/downloads",
      issues_url: "https://api.github.com/repos/harelba/q/issues{/number}",
      pulls_url: "https://api.github.com/repos/harelba/q/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/harelba/q/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/harelba/q/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/harelba/q/labels{/name}",
      releases_url: "https://api.github.com/repos/harelba/q/releases{/id}",
      deployments_url: "https://api.github.com/repos/harelba/q/deployments",
      created_at: new Date("2012-01-30T21:12:09Z"),
      updated_at: new Date("2024-11-01T19:30:35Z"),
      pushed_at: new Date("4-11-01T19:30:35Z"),
      git_url: "git://github.com/harelba/q.git",
      ssh_url: "git@github.com:harelba/q.git",
      clone_url: "https://github.com/harelba/q.git",
      svn_url: "https://github.com/harelba/q",
      homepage: "http://harelba.github.io/q/",
      size: 3202,
      stargazers_count: 10199,
      watchers_count: 10199,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: true,
      forks_count: 423,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 118,
      license: {
        key: "gpl-3.0",
        name: "GNU General Public License v3.0",
        spdx_id: "GPL-3.0",
        url: "https://api.github.com/licenses/gpl-3.0",
        node_id: "MDc6TGljZW5zZTk=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        "cli",
        "command-line",
        "command-line-tool",
        "csv",
        "database",
        "python",
        "q",
        "qtextasdata",
        "sql",
        "sqlite",
        "sqlite3",
        "textasdata",
        "tsv",
      ],
      visibility: "public",
      forks: 423,
      open_issues: 118,
      watchers: 10199,
      default_branch: "master",
      score: 1.0,
    },
  ],
};

const githubApiEmptyReponse = {
  total_count: 2719856,
  incomplete_results: false,
  items: [],
};

describe("getRepositories", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should return an array of mapped repositories", async () => {
    githubApiGetSpy.mockResolvedValue({ data: githubApiSuccessResponse });
    const result = await getRepositories("javascript", 1, 2);
    const expectedItems = githubApiSuccessResponse.items.map((item) => {
      return GithubRepositoryMapper.githubApiToEntity(item);
    });
    expect(result).toEqual(expectedItems);
  });

  it("should return an empty array", async () => {
    githubApiGetSpy.mockResolvedValue({ data: githubApiEmptyReponse });
    const result = await getRepositories("javascript", 1, 2);
    expect(result).toEqual([]);
  });

  it("should throw an error if the GitHub API request fails", async () => {
    const failRequest = new Error("Api fails!");
    githubApiGetSpy.mockRejectedValue(failRequest);
    await expect(getRepositories("javascript", 1, 2)).rejects.toThrow(
      "Get repositories fail!"
    );
  });
});
