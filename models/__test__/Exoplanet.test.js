const { save } = require("../Exoplanet");

describe("Test if planet name is uppercase - pass", () => {
    it("should work - return true", () => {
        const result = save({
            uniqueName: "TEST",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(true);
    });
});

describe("Test if planet name is uppercase - fail", () => {
    it("should not work - return false", () => {
        const result = save({
            uniqueName: "lowercase",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(false);
    });
});

describe("Test if planet name contains special chars - pass", () => {
    it("should work - return true", () => {
        const result = save({
            uniqueName: "TEST.MESO-PLANETTE",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(true);
    });
});

describe("Test if planet name contains special chars - fail", () => {
    it("should work - return false", () => {
        const result = save({
            uniqueName: "TRAPPISTE$****01****-00",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(false);
    });
});