const { save } = require("../Exoplanet");

describe("tests add planets - save", () => {
    it("should work - return true", () => {
        const result = save({
            uniqueName: "test1",
            hClass: "Mésoplanète",
            discoveryYear: 2022,
        })
        expect(result).toBe(true);
    });
});