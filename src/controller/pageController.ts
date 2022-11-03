import {Request, Response} from "express";

import {Pet} from "../models/pet"



export const home = (req: Request, res: Response) => {

    let list = Pet.getAll();

    res.render('pages/page', {

        homeact: "active",

        banner: {

            title: 'todos os animais',
            background: 'allanimals.jpg'
        },

        list

    });

};

export const dogs = (req: Request, res: Response) => {

    let list = Pet.getFromtype('dog')

    res.render('pages/page', {

        dogact: "active",

        banner: {

            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },

        list

    });


};

export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromtype('cat');

    res.render('pages/page', {

        catact: "active",

        banner: {

            title: 'Gatos',
            background: 'banner_cat.jpg'
        }, 

        list

    });


};

export const fish = (req: Request, res: Response) => {

    let list = Pet.getFromtype('fish');

    res.render('pages/page', {

        fishact: "active",

        banner: {

            title: 'Peixes',
            background: 'banner_fish.jpg'
        },

        list


    });

};