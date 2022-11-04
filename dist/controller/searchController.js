"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const search = (req, res) => {
    let query = req.query.q; // pega o que usuário digitou
    let list = pet_1.Pet.getFromName(query); // vai gerar minha lista de acordo com o que filtrei 
    res.render('pages/page', {
        list,
        query
    });
};
exports.search = search;
