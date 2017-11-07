import {setInput} from "../../../src/client/actions/index";
import {SET_INPUT} from "../../../src/client/actions/types";

describe("src/client/actions/index.jsx", () => {
    describe("function setInput()", () => {
        it("test", () => {
            expect(setInput("hello")).eql({type: SET_INPUT, input: "hello"});
        });
    });
});