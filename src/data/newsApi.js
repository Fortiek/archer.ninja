const fetch = require('node-fetch-native');
require('dotenv').config();

/**
 * Should use the .env file to load API key,
 * fetch news stories based on a drop-down from
 * index, maybe store stories in a mongo instance?
 */

async function fetchNews () {
    // First endpoint
    const newsUrl = `https://newsapi.org/v2`;
    const key = `${process.env.NEWS_API}`;
    
    const category = "everything";
    const reqHeaders = {
        "headers": {
            "X-Api-Key": `${key}`,
            "Accept": "application/json"
        }
    }

    // Console log test ftw
    let res = await fetch(`${newsUrl}/${category}?q=technology&q=entertainment&q=video%20games`, reqHeaders);
    let data = await res.json();


    // console.log(data);
    // console.log(Object.keys(data.articles[0]));
    return data;
}

module.exports = fetchNews;