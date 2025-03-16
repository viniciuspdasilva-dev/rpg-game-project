import {validate} from 'bycontract';

export class Ferramenta {

    #name;

    constructor(name) {
        validate(name, "String");
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    usar() {
        return true;
    }
}