import {setUsername} from "../../../src/client/actions/index";
import {SET_IS_DRAWER_OPEN} from "../../../src/client/actions/action-types";

describe("src/client/actions/index.jsx", () => {
    describe("function setUsername()", () => {

        it("null should throw error", () => {
            expect(() => setUsername(null)).to.throw();
        });
        it("undefined should throw error", () => {
            expect(() => setUsername(undefined)).to.throw();
        });

        it("empty string should throw error", () => {
            expect(() => setUsername("")).to.throw();
        });
        const arbNum = 1234;
        let val = arbNum;
        it(`${val} should throw error`, () => {
            console.log(typeof val);
            expect(() => setUsername(val)).to.throw();
        });

        it(`${val = -1} should throw error`, () => {
            expect(() => setUsername(val)).to.throw();
        });

        it(`${val = 0} should throw error`, () => {
            expect(() => setUsername(val)).to.throw();
        });

        it(`${val = 1} should throw error`, () => {
            expect(() => setUsername(val)).to.throw();
        });

        it(`${val = "matt"} should not throw`, () => {
            expect(() => setUsername(val)).to.not.throw();
        });
    });
});