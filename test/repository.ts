import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {IRepository} from "viverra";
import {StubRepository} from "viverra";

//noinspection TypeScriptUnresolvedFunction
describe("WebStorm Mocha stub", () => undefined);

@suite("mocha typescript")
class Basic {

    @test("should pass when asserts are fine")
    asserts_pass() {
        let r :IRepository = new StubRepository();
        r.put({});
    }
}
