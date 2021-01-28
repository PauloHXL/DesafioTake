const Router = require("express");
const routes = Router();
const BotControler = require('./controllers/BotController');

routes.get('/test', (request, response) => {
     return response.json({ message: 'servidor funcionando corretamente na porta 3001' });
});

routes.get('/oldcsharp', BotControler.searchGit);

module.exports = routes;