import data from "../../assets/github-colors.json"

interface GithubColorItem {
    color: string | null,
    url: string
}

type GithubColor = Record<string, GithubColorItem>

export const getGithubTechnologyColor = (technology: string): GithubColorItem["color"] => {
    return (data as GithubColor)[technology].color;
}