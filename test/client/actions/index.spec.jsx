import {setUsername} from "../../../src/client/actions/index";

describe("src/client/actions/index.jsx", () => {
    describe("function setUsername()", () => {

        it("null should throw error", () => {
            expect(() => setUsername(null)).to.throw();
        });
    });
});