import {IRepository} from "./repository";

export class StubRepository implements IRepository {
    public put(object) {
        return object;
    }
}
