import data from "../../../src/assets/github-colors.json"
import { getGithubTechnologyColor } from "../../../src/config/helpers/getGithubTechnologyColor";

describe("getGithubTechnologyColor", () => {
  it("should return the correct color for an existing technology", () => {
    const technology = "JavaScript";
    const expectedColor = data[technology].color;
    expect(getGithubTechnologyColor(technology)).toBe(expectedColor);
  });

  it("should return null for a technology with a null color", () => {
    const technology = "Befunge";
    data[technology] = { color: null, url: "https://example.com" };
    expect(getGithubTechnologyColor(technology)).toBeNull();
  });

  it("should throw an error if the technology is not found in the data", () => {
    const technology = "NonExistentTechnology";
    expect(() => getGithubTechnologyColor(technology)).toThrow();
  });
});
