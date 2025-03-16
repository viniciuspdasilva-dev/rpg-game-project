import {validate} from "bycontract";
import {Engine} from "./Engine";
import {Ferramenta} from "./Ferramenta";
import {Object} from "./Object"


export class Sala {
    /**
     * @type {#name: String}
     * */
    #name;
    /**
     * @type {#ferramentas: Array<Ferramenta>}
     * */
    #ferramentas;
    /**
     * @type {#objects: Array<Object>}
     * */
    #objects;
    #ports;
    #engine;

    constructor(name, engine) {
        validate(arguments, ["String", Engine]);
        this.#name = name;
        this.#engine = engine;
        this.#ferramentas = [];
        this.#objects = [];
        this.#ports = [];
    }

    get name() {
        return this.#name;
    }

    get objects() {
        return this.#objects;
    }

    get ferramentas() {
        return this.#ferramentas;
    }

    get engine() {
        return this.#engine;
    }

    objetosDisponiveis() {
        let arrObj = [...this.#objects];
        return arrObj.map(obj => obj.name + ":" + obj.description);
    }

}