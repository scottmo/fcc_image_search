"use strict";

const express = require("express");
const searchEngine = require("./search.js");
const MruStore = require("./mru-store.js");

const app = express();
const port = process.env.PORT || 8080;

const recentSearches = new MruStore(10);

app.get('/api/latest/imagesearch', (req, res) => {
    res.json(recentSearches.getData());
});

app.get('/api/imagesearch/:searchString', (req, res) => {
    const searchString = req.params.searchString;
    const offset = req.query.offset;

    recentSearches.add({
        term: searchString,
        when: new Date().toISOString()
    });

    searchEngine.search(searchString, offset, imageData => {
        res.json(imageData)
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port + '!');
});
