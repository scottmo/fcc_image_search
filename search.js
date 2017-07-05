"use strict";

const GoogleImages = require("google-images");

const API_KEY = process.env.GOOGLE_API_KEY;
const CSE_ID = process.env.GOOGLE_CSE_ID;

const client = new GoogleImages(CSE_ID, API_KEY);

function normalizeResult(result) {
    return result.map(image => {
        return {
            url: image.url,
            description: image.description,
            thumbnail: image.thumbnail.url,
            parentPage: image.parentPage
        }
    });
}

module.exports = {
    search: function(searchTerm, pageOffset, callback) {
        const opt = {
            page: pageOffset || 1
        };

        client.search(searchTerm, opt).then(images => {
            callback(normalizeResult(images));
        });
    }
}
