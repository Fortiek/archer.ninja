/**
 * All info on how to implement this was found from:
 * Eleventy Crash Course #4: https://www.youtube.com/watch?v=4Uv8C1wco6U
 */

const fetch = require("@11ty/eleventy-fetch");

async function getNews() {
    const url = "https://www.mmobomb.com/api1/latestnews"

    return fetch(url, {
        duration: "1d", // save for 1 day
        type: "json"    // we’ll parse JSON for you
    }).catch(e => {
        console.log(`Something went wrong: ${e}`)
    });
}

module.exports = getNews;