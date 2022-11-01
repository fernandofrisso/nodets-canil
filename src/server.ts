    // IMPORTANDO

    import express from 'express';
    import mustache from 'mustache-express';
    import dotenv from 'dotenv';
    import path from 'path';
    import mainRoutes from './routes/index'

// CONFIGURANDO O DOTENV

    dotenv.config();

// CONFIGURANDO O EXPRESS

    const server = express();

// CONFIGURANDO O MUSTACHE

    server.set('view engine', 'mustache');
    server.set('views', path.join(__dirname, 'views'));
    server.engine('mustache', mustache());

// CONFIGURANDO NOSSA PASTA DE ARQUIVOS ESTÁTICOS

    server.use(express.static(path.join(__dirname,'../public')))

// ROTAS

server.use(mainRoutes);

//PÁGINA DE NÃO ECONTRADO

server.use((req, res) => {

    res.send('pagina não econtrada')

})


// POE O SERVIDOR PARA RODAR

server.listen(process.env.PORT);