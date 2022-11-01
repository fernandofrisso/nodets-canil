    // IMPORTANDO

    import {Router} from 'express';
    import * as  pageController  from "../controller/pageController";
    import * as  searchController from "../controller/searchController";

    //CRIANDO AS ROTAS
  
    const router = Router();

    router.get('/', pageController.home);
    router.get('/dogs', pageController.dogs);
    router.get('/cats', pageController.cats);
    router.get('/fish', pageController.fish);

    router.get('/search', searchController.search);


    export default router;
