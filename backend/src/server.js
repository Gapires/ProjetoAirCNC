const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://admin:admin@omnistack-shard-00-00-naua7.mongodb.net:27017,omnistack-shard-00-01-naua7.mongodb.net:27017,omnistack-shard-00-02-naua7.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = Acessar query params (filtros)
// req.params = Acessar route params (edição, delete)
// req.body = Acessar corpo da requisição (criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);