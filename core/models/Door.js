import {DOORS_TYPES} from "../enums/DoorsTypes";
import {validate} from "bycontract";

export class Door {
    #description;
    #closed;
    /**
     * @type {DOORS_TYPES}
     * */
    #type;

    constructor(description, type) {
        validate(arguments, ["String", DOORS_TYPES]);
        this.#description = description;
        this.#closed = true;
        this.#type = type;
    }

    get description() {
        return this.#description;
    }
    get type() {
        return this.#type;
    }

    get closed() {
        return this.#closed;
    }

    set closed(closed) {
        validate(closed, "Boolean");
        this.#closed = closed;
    }
}