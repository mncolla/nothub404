import { formatUnitNumber } from "../../../src/config/helpers/formatUnitNumbers";

describe("formatUnitNumber", () => {
    it("should format numbers less than 1000 without abbreviating", () => {
        expect(formatUnitNumber(999)).toBe("999.0");
    });

    it("should format thousands with 'k' abbreviation", () => {
        expect(formatUnitNumber(1500)).toBe("1.5k");
    });

    it("should format millions with 'm' abbreviation", () => {
        expect(formatUnitNumber(2000000)).toBe("2.0m");
    });

    it("should format billions with 'b' abbreviation", () => {
        expect(formatUnitNumber(3000000000)).toBe("3.0b");
    });

    it("should format trillions with 't' abbreviation", () => {
        expect(formatUnitNumber(4000000000000)).toBe("4.0t");
    });

    it("should handle zero correctly", () => {
        expect(formatUnitNumber(0)).toBe("0.0");
    });

    it("should format negative numbers correctly", () => {
        expect(formatUnitNumber(-1500)).toBe("-1.5k");
    });
});