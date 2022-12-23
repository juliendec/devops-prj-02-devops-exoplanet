const { save } = require("../Exoplanet");

describe("tests add planets - save", () => {
    it("should work - return true", () => {
        const result = save({
            uniqueName: "TEST",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(true);
    });
});

describe("tests add planets - save", () => {
    it("should not work - return false", () => {
        const result = save({
            uniqueName: "lowercase",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(false);
    });
});

describe("tests add planets - save", () => {
    it("should work - return true", () => {
        const result = save({
            uniqueName: "test.Meso-planete",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(true);
    });
});