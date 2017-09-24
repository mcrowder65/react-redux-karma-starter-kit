import {setUsername, setIsDrawerOpen} from "../../../src/client/actions/index";
import {SET_IS_DRAWER_OPEN, SET_USERNAME} from "../../../src/client/actions/action-types";

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
        let val = 1234;
        it(`${val} should throw`, () => {
            expect(() => setUsername(val).to.throw());
        });
        it(`${val = -1} should throw`, () => {
            expect(() => setUsername(val).to.throw());
        });

        it(`${val = 1} should throw`, () => {
            expect(() => setUsername(val).to.throw());
        });

        it(`${val = 0} should throw`, () => {
            expect(() => setUsername(val).to.throw());
        });
        it(`${val = "matt"} should not throw`, () => {
            expect(() => setUsername(val)).to.not.throw();
        });
        const newVal = {
            type: SET_USERNAME,
            username: val
        };
        it(`${val} should return action with type ${SET_USERNAME} and username: ${val}`, () => {
            expect(setUsername(val)).eql(newVal);
        });
    });
    describe("function setIsDrawerOpen()", () => {
        const obj = {
            type: SET_IS_DRAWER_OPEN
        };
        const isDrawerOpen = false;
        it(`null should return isDrawerOpen=${isDrawerOpen}`, () => {
            expect(setIsDrawerOpen(null)).eql({...obj, isDrawerOpen});
        });
        it(`undefined should return isDrawerOpen=${isDrawerOpen}`, () => {
            expect(setIsDrawerOpen(undefined)).eql({...obj, isDrawerOpen});
        });

    });
});