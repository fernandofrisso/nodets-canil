"use strict";
// IMPORTANDO
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
// CONFIGURANDO O DOTENV
dotenv_1.default.config();
// CONFIGURANDO O EXPRESS
const server = (0, express_1.default)();
// CONFIGURANDO O MUSTACHE
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
// CONFIGURANDO NOSSA PASTA DE ARQUIVOS ESTÁTICOS
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// ROTAS
server.use(index_1.default);
//PÁGINA DE NÃO ECONTRADO
server.use((req, res) => {
    res.render('pages/404');
});
// POE O SERVIDOR PARA RODAR
server.listen(process.env.PORT);
