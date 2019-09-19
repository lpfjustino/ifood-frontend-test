import { parseHash } from "../../javascript/utils/index.js";

describe("the parseHash pure function behavior", () => {
    it("should return an object containing each prop", () => {
        const mockHash = "#foo=bar&john=doe";
        const hash = parseHash(mockHash);
        expect(hash).toMatchObject({ foo: "bar", john: "doe" });
    })
})