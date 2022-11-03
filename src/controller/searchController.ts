import {Request, Response} from "express";

import {Pet} from "../models/pet"

export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string; // pega o que usuário digitou

    let list = Pet.getFromName(query); // vai gerar minha lista de acordo com o que filtrei 

    res.render('pages/page', {
        
        list,
        query
    
    })

}