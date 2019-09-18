import { groupBy, groupById } from "../../javascript/utils";

describe("The pure functions behaviour", () => {
    describe("The groupBy function behaviour", () => {
        it("should return a function that groups by a given key", () => {
            const fn = groupBy("foo");
            expect(fn).toBeInstanceOf(Function);
        });
        
        describe("The function returned by groupBy", () => {
            it("should group the objects array by the given key", () => {
                const fn = groupBy("key");
                const input = [ { "key": "foo", "name": "bar" }, { "key": "bar", "name": "baz" } ];
                const result = fn(input);

                expect(result).toMatchObject({
                    foo: { "name": "bar" },
                    bar: { "name": "baz" },
                });
            });
        });
    });

    describe("The groupById function behaviour", () => {
        it("should group the objects array by id", () => {
            const input = [ { "id": "foo", "name": "bar" }, { "id": "bar", "name": "baz" } ];
            const result = groupById(input);

            expect(result).toMatchObject({
                foo: { "name": "bar" },
                bar: { "name": "baz" },
            });
        });
    });
});
