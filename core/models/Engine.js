import {Sala} from "./Sala";
import {validate} from "bycontract";
import {Mochila} from "./Mochila";

export class Engine {
    #mochila;
    #salaCorrente;
    #fim;

    constructor(){
        this.#mochila = new Mochila();
        this.#salaCorrente = null;
        this.#fim = false;
        this.criaCenario();
    }

    get mochila(){
        return this.#mochila;
    }

    get salaCorrente(){
        return this.#salaCorrente;
    }

    set salaCorrente(sala){
        validate(sala,Sala);
        this.#salaCorrente = sala;
    }

    indicaFimDeJogo(){
        this.#fim = true;
    }

    // Para criar um jogo deriva-se uma classe a partir de
    // Engine e se sobrescreve o método "criaCenario"
    criaCenario(){}

    // Para poder acionar o método "joga" deve-se garantir que
    // o método "criaCenario" foi acionado antes
    joga() {
        let novaSala = null;
        let acao = "";
        let tokens = null;
        while (!this.#fim) {
            console.log("-------------------------");
            console.log(this.salaCorrente.textoDescricao());
            acao = prompt("O que voce deseja fazer? ");
            tokens = acao.split(" ");
            switch (tokens[0]) {
                case "fim":
                    this.#fim = true;
                    break;
                case "pega":
                    if (this.salaCorrente.pega(tokens[1])) {
                        console.log("Ok! " + tokens[1] + " guardado!");
                    } else {
                        console.log("Objeto " + tokens[1] + " não encontrado.");
                    }
                    break;
                case "inventario":
                    console.log("Ferramentas disponiveis para serem usadas: " + this.#mochila.inventario());
                    break;
                case "usa":
                    if (this.salaCorrente.usa(tokens[1],tokens[2])) {
                        console.log("Feito !!");
                        if (this.#fim == true){
                            console.log("Parabens, voce venceu!");
                        }
                    } else {
                        console.log("Não é possível usar " + tokens[1] + "sobre" + tokens[2] + " nesta sala");
                    }
                    break;
                case "sai":
                    novaSala = this.salaCorrente.sai(tokens[1]);
                    if (novaSala == null) {
                        console.log("Sala desconhecida ...");
                    } else {
                        this.#salaCorrente = novaSala;
                    }
                    break;
                default:
                    console.log("Comando desconhecido: " + tokens[0]);
                    break;
            }
        }
        console.log("Jogo encerrado!");
    }
}