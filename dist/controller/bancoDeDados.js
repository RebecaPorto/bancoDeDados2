"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculos = exports.listarVeiculos = exports.persistirVeiculos = void 0;
const Veiculo_1 = require("../model/Veiculo");
let bancoDadosVeiculo = [];
function persistirVeiculos(veiculo) {
    //persistindo os dados
    try {
        bancoDadosVeiculo.push(veiculo);
    }
    catch (_a) {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirVeiculos = persistirVeiculos;
function listarVeiculos() {
    return bancoDadosVeiculo;
}
exports.listarVeiculos = listarVeiculos;
function inicializarVeiculos() {
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('JHGHFDYTL', 'Fastback', 'Alcool', 4, 6777, 'FIAT', 60000, 1));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('GKJGGIUY', 'Montana', 'Gasolina', 4, 4555, 'Chevrolet', 45000, 1));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('KJFYTDS', 'Tiguan', 'Alcool', 4, 2333, 'Volkswagen', 18000, 1));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo('JJHGKPO', 'Hybrid', 'GAsolina', 4, 8999, 'Honda Civic', 15000, 1));
}
exports.inicializarVeiculos = inicializarVeiculos;
//# sourceMappingURL=bancoDeDados.js.map