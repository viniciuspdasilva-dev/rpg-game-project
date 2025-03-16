import {validate} from "bycontract";

export class Object {
    #name;
    #descriptionBeforeAction;
    #descriptionAfterAction;
    #actionOk;


    constructor(name, descriptionBeforeAction, descriptionAfterAction) {
        validate(arguments,["String","String","String"]);
        this.#name = name;
        this.#descriptionBeforeAction = descriptionBeforeAction;
        this.#descriptionAfterAction = descriptionAfterAction;
        this.#actionOk = false;
    }

    get name() {
        return this.#name;
    }

    get actionOk() {
        return this.#actionOk;
    }

    set actionOk(actionOk) {
        validate(actionOk,"Boolean");
        this.#actionOk = actionOk;
    }

    get description() {
        return !this.actionOk ? this.#descriptionBeforeAction : this.#descriptionAfterAction;
    }

    usa(ferramenta, object) {}
}