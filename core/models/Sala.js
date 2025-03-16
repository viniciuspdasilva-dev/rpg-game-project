import {validate} from "bycontract";
import {Engine} from "./Engine";


export class Sala {

    #name;
    #ferramentas;
    #objects;
    #ports;
    #engine;

    constructor(name, engine) {
        validate(arguments, ["String", Engine]);
        this.#name = name;
        this.#engine = engine;
        this.#ferramentas = new Map();
        this.#objects = new Map();
        this.#ports = new Map();
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

    get ports() {
        return this.#ports;
    }

    get engine() {
        return this.#engine;
    }

    objetosDisponiveis() {
        let arrObj = [...this.#objects.values()];
        return arrObj.map(obj => obj.name + ":" + obj.description);
    }

    ferramentasDisponiveis() {
        let arrObj = [...this.#ferramentas.values()];
        return arrObj.map(f => f.name);
    }

    pega(nomeFerramenta) {
        validate(nomeFerramenta, "String");
        let ferramenta = this.#ferramentas.get(nomeFerramenta);
        if (ferramenta != null) {
            this.#engine.mochila.guarda(ferramenta);
            this.#ferramentas.delete(ferramenta);
            return true;
        } else {
            return false;
        }
    }

    sai(porta) {
        validate(porta, "String");
        return this.#ports.get(porta);
    }

    textoDescricao() {
        let descricao = "Você está no "+this.nome+"\n";
        if (this.objects.size === 0){
            descricao += "Não há objetos na sala\n";
        }else{
            descricao += "Objetos: "+this.objetosDisponiveis()+"\n";
        }
        if (this.ferramentas.size === 0){
            descricao += "Não há ferramentas na sala\n";
        }else{
            descricao += "Ferramentas: "+this.ferramentasDisponiveis()+"\n";
        }
        descricao += "Portas: "+this.portasDisponiveis()+"\n";
        return descricao;
    }

    usa(ferramenta, objeto) {
        return false;
    }

}