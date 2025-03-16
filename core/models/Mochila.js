import {validate} from "bycontract";
import {Ferramenta} from "./Ferramenta";

export class Mochila {
    #ferramentas;
    
    constructor() {
        this.#ferramentas = [];
    }

    /**
     * Metodo usado para guardar uma ferramenta dentro do
     * "inventário" da Mochila
     * @param ferramenta {ferramenta: Ferramenta}
     * @return void
     * * */
    guarda(ferramenta) {
        validate(ferramenta, Ferramenta);
        this.#ferramentas.push(ferramenta);
    }

    /**
     * Metodo usado para pegar uma ferramenta dentro do
     * "inventário" da Mochila
     * @param nomeFerramenta {nomeFerramenta: [String] | String}
     * @return {Ferramenta |  null}
     * * */
    pega(nomeFerramenta) {
        validate(arguments, ["String"]);
        return this.#ferramentas.find(f => f.name === nomeFerramenta);
    }

    /**
     * Metodo usado para verificar se existe uma ferramenta dentro do
     * "inventário" da Mochila
     * @param nomeFerramenta {nomeFerramenta: [String] | String}
     * @return {Ferramenta |  null}
     * * */
    tem(nomeFerramenta) {
        validate(arguments, ["String"]);
        return this.#ferramentas.some(f => f.name === nomeFerramenta);
    }

    /**
     * Metodo usado para pegar uma ferramenta dentro do
     * "inventário" da Mochila
     * @return { [Ferramenta] | [] }
     * * */
    inventario() {
        return this.#ferramentas.map(obj => obj.name).join(", ");
    }
}