const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const{setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);
setupWebsocket(server);

//conexao com o cluster MongoDB Atlas
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-oet8x.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);