import data from "../../assets/github-colors.json"

export interface GithubColorItem {
    color: string | null,
    url: string
}

export type GithubColor = Record<string, GithubColorItem>

export const getGithubTechnologyColor = (technology: string): GithubColorItem["color"] => {
    return (data as GithubColor)[technology].color;
}