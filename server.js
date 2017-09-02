#!/usr/bin/env node

'use strict';

const tervehdysPalvelu = require('./service/tervehdysPalvelu.js');

const express = require('express');
const app = express();

app.get('/hei/:nimi', function (req, res) {
  tervehdysPalvelu.tervehdi(req.params.nimi, (tervehdysJson) => {
    res.jsonp(tervehdysJson);
  });
})

app.use('/', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.listen(3000, () => {
    console.log('Palvelin käynnissä ja vastaa osoitteessa\n\nhttp://localhost:3000/');
});
