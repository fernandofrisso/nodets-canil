"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const data = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
];
exports.Pet = {
    getAll: () => {
        return data;
    },
    getFromtype: (type) => {
        return data.filter(item => {
            if (item.type === type) {
                return true;
            }
            else {
                return false;
            }
        });
    },
    getFromName: (name) => {
        return data.filter(item => {
            if (item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1) { // pq do "- 1 " => Quando o indexOf não acha nada, ele retorna -1. Desta forma, se ele achar algo, certamente será maior que -1
                return true;
            }
            else {
                return false;
            }
        });
    }
};