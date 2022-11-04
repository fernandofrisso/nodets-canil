"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fish = exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/page', {
        homeact: "active",
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromtype('dog');
    res.render('pages/page', {
        dogact: "active",
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromtype('cat');
    res.render('pages/page', {
        catact: "active",
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fish = (req, res) => {
    let list = pet_1.Pet.getFromtype('fish');
    res.render('pages/page', {
        fishact: "active",
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fish = fish;
