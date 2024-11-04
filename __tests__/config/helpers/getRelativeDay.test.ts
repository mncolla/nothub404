import { format, formatDistanceToNow } from "date-fns";
import { getRelativeTime } from "../../../src/config/helpers/getRelativeDay";

jest.mock("date-fns", () => ({
  formatDistanceToNow: jest.fn(),
  format: jest.fn(),
}));

describe("getRelativeTime", () => {
  const originalDateNow = Date.now;

  beforeAll(() => {
    Date.now = jest.fn(() => new Date("2024-11-01T00:00:00Z").getTime());
  });

  afterAll(() => {
    Date.now = originalDateNow;
  });

  it("should return relative time if the date is within 30 days", () => {
    const inputDate = new Date("2024-10-15T00:00:00Z");
    (formatDistanceToNow as jest.Mock).mockReturnValue("17 days ago");

    const result = getRelativeTime(inputDate);

    expect(formatDistanceToNow).toHaveBeenCalledWith(inputDate, {
      addSuffix: true,
    });
    expect(result).toBe("updated 17 days ago");
  });

  it("should return formatted date if the date is older than 30 days", () => {
    const inputDate = new Date("2024-09-15T00:00:00Z");
    (format as jest.Mock).mockReturnValue("15 Sep 2024");

    const result = getRelativeTime(inputDate);

    expect(format).toHaveBeenCalledWith(inputDate, "d MMM yyyy");
    expect(result).toBe("updated on 15 Sep 2024");
  });

  it("should handle string date input correctly", () => {
    const inputDate = "2024-10-15T00:00:00Z";
    (formatDistanceToNow as jest.Mock).mockReturnValue("17 days ago");

    const result = getRelativeTime(inputDate);

    expect(formatDistanceToNow).toHaveBeenCalledWith(new Date(inputDate), {
      addSuffix: true,
    });
    expect(result).toBe("updated 17 days ago");
  });
});
