"use strict";

module.exports = function(size) {
    const store = [];

    return {
        getData() {
            return store;
        },
        add(data) {
            store.unshift(data);
            if (store.length > size) {
                store.pop();
            }
        }
    };
};
