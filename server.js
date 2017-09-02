#!/usr/bin/env node

'use strict';

const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.listen(3000, () => {
    console.log('Palvelin käynnissä ja vastaa osoitteessa\n\nhttp://localhost:3000/');
});
