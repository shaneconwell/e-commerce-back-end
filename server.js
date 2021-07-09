const express = require('express');
const routes = reguire('routes');
const sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app,use(express.urlendcoded({extended: true}));

app.use(routes);

sequelize.sync({force: true}).then (() => {
    app.listen(PORT, () => console.log('Now Listeing'));
})